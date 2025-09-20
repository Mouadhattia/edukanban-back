//course order model
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    curriculumProductId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "syl_product",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["cash", "bank_transfer", "card"],
      default: "card",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },

    paymentGateway: {
      type: String,
      enum: ["stripe", "paypal", "razorpay"],
      default: "stripe",
    },
    paymentGatewayId: {
      type: String,
    },
    paymentGatewayStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
