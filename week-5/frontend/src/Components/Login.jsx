import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

// Zod schema for login validation
const loginSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    // Validate the form data using Zod
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      // If validation fails, set error messages
      const validationErrors = result.error.format();
      setErrors({
        username: validationErrors.username?._errors[0],
        password: validationErrors.password?._errors[0],
      });
      return;
    }

    // Send data to the backend if validation passes
    try {
      await axios.post('/auth/login', formData);
      navigate('/');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
