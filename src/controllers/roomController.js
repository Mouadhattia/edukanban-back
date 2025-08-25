// Room controller
const Room = require("../models/Room");

// get all rooms
const getAllRooms = async (req, res) => {
  try {
    console.log(req.query);
    const { schoolId, search } = req.query;
    const query = {
      name: { $regex: search, $options: "i" },
    };
    if (schoolId) {
      query.school = schoolId;
    }

    const rooms = await Room.find(query);
    console.log(rooms);
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a room by id
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};
// create a room
const createRoom = async (req, res) => {
  try {
    const { name, capacity, location, schoolId } = req.body;
    const room = await Room.create({
      name,
      capacity,
      location,
      school: schoolId,
    });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a room
const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete a room
const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    await Room.findByIdAndDelete(id);
    res.status(200).json("Room deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

// export modules
module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
