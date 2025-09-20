// board routes

const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { ROLES } = require("../models/User");
const {
  getAllBoards,
  createBoards,
  moveCard,
  getBoardById,
  createCard,
  updateCard,
  deleteCard,
  createList,
  updateList,
  deleteList,
  updateBoard,
  deleteBoard,
  genrateBoardForUnit,
} = require("../controllers/boardController");
// board routes
router.get("/", verifyToken, getAllBoards);
router.post("/", verifyToken, createBoards);
router.get("/:id", verifyToken, getBoardById);
router.put("/:id", verifyToken, updateBoard);
router.delete("/:id", verifyToken, deleteBoard);
router.get(
  "/generate-board-for-unit/:unitId",
  verifyToken,
  genrateBoardForUnit
);
// card routes
router.post("/card", verifyToken, createCard);
router.put("/card/:cardId", verifyToken, updateCard);
router.delete("/card/:cardId", verifyToken, deleteCard);
router.put("/move-card/:cardId", verifyToken, moveCard);
// list routes
router.post("/list", verifyToken, createList);
router.put("/list/:listId", verifyToken, updateList);
router.delete("/list/:listId", verifyToken, deleteList);

module.exports = router;
