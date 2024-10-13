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
    marginTop: "10px",
    borderRadius: "10px",
    backgroundColor: "#F9FBB2",
    position: "fixed",
    left: 10,
  };
  const inputDiv = {
    // lineHeight: "20px",
    margin: "5px",
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
  const checkNameInput = (e)=>{
    if(e.target.value<10){
      document.querySelector('.error-name-msg').style.display = "block"
    }
    if(e.target.value.length>3){
      document.querySelector('.error-name-msg').style.display = "none"
    }
  }
  const checkPhoneInput = (e)=>{
    if(e.target.value<10){
      document.getElementById('error-phone-msg').style.display = "block"
    }
    if(e.target.value.length>=10)
    {
      document.getElementById('error-phone-msg').style.display = "none"
    }
  }
  const checkEmailInput = (e)=>{

  }
  const handleSumbit = () => {
    if (
      document.getElementById("pet-name").value === "" ||
      document.getElementById("pet-type").value === "" ||
      document.getElementById("pet-breed").value === "" ||
      document.getElementById("user-name").value === "" ||
      document.getElementById("user-email").value === "" ||
      document.getElementById("user-phone").value === ""
    ) {
      alert("Enter all details.");
      return;
    }
    const newEntry = {
      name: document.getElementById("pet-name").value,
      type: document.getElementById("pet-type").value,
      breed: document.getElementById("pet-breed").value,
      userName: document.getElementById("user-name").value,
      userEmail: document.getElementById("user-email").value,
      userPhone: document.getElementById("user-phone").value,
    };
    const updatedFormData = [...formData, newEntry];
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
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
          onChange={checkNameInput}
        />
        <div className="error-name-msg" style={{
          color :"red",
          fontStyle : "italic"
        }}>
          Please enter a pet name
        </div>
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
        <div className="error-name-msg" style={{
          color :"red",
          fontStyle : "italic"
        }}>
          Please enter a pet type
        </div>
      </div>
      <div className="pet-breed" style={inputDiv}>
        <div style={inputLabel}>Breed</div>
        <input
          type="text"
          name=""
          id="pet-breed"
          style={inputStyle}
          placeholder={"Breed"}
          onChange={checkNameInput}
        />
        <div className="error-name-msg" style={{
          color :"red",
          fontStyle : "italic"
        }}>
          Please enter a breed name
        </div>
      </div>
      <div className="user-name" style={inputDiv}>
        <div style={inputLabel}>Your Name</div>
        <input
          type="text"
          name=""
          id="user-name"
          style={inputStyle}
          placeholder={"Name"}
          onChange={checkNameInput}
        />
        <div className="error-name-msg" style={{
          color :"red",
          fontStyle : "italic"
        }}>
          Please enter a valid name
        </div>
      </div>
      <div className="user-email" style={inputDiv}>
        <div style={inputLabel}>Email</div>
        <input
          type="email"
          name=""
          id="user-email"
          style={inputStyle}
          placeholder={"Email"}
          onChange={checkEmailInput}
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
          onChange={checkPhoneInput}
        />
        <div id="error-phone-msg" style={{
          color :"red",
          fontStyle : "italic"
        }}>
          Please enter valid Phone Number
        </div>
      </div>
      <div className="submit">
        <button
          style={{
            width: "20vw",
            padding: "10px",
            fontWeight: "bold",
            fontSize: "20px",
            cursor: "pointer",
            backgroundColor: "#FF006E",
            color: "white",
            border: "none",
            border: "2px solid black",
            borderRadius: "8px",
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
