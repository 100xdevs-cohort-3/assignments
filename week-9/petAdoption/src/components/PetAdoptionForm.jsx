import { useState } from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const PetAdoptionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    petName: '',
    petType: '',
    breed: '',
    yourName: '',
    email: '',
    phone: '',  
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit( formData); 
    setFormData({
      petName: '',
      petType: '',
      breed: '',
      yourName: '',
      email: '',
      phone: '',
    });
    navigate('/data'); 
  };
  return (
    <div style={containerStyle}>
    <form style={formStyle} onSubmit={handleSubmit}>
      
      <label style={labelStyle}>Pet Name</label>
      <input type="text" 
        name="petName" 
        value={formData.petName}
        onChange={handleChange}
        placeholder='Pet Name' 
        style={inputStyle} />

      <label style={labelStyle}>Pet Type</label>
      <select
        name="petType"
        value={formData.petType}
        onChange={handleChange} 
        style={selectStyle} 
        >
        <option value="" disabled >Select Pet Type</option>
        <option>Dog</option>
        <option>Cat</option>
        <option>Bird</option>
        <option>Other</option>
      </select>

      <label style={labelStyle}>Breed</label>
      <input 
        type="text" 
        name='breed'
        value={formData.breed}
        onChange={handleChange}
        placeholder="Breed" 
        style={inputStyle} />

      <label style={labelStyle}>Your Name</label>
      <input 
        type="text" 
        name="yourName"
        placeholder="Your Name" 
        value={formData.yourName}
        onChange={handleChange}
        style={inputStyle} />

      <label style={labelStyle}>Email</label>
      <input 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email" 
        style={inputStyle} />

      <label style={labelStyle}>Phone</label>
      <input 
        type="tel" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone" 
        style={inputStyle} />

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  </div>
);
};

// Styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh', 
  width: '80vw', 
  margin: '10vh auto', 
  padding: '20px', 
  boxSizing: 'border-box', 
};

const formStyle = {
  backgroundColor: 'rgba(173, 76, 241, 0.64)',
  padding: '60px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  marginTop: '50px', 
};

const labelStyle = {
display: 'block',
marginBottom: '5px',
fontWeight: 'bold',
color: '#3A3A3A',
fontSize: '14px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '14px',
  boxSizing: 'border-box', 
};


const selectStyle = {
  ...inputStyle, 
  appearance: 'none', 
};

const buttonStyle = {
width: '100%',
padding: '10px',
backgroundColor: '#2F4F2F',
color: '#fff',
border: 'none',
borderRadius: '4px',
cursor: 'pointer',
fontSize: '16px',
};
PetAdoptionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formDataList: PropTypes.array
};

export default PetAdoptionForm
