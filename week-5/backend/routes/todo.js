//  start writing your code from here
import express from 'express';
import { Todo } from '../db/index.js';
import { authenticateJwt } from '../middleware/user.js';

const router = express.Router();
router.use(authenticateJwt);

// -------------------- CREATE TODO --------------------
router.post('/', async (req, res) => {
  authenticateJwt
  const { title } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ msg: 'Invalid title.' });
  }

  try {
    const newTodo = await Todo.create({
      title: title.trim(),
      completed: false,
      userId: req.userId,
    });

    res.status(201).json({
      msg: 'Todo created successfully',
      todo: newTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Error creating todo',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
});

// -------------------- GET TODOS --------------------
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json({ todos });
  } catch (error) {
    res.status(500).json({
      msg: 'Error fetching todos',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
});

// -------------------- UPDATE TODO --------------------
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (typeof completed !== 'boolean') {
    return res.status(400).json({ msg: 'You must provide a valid completed status.' });
  }

  try {
    const result = await Todo.updateOne(
      { _id: id, userId: req.userId },
      { completed }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ msg: 'Todo not found or unauthorized.' });
    }

    res.json({ msg: 'Todo updated successfully.' });
  } catch (error) {
    res.status(500).json({
      msg: 'Error updating todo',
      ...(process.env.NODE_ENV === 'development' && { error: error.message }),
    });
  }
});

export default router;
