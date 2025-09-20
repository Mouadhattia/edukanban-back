// src/models/Course_Class.js
const mongoose = require("mongoose");

const courseClassSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseClass = mongoose.model("CourseClass", courseClassSchema);

module.exports = { CourseClass };
