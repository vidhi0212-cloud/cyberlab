const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/authRoutes");
const groupRoutes = require("./routes/groupRoutes");
const campaignRoutes = require("./routes/campaignRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect("mongodb://localhost:27017/cyberlab", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});

// Route connections
app.use("/auth", authRoutes);
app.use("/groups", groupRoutes);
app.use("/campaign", campaignRoutes);

// Test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("Cyber Awareness Simulator Backend Running");
});

// Start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
