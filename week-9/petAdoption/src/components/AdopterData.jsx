import React from "react";
import { useNavigate } from "react-router-dom";
import DogAnimation from "../assets/DogAnimation.gif";
import LoaderCat from "../assets/LoaderCat.gif";
import "../Styles/Adopter.css";

const AdopterData = ({ formData }) => {
  const navigate = useNavigate();

  return (
    <div className="adopter-container">
      <h1>Adoption List</h1>

      {formData.length === 0 && (
        <div className="gif-container">
          <img src={LoaderCat} alt="Loading" className="loading-gif" />
          <p>No submissions yet :(</p>
        </div>
      )}

      {formData.length > 0 && (
        <>
          <div className="gif-container-dog">
            <img src={DogAnimation} alt="Dog Animation" className="dog-gif" />
          </div>
          <table>
            <thead>
              <tr>
                <th>Pet Name</th>
                <th>Pet type</th>
                <th>Pet breed</th>
                <th>Adopter</th>
                <th>Email address</th>
                <th>Contact number</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.petName}</td>
                  <td>{entry.petType}</td>
                  <td>{entry.breed}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        Go back
      </button>
      <p className="header-subtext">
        Every year, over <span className="highlight">6 million pets</span> wait
        for loving homes. Adopt today and make a difference.
      </p>
    </div>
  );
};

export default AdopterData;
