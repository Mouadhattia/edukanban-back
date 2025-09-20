// order routes
const express = require("express");
const orderController = require("../controllers/orderController");
const { ROLES } = require("../models/User");
const { verifyToken, authorize } = require("../middleware/auth");

const router = express.Router();

const permisson = authorize(ROLES.SCHOOL_ADMIN, ROLES.SUPER_ADMIN);

// create order
router.post("/", verifyToken, orderController.createOrder);

// get all orders - FIXED: verifyToken first, then isSchoolAdmin
router.get("/", verifyToken, permisson, orderController.getAllOrders);

// get order by id - FIXED: verifyToken first, then isSchoolAdmin
router.get("/:id", verifyToken, permisson, orderController.getOrderById);

// delete order - FIXED: verifyToken first, then isSchoolAdmin
router.delete("/:id", verifyToken, permisson, orderController.deleteOrder);

// get all orders by user id - FIXED: verifyToken first, then isUser
router.get("/user/:userId", verifyToken, orderController.getAllOrdersByUserId);

module.exports = router;
