const mongoose = require("mongoose");

const weeklyScheduleSchema = new mongoose.Schema(
  {
    weeklySchedule: {
      type: Map,
      of: {
        start: {
          type: String,
          required: true,
        },
        end: {
          type: String,
          required: true,
        },
      },
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WeeklySchedule", weeklyScheduleSchema);
