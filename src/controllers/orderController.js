// order controller

const Courses = require("../models/Courses");
const Order = require("../models/Order");
const { User } = require("../models/User");

// create order

const createOrder = async (req, res) => {
  const { courseId, userId, curriculumProductId } = req.body;

  try {
    const order = await Order.create(req.body);

    // send email to user
    const user = await User.findById(userId);
    // const course = await Courses.findById(courseId);

    const to = user.email;
    const name = user.fullName;
    const from = process.env.SMTP_USER;
    const subject = "Order created";
    const message = `Your order for  has been created`;
    await sendContactEmail(from, to, subject, name, message);
    res.status(201).json(order);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error creating order", error: error.message });
  }
};

// get all orders
const getAllOrders = async (req, res) => {
  try {
    // pagination and search by user name or course name
    const { page = 1, limit = 10, search } = req.query;
    const skip = (page - 1) * limit;
    const query = {};
    if (search) {
      query.$or = [
        { "user.name": { $regex: search, $options: "i" } },
        { "course.name": { $regex: search, $options: "i" } },
      ];
    }
    const orders = await Order.find(query)
      .skip(skip)
      .limit(limit)
      .populate("userId", "fullName email")
      .populate("courseId");
    res.status(200).json({
      orders,
      total: orders.length,
      page,
      limit,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Error getting all orders", error: error.message });
  }
};

// get order by id
const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting order by id", error: error.message });
  }
};

// delete order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
};

// get all orders by user id
const getAllOrdersByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const query = {};
    query.userId = userId;
    const orders = await Order.find(query)
      .skip(skip)
      .limit(limit)
      .populate("userId", "name email")
      // insd courseId iwould like to poulate all filed and school
      .populate({
        path: "courseId", // First populate courseId
        populate: {
          path: "school", // Then populate school inside courseId
        },
      });
    res.status(200).json({
      orders,
      total: orders.length,
      page,
      limit,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting all orders by user id",
      error: error.message,
    });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  getAllOrdersByUserId,
};
