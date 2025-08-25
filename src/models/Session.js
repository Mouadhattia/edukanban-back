// models/Session.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    classRoom: {
      type: Schema.Types.ObjectId,
      ref: "ClassRoom",
      required: true,
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: "Subject",
    },
    studyPeriod: {
      type: Schema.Types.ObjectId,
      ref: "StudyPeriod",
      required: true,
    },
    teacher: {
      type: Schema.Types.ObjectId,
      ref: "User", // if you have a User model for teachers
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: "Room",
    },
    weeklySchedule: {
      type: Schema.Types.ObjectId,
      ref: "WeeklySchedule",
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Session", sessionSchema);
