const mongoose = require("mongoose");

const { Schema } = mongoose;

const resumeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      requied: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
  },
  {
    collection: "ResumeData",
  }
);

module.exports = resume = mongoose.model("Resume", resumeSchema);
