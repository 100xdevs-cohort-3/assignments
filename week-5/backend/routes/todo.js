const { Router } = require("express");
const { Todo } = require("../db");
const authenticateUser = require("../middleware/user");

const router = Router();

router.use(authenticateUser);

router.get("/", async (req, res) => {
  const user = req.user;

  const todos = await Todo.find({ creator: user._id });

  res.status(200).json({
    todos,
  });
});

router.post("/", async (req, res) => {
  const user = req.user;
  const { title, description, createdAt } = req.body;

  if (!title || !description || !createdAt) {
    return res.status(400).json({ error: "Please proide valid todo." });
  }

  await Todo.create({
    title,
    description,
    createdAt,
    creator: user._id,
  });

  res.status(201).json({ msg: "Todo created successfully." });
});

router.delete("/", async (req, res) => {
  const todoId = req.body.id;

  if (!todoId) {
    return res.status(400).json({ error: "Todo id not provided." });
  }

  try {
    await Todo.deleteOne({ _id: todoId });
    res.status(200).json({ msg: "Successfully deleted." });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete todo." });
  }
});

module.exports = router;
