let todos = [];
let nextId = 1;
export function getAllTodo(req, res) {
  res.json(todos);
}
export function createTodo(req, res) {
  const task = typeof req.body.task === 'string' ? req.body.task.trim() : '';
  if (!task || task.length > 200)
    return res.status(400).json({ message: 'Enter a task of 1–200 characters' });
  const todo = { id: nextId++, task, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
}
export function updateTodo(req, res) {
  const todo = todos.find((todo) => todo.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  const { task, completed } = req.body;
  if (task === undefined && completed === undefined)
    return res.status(400).json({ message: 'Provide task or completed' });
  if (task !== undefined && (typeof task !== 'string' || !task.trim() || task.length > 200))
    return res.status(400).json({ message: 'Invalid task' });
  if (completed !== undefined && typeof completed !== 'boolean')
    return res.status(400).json({ message: 'completed must be boolean' });
  if (task !== undefined) todo.task = task.trim();
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
}
export function deleteTodoById(req, res) {
  const index = todos.findIndex((todo) => todo.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ message: 'Todo not found' });
  todos.splice(index, 1);
  res.status(204).end();
}
export function searchTodo(req, res) {
  if (typeof req.query.q !== 'string' || !req.query.q.trim())
    return res.status(400).json({ message: 'Query parameter q is required' });
  res.json(todos.filter((todo) => todo.task.toLowerCase().includes(req.query.q.toLowerCase())));
}
