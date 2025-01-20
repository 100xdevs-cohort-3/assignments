import React, { useState } from "react";

const PetAdoptionForm = ({ submitHandler }) => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("Cat");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (
          petName.length < 3 ||
          breed.length < 3 ||
          name.length < 3 ||
          !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) ||
          !/^[0-9]{10}$/.test(phone)
        ) {
          return;
        }

        submitHandler({
          petName,
          petType,
          breed,
          name,
          email,
          phone,
        });
      }}
    >
      <label htmlFor="petName">Pet Name:</label>
      <input
        type="text"
        id="petName"
        placeholder="Pet Name"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        required
      />
      {petName.length < 3 && (
        <small>Pet Name must be at least 3 characters long!</small>
      )}
      <label htmlFor="petType">Pet Type:</label>
      <select id="petType" onChange={(e) => setPetType(e.target.value)}>
        <option value="Cat">Cat</option>
        <option value="Dog">Dog</option>
        <option value="Rabbit">Rabbit</option>
      </select>

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="breed"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        required
      />
      {breed.length < 3 && (
        <small>Breed must be at least 3 characters long!</small>
      )}

      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {name.length < 3 && (
        <small>Your Name must be at least 3 characters long!</small>
      )}
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && (
        <small>Email should be valid!</small>
      )}

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      {!/^[0-9]{10}$/.test(phone) && (
        <small>Phone number must containe 10 digits!</small>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetAdoptionForm;
