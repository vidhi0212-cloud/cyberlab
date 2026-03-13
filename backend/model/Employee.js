const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  token: String,
  clicked: { type: Boolean, default: false }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
