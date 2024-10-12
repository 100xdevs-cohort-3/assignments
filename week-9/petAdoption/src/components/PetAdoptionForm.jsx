import React from "react";
const PetAdoptionForm = ({ formData, setFormData }) => {
  const containerStyle = {
    border: "2px solid black",
    margin: "auto",
    width: "50vh",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60px",
  };
  const inputDiv = {
    lineHeight: "30px",
    margin: "10px",
  };
  const inputStyle = {
    width: "20vw",
    padding: "10px",
    fontSize: 18,
  };
  const inputLabel = {
    fontWeight: "bold",
    fontSize: 24,
  };
  const checkInvalidInput = () => {
    {
      if (
        document.getElementById("pet-name").value === "" ||
        document.getElementById("pet-type").value === "" ||
        document.getElementById("pet-breed").value === "" ||
        document.getElementById("user-name").value === "" ||
        document.getElementById("user-email").value === "" ||
        document.getElementById("user-phone").value === ""
      ) {
        return false;
      }
    }
  };
  const handleSumbit = () => {
    if (checkInvalidInput) {
      alert("Please enter all details carefully.");
      return;
    }
    setFormData([
      ...formData,
      {
        name: document.getElementById("pet-name").value,
        type: document.getElementById("pet-type").value,
        breed: document.getElementById("pet-breed").value,
        userName: document.getElementById("user-name").value,
        userEmail: document.getElementById("user-email").value,
        userPhone: document.getElementById("user-phone").value,
      },
    ]);
    alert("Data has been recorded.Thank You.");
    document.getElementById("pet-name").value = "";
    document.getElementById("pet-type").value = "";
    document.getElementById("pet-breed").value = "";
    document.getElementById("user-name").value = "";
    document.getElementById("user-email").value = "";
    document.getElementById("user-phone").value = "";
  };
  return (
    <div className="container" style={containerStyle}>
      <div className="pet-name" style={inputDiv}>
        <div style={inputLabel}>Pet Name</div>
        <input
          type="text"
          name=""
          id="pet-name"
          style={inputStyle}
          placeholder={"Pet Name"}
        />
      </div>
      <div className="pet-type" style={inputDiv}>
        <div style={inputLabel}>Pet Type</div>
        <input
          type="text"
          name=""
          id="pet-type"
          style={inputStyle}
          placeholder={"Pet Type"}
        />
      </div>
      <div className="pet-breed" style={inputDiv}>
        <div style={inputLabel}>Breed</div>
        <input
          type="text"
          name=""
          id="pet-breed"
          style={inputStyle}
          placeholder={"Breed"}
        />
      </div>
      <div className="user-name" style={inputDiv}>
        <div style={inputLabel}>Your Name</div>
        <input
          type="text"
          name=""
          id="user-name"
          style={inputStyle}
          placeholder={"Name"}
        />
      </div>
      <div className="user-email" style={inputDiv}>
        <div style={inputLabel}>Email</div>
        <input
          type="email"
          name=""
          id="user-email"
          style={inputStyle}
          placeholder={"Email"}
        />
      </div>
      <div className="user-phone" style={inputDiv}>
        <div style={inputLabel}>Phone</div>
        <input
          type="text"
          name=""
          id="user-phone"
          style={inputStyle}
          placeholder={"Phone"}
        />
      </div>
      <div className="submit">
        <button
          style={{
            width: "20vw",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={handleSumbit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PetAdoptionForm;
