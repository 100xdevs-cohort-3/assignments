import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PetAdoptionForm = ({ setSubmissions }) => {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    yourName: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validation functions
  const validateName = (name) => name.length >= 3;
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email); // Basic email format regex
  const validatePhone = (phone) => /^\d{10}$/.test(phone); // 10-digit phone number

  // Real-time validation onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Perform validation for each field on change
    switch (name) {
      case 'petName':
      case 'breed':
      case 'yourName':
        setErrors({
          ...errors,
          [name]: validateName(value) ? '' : 'Must be at least 3 characters long.',
        });
        break;
      case 'email':
        setErrors({
          ...errors,
          email: validateEmail(value) ? '' : 'Enter a valid email address.',
        });
        break;
      case 'phone':
        setErrors({
          ...errors,
          phone: validatePhone(value) ? '' : 'Enter a valid 10-digit phone number.',
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submission
    const isFormValid = 
      validateName(formData.petName) &&
      validateName(formData.breed) &&
      validateName(formData.yourName) &&
      validateEmail(formData.email) &&
      validatePhone(formData.phone);

    if (!isFormValid) {
      setErrors({
        petName: validateName(formData.petName) ? '' : 'Must be at least 3 characters long.',
        breed: validateName(formData.breed) ? '' : 'Must be at least 3 characters long.',
        yourName: validateName(formData.yourName) ? '' : 'Must be at least 3 characters long.',
        email: validateEmail(formData.email) ? '' : 'Enter a valid email address.',
        phone: validatePhone(formData.phone) ? '' : 'Enter a valid 10-digit phone number.',
      });
      return; // Prevent submission if form is invalid
    }

    setSubmissions((prev) => [...prev, formData]);

    // Clear form data and navigate
    setFormData({
      petName: '',
      petType: '',
      breed: '',
      yourName: '',
      email: '',
      phone: '',
    });
    navigate('/table'); // Redirect to the TableData route
  };

  // Styles
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    maxWidth: '600px',
    margin: '20px auto',
    backdropFilter: 'blur(5px)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    textAlign: 'left',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%',
    maxWidth: '200px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginBottom: '5px',
  };

  return (
    <div>
      <div style={formContainerStyle}>
        <h2>Pet Adoption Form</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <label style={labelStyle}>Pet Name</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            placeholder="Pet Name"
            style={inputStyle}
          />
          {errors.petName && <div style={errorStyle}>{errors.petName}</div>}

          <label style={labelStyle}>Pet Type</label>
          <input
            type="text"
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            placeholder="Dog, Cat, etc."
            style={inputStyle}
          />

          <label style={labelStyle}>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            placeholder="Breed"
            style={inputStyle}
          />
          {errors.breed && <div style={errorStyle}>{errors.breed}</div>}

          <label style={labelStyle}>Your Name</label>
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            placeholder="Your Name"
            style={inputStyle}
          />
          {errors.yourName && <div style={errorStyle}>{errors.yourName}</div>}

          <label style={labelStyle}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            style={inputStyle}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}

          <label style={labelStyle}>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-digit Phone Number"
            style={inputStyle}
          />
          {errors.phone && <div style={errorStyle}>{errors.phone}</div>}

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetAdoptionForm;
