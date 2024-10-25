import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await axios.get('/todo');
        console.log(result.data); // Verify the response structure
        setTodos(Array.isArray(result.data) ? result.data : []); // Ensure it's an array
      } catch (error) {
        console.log('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    try {
      const result = await axios.post('/todo', { title });
      setTodos([...todos, result.data]);
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post('/auth/logout');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title} <button onClick={() => handleDeleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
