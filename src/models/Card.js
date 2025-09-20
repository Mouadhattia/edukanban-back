const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    cardParent: { type: ObjectId, ref: "Card" },
    listId: { type: ObjectId, ref: "List" },
    boardId: { type: ObjectId, ref: "Board", required: true },
    assignedTo: { type: ObjectId, ref: "User" },
    position: { type: Number, required: true },
    borderColor: { type: String },
    createdBy: { type: ObjectId, ref: "User" },
    archived: { type: Boolean, default: false },
    activityId: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);

// card data exmple
