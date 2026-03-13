const router = require("express").Router();
const Campaign = require("../models/Campaign");
const Employee = require("../models/Employee");

const generateToken = require("../controllers/tokenGenerator");
const templates = require("../controllers/templates");
const sendEmail = require("../controllers/emailSender");


// Create campaign
router.post("/create", async (req, res) => {

  const { campaignName, attacks, departments, template } = req.body;

  const campaign = new Campaign({
    campaignName,
    attacks,
    departments,
    template
  });

  await campaign.save();

  res.json("Campaign Created");

});


// Deliver simulation emails
router.post("/deliver", async (req, res) => {

  const { attack, departments } = req.body;

  const selectedTemplate = templates[attack];

  const employees = await Employee.find({
    department: { $in: departments }
  });

  let result = [];

  for (let emp of employees) {

    const token = generateToken();

    emp.token = token;

    await emp.save();

    // send phishing simulation email
    await sendEmail(
      emp.email,
      selectedTemplate.subject,
      selectedTemplate.body,
      token
    );

    result.push({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      token: token
    });

  }

  res.json(result);

});

module.exports = router;
