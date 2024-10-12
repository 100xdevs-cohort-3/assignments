import React from "react";

const TableData = ({ formData }) => {
  const tableStyle = {
    width: "80%",
    margin: "50px auto",
    borderCollapse: "collapse",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
  };
  const thStyle = {
    backgroundColor: "#b9a16f",
    color: "darkgreen",
    fontWeight: "bold",
    padding: "15px",
    textAlign: "center",
    border: "1px solid green",
    backgroundColor: "#c4a484",
    fontSize : 22
  };
  const tdStyle = {
    color: "darkgreen",
    padding: "15px",
    textAlign: "center",
    border: "1px solid green",
    backgroundColor: "#c4a484",
    fontSize : 18
  };
  return (
    <div className="container">
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Pet Name</th>
            <th style={thStyle}>Pet Type</th>
            <th style={thStyle}>Breed</th>
            <th style={thStyle}>Adopter Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone </th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data) => {
            return (
              <tr>
                <td style={tdStyle}>{data.name}</td>
                <td style={tdStyle}>{data.type}</td>
                <td style={tdStyle}>{data.breed}</td>
                <td style={tdStyle}>{data.userName}</td>
                <td style={tdStyle}>{data.userEmail}</td>
                <td style={tdStyle}>{data.userPhone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
