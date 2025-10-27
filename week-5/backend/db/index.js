//  start writing from here
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }   
};

export default connectDB;

const userSchema = new mongoose.Schema({
    username: { type: String, required: true , unique: true },
    password: { type: String, required: true },
}, { timestamps: true });   

const todoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
export const Todo = mongoose.model('Todo', todoSchema);

