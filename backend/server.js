const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const groupRoutes = require("./routes/groupRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/cyberlab");

app.use("/auth", authRoutes);
app.use("/groups", groupRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
