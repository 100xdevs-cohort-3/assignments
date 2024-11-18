import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { validation } from "../utils/validation.js";
import "../Styles/PetAdoptionForm.css"

const PetAdoptionForm = ({ formData, setFormData }) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({
    petName: "",
    petType: "",
    breed: "",
    name: "",
    email: "",
    number: "",
  });
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "petName":
        setPetName(value);
        break;
      case "petType":
        setPetType(value);
        break;
      case "breed":
        setBreed(value);
        break;
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }

    const newErrors = { ...errors };
    setErrors(validation(name, value, newErrors));
  };

  const clearForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
    setPetName("");
    setPetType("");
    setBreed("");
    setName("");
    setEmail("");
    setNumber("");
    setErrors({
      petName: "",
      petType: "",
      breed: "",
      name: "",
      email: "",
      number: "",
    });
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = { ...errors };

    newErrors = validation("petName", petName, newErrors);
    newErrors = validation("petType", petType, newErrors);
    newErrors = validation("breed", breed, newErrors);
    newErrors = validation("name", name, newErrors);
    newErrors = validation("email", email, newErrors);
    newErrors = validation("number", number, newErrors);

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      const newEntry = { petName, petType, breed, name, email, number };
      setFormData([...formData, newEntry]);
      navigate("/adopter");
    }
  };

  return (
    <div className="form-container">
      <form ref={formRef} className="adoption-form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Pet Adoption Form</h2>
        <div className="form-fields">
          <div className="form-field">
            <input
              type="text"
              name="petName"
              value={petName}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Pet name"
              required
            />
            {errors.petName && <p className="error">{errors.petName}</p>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="petType"
              value={petType}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Pet type"
              required
            />
            {errors.petType && <p className="error">{errors.petType}</p>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="breed"
              value={breed}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Breed"
              required
            />
            {errors.breed && <p className="error">{errors.breed}</p>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Your name"
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="number"
              value={number}
              onChange={handleChange}
              onFocus={handleFocus}
              placeholder="Your contact number"
              required
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
        <button type="clear" onClick={clearForm} className="clear-form-button">
          Clear form
        </button>
      </form>
    </div>
  );
};

export default PetAdoptionForm;
