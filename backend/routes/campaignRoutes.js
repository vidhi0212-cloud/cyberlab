const router = require("express").Router();
const Campaign = require("../models/Campaign");
const Employee = require("../models/Employee");

router.post("/create", async (req,res)=>{

const {campaignName,attacks,departments,template} = req.body;

const campaign = new Campaign({

campaignName,
attacks,
departments,
template

});

await campaign.save();

res.json("Campaign Created");

});

module.exports = router;
