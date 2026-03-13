const router = require("express").Router();
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");

const Employee = require("../models/Employee");

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), async (req, res) => {

  let results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {

      for (let emp of results) {

        await Employee.create({
          name: emp.name,
          email: emp.gmail,
          department: emp.department
        });

      }

      res.json("CSV uploaded successfully");

    });

});

module.exports = router;
