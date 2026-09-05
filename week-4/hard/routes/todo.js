const { Router } = require('express');
const mongoose = require('mongoose');
const { Todo } = require('../database');
const authenticate = require('../middleware/user');
const { asyncRoute } = require('../lib/security');
const router = Router();
router.use(authenticate);
function changes(body, creating = false) {
  const update = {};
  if (creating || body.title !== undefined) {
    if (typeof body.title !== 'string' || !body.title.trim() || body.title.length > 200)
      throw Object.assign(new Error('Enter a title of 1–200 characters'), { status: 400 });
    update.title = body.title.trim();
  }
  if (body.description !== undefined) {
    if (typeof body.description !== 'string' || body.description.length > 2000)
      throw Object.assign(new Error('Invalid description'), { status: 400 });
    update.description = body.description;
  }
  if (body.status !== undefined) {
    if (!['Todo', 'In progress', 'Done'].includes(body.status))
      throw Object.assign(new Error('Invalid status'), { status: 400 });
    update.status = body.status;
    update.completed = body.status === 'Done';
  } else if (body.completed !== undefined) {
    if (typeof body.completed !== 'boolean')
      throw Object.assign(new Error('completed must be boolean'), { status: 400 });
    update.completed = body.completed;
    update.status = body.completed ? 'Done' : 'Todo';
  }
  if (!Object.keys(update).length)
    throw Object.assign(new Error('No fields to update'), { status: 400 });
  return update;
}
function filter(req) {
  const id = req.params.id || req.body.id;
  if (!mongoose.isValidObjectId(id))
    throw Object.assign(new Error('Invalid task id'), { status: 400 });
  return { _id: id, userId: req.userId };
}
router.get(
  '/',
  asyncRoute(async (req, res) =>
    res.json({ todos: await Todo.find({ userId: req.userId }).sort({ createdAt: -1 }) }),
  ),
);
router.post(
  '/',
  asyncRoute(async (req, res) => {
    const todo = await Todo.create({ ...changes(req.body, true), userId: req.userId });
    res.status(201).json({ todo });
  }),
);
router.get(
  '/:id',
  asyncRoute(async (req, res) => {
    const todo = await Todo.findOne(filter(req));
    res.status(todo ? 200 : 404).json(todo ? { todo } : { message: 'Task not found' });
  }),
);
router.put(
  ['/', '/:id'],
  asyncRoute(async (req, res) => {
    const todo = await Todo.findOneAndUpdate(
      filter(req),
      { $set: changes(req.body) },
      { new: true, runValidators: true },
    );
    res.status(todo ? 200 : 404).json(todo ? { todo } : { message: 'Task not found' });
  }),
);
router.delete(
  '/:id',
  asyncRoute(async (req, res) => {
    const todo = await Todo.findOneAndDelete(filter(req));
    res.status(todo ? 200 : 404).json({ message: todo ? 'Task deleted' : 'Task not found' });
  }),
);
router.delete(
  '/',
  asyncRoute(async (req, res) => {
    if (req.body.id) {
      const todo = await Todo.findOneAndDelete(filter(req));
      return res
        .status(todo ? 200 : 404)
        .json({ message: todo ? 'Task deleted' : 'Task not found' });
    }
    const result = await Todo.deleteMany({ userId: req.userId });
    res.json({ deletedCount: result.deletedCount });
  }),
);
module.exports = router;
