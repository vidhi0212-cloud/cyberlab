const router = require("express").Router();
const Employee = require("../models/Employee");


// Get all results
router.get("/", async (req, res) => {

  const employees = await Employee.find();

  res.json(employees);

});


// Department statistics
router.get("/department", async (req,res)=>{

const employees = await Employee.find();

let stats = {};

employees.forEach(emp => {

if(!stats[emp.department]){

stats[emp.department] = {
total:0,
clicked:0
};

}

stats[emp.department].total++;

if(emp.clicked){
stats[emp.department].clicked++;
}

});

res.json(stats);

});

module.exports = router;
