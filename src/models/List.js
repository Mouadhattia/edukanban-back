const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const listSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    boardId: {
      type: ObjectId,
      ref: "Board",
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      default: "#ddd",
    },
    archived: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for better performance
listSchema.index({ boardId: 1, position: 1 });
listSchema.index({ boardId: 1, archived: 1 });

// Virtual for getting cards count
listSchema.virtual("cardsCount", {
  ref: "Card",
  localField: "_id",
  foreignField: "listId",
  count: true,
  match: { archived: false },
});

// Pre-save middleware to handle position
listSchema.pre("save", async function (next) {
  if (this.isNew && !this.position) {
    const lastList = await this.constructor
      .findOne({ boardId: this.boardId, archived: false })
      .sort({ position: -1 });

    this.position = lastList ? lastList.position + 1 : 0;
  }
  next();
});

module.exports = mongoose.model("List", listSchema);
