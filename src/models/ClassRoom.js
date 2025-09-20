const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "School",
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    levelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Level",
      required: true,
    },
    studyPeriodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudyPeriod",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },
    capacity: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = { Classroom };
