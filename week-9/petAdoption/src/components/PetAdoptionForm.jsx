// src/components/Form.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        petName: '',
        breed: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const { name, email, phone, petName, breed } = formData;

        if (name.length < 3 || petName.length < 3 || breed.length < 3) return false;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return false;

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) return false;

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
            navigate('/table');
        } else {
            alert("Please fill in all fields correctly.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center p-6">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="border p-2 mb-4 w-full max-w-xs" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="border p-2 mb-4 w-full max-w-xs" required />
            <input type="text" name="phone" placeholder="Your Phone (10 digits)" value={formData.phone} onChange={handleChange} className="border p-2 mb-4 w-full max-w-xs" required />
            <input type="text" name="petName" placeholder="Pet Name" value={formData.petName} onChange={handleChange} className="border p-2 mb-4 w-full max-w-xs" required />
            <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} className="border p-2 mb-4 w-full max-w-xs" required />
            <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Submit</button>
        </form>
    );
};

export default Form;