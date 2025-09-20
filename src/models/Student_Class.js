// src/models/Course_Class.js
const mongoose = require("mongoose");

const studentClassSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classroom",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const StudentClass = mongoose.model("StudentClass", studentClassSchema);

module.exports = { StudentClass };
