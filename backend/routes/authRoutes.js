const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {

  const hash = await bcrypt.hash(req.body.password, 10);

  const admin = new Admin({
    name: req.body.name,
    email: req.body.email,
    password: hash
  });

  await admin.save();

  res.json("Admin registered");
});

router.post("/login", async (req, res) => {

  const admin = await Admin.findOne({ email: req.body.email });

  if (!admin) return res.json("Admin not found");

  const valid = await bcrypt.compare(req.body.password, admin.password);

  if (!valid) return res.json("Wrong password");

  const token = jwt.sign({ id: admin._id }, "secretkey");

  res.json({ token });
});

module.exports = router;
