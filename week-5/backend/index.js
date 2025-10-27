// start writing from here
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/index.js';
import userRoutes from './routes/user.js';
import todoRoutes from './routes/todo.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:64128', // your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

app.use('/api/user', userRoutes);
app.use('/api/todo', todoRoutes);


app.listen(PORT, () => console.log('Server running on port 3000'));
