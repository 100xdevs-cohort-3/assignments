import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';

// Zod schema for registration validation
const registerSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    // Validate the form data using Zod
    const result = registerSchema.safeParse(formData);
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
      await axios.post('/auth/register', formData);
      alert('User registered successfully');
    } catch (error) {
      console.log(error);
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
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
