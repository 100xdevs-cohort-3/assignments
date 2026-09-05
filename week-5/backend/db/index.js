const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 80 },
  password: { type: String, required: true },
  tokenVersion: { type: Number, default: 0 },
});
const todoSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true, trim: true, maxlength: 200 },
    description: { type: String, default: '', maxlength: 2000 },
    status: { type: String, enum: ['Todo', 'In progress', 'Done'], default: 'Todo' },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true },
);
const User = mongoose.models.User || mongoose.model('User', userSchema);
const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
async function connectToDatabase() {
  if (!process.env.MONGO_URI) throw new Error('Set MONGO_URI in .env');
  await mongoose.connect(process.env.MONGO_URI);
}
module.exports = { User, Todo, connectToDatabase };
