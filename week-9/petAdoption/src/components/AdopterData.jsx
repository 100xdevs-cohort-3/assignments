import React from "react";

function AdopterData({ adoptionList }) {
  return (
    <div style={{ margin: "20px", padding: "20px",  background: "#cb9e7b", borderRadius: "10px" ,opacity:.75 }}>
      <h2>Adopted Pets</h2>
      {adoptionList.length === 0 ? (
        <p>No adoption requests yet.</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Breed</th>
              <th>Owner Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {adoptionList.map((data, index) => (
              <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petType}</td>
                <td>{data.breed}</td>
                <td>{data.ownerName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdopterData;
