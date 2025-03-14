import React, { Component } from "react";

class AdopterData extends Component {
  render() {
    const { formData, handleGoBack } = this.props;
    return (
      <div>
        <table
          styele={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #ddd",
            fontSize: "18px",
            textAlign: "left",
            padding: "8px",
            backgroundColor: "#f2f2f2",
            color: "#333",
            textTransform: "capitalize",
            fontFamily: "Arial, sans-serif",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
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
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.petName}</td>
                <td>{data.petType}</td>
                <td>{data.breed}</td>
                <td>{data.adopterName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            onClick={handleGoBack}
            style={{
              padding: "10px 20px",
              boxSizing: "border-box",
              width: "auto",
              display: "inline-block",
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default AdopterData;
