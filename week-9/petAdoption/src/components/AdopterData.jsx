import React, { Component, useEffect } from "react";

function AdopterData({ adoptersData, goBack }) {
  const displayData = adoptersData
    .filter((each) => each.id != 0)
    .map((each) => (
      <tr key={each.id}>
        <td>{each.petName}</td>
        <td>{each.petType}</td>
        <td>{each.breed}</td>
        <td>{each.name}</td>
        <td>{each.email}</td>
        <td>{each.phone}</td>
      </tr>
    ));

  return (
    <div>
      <table style={{ width: "600px" }}>
        <thead>
          <tr>
            <th>Pet Name</th>
            <th>Pet Type</th>
            <th>Breed</th>
            <th>Adopter Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{displayData}</tbody>
      </table>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ width: "100px" }} onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default AdopterData;
