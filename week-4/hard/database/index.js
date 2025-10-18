import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
export async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');    
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}
// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true },
    password: { type: String, required: true }
},{
    timestamps: true
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

export { User, Todo };