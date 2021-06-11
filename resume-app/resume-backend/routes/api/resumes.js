const express = require("express");

const router = express.Router();

// Load model
const Resume = require("../../models/resume");

// test API
router.get("/test", (req, res) => {
  res.send("Testing successful for resume API");
});

// get resumes
router.get("/", (req, res) => {
  Resume.find()
    .then((resumes) => {
      //console.log(resumes);
      res.send(resumes);
    })
    .catch((err) =>
      res.status(404).json({ noresumesfound: "No Resumes found" })
    );
});

router.get("/:email", (req, res) => {
  Resume.findOne({ email: req.params.email })
    .then((resume) => {
      //console.log(resumes);
      res.send(resume);
    })
    .catch((err) =>
      res.status(404).json({ noresumesfound: "No Resume found" })
    );
});

module.exports = router;
