const router = require("express").Router();
const Campaign = require("../models/Campaign");
const Employee = require("../models/Employee");

const generateToken = require("../controllers/tokenGenerator");
const templates = require("../controllers/templates");

router.post("/create", async (req, res) => {

  const { campaignName, attacks, departments } = req.body;

  const campaign = new Campaign({
    campaignName,
    attacks,
    departments
  });

  await campaign.save();

  res.json("Campaign Created");

});


// Simulation delivery

router.post("/deliver", async (req,res)=>{

const {attack, departments} = req.body;

const selectedTemplate = templates[attack];

const employees = await Employee.find({
department: { $in: departments }
});

let result = [];

for(let emp of employees){

const token = generateToken();

emp.token = token;
await emp.save();

result.push({

name: emp.name,
email: emp.email,
department: emp.department,
token: token,
template: selectedTemplate.subject

});

}

res.json(result);

});

module.exports = router;
