const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    unitId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        userId: { type: ObjectId, ref: "User" },
        role: {
          type: String,
          enum: ["owner", "admin", "member", "observer"],
          default: "member",
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better performance
boardSchema.index({ createdBy: 1, archived: 1 });
boardSchema.index({ "members.userId": 1 });
boardSchema.index({ title: "text", description: "text" });

// Virtual for getting lists count in board
boardSchema.virtual("listsCount", {
  ref: "List",
  localField: "_id",
  foreignField: "boardId",
  count: true,
  match: { archived: false },
});

module.exports = mongoose.model("Board", boardSchema);
