const router = require("express").Router();
const Employee = require("../models/Employee");

router.get("/:token", async (req,res)=>{

const token = req.params.token;

const employee = await Employee.findOne({token:token});

if(employee){

employee.clicked = true;

await employee.save();

}

res.send("Link clicked and recorded");

});

module.exports = router;
