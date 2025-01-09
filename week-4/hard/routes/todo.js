const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const { Todo } = require("../database");
const router = Router();

// todo Routes
router.post("/", adminMiddleware, async (req, res) => {
  const { title, description } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === ""
  ) {
    return res.json({ status: "Please provide valid todo." });
  }

  await Todo.create({ title, description, creator: req.user._id });

  res.json({ status: "Todo added successfully." });
});

router.put("/", adminMiddleware, async (req, res) => {
  const todoId = req.query.id;

  if (!todoId) {
    return res.json({ status: "Invalid Id." });
  }

  const { title, description } = req.body;

  if (
    !title ||
    title.trim() === "" ||
    !description ||
    description.trim() === ""
  ) {
    return res.json({ status: "Please provide valid todo." });
  }

  await Todo.findByIdAndUpdate({ _id: todoId }, { title, description });

  res.json({ status: "Todo updated successfully." });
});

router.delete("/", adminMiddleware, async (req, res) => {
  const todoId = req.query.id;

  if (!todoId) {
    return res.json({ status: "Invalid Id." });
  }

  await Todo.deleteOne({ _id: todoId });

  res.json({ status: "Todo deleted successfully." });
});

router.delete("/:id", adminMiddleware, async (req, res) => {
  const todoId = req.params.id;

  await Todo.deleteOne({ _id: todoId });

  res.json({ status: "Todo deleted successfully." });
});

router.get("/", adminMiddleware, async (req, res) => {
  const todos = await Todo.find({ creator: req.user._id });

  res.json({ todos });
});

router.get("/:id", adminMiddleware, async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  res.json({ todo });
});

module.exports = router;
