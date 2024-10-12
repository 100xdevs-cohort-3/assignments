import React from 'react'

const PetAdoptionForm = () => {
  const containerStyle = {
    border: "2px solid black",
    margin: "auto",
    // height: "60vh",
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
  return (
    <div className='container' style={containerStyle}>
      <div className="pet-name" style={inputDiv}>
          <div style={inputLabel}>Pet Name</div>
          <input
            type="text"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Pet Name"}
          />
        </div>
        <div className="pet-type" style={inputDiv}>
          <div style={inputLabel}>Pet Type</div>
          <input
            type="text"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Pet Type"}
          />
        </div>
        <div className="pet-breed" style={inputDiv}>
          <div style={inputLabel}>Breed</div>
          <input
            type="text"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Breed"}
          />
        </div>
        <div className="user-name" style={inputDiv}>
          <div style={inputLabel}>Your Name</div>
          <input
            type="text"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Name"}
          />
        </div>
        <div className="user-email" style={inputDiv}>
          <div style={inputLabel}>Email</div>
          <input
            type="email"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Email"}
          />
        </div>
        <div className="user-phone" style={inputDiv}>
          <div style={inputLabel}>Phone</div>
          <input
            type="text"
            name=""
            id=""
            style={inputStyle}
            placeholder={"Phone"}
          />
        </div>
        <div className="submit">
          <button style={{
            width: "20vw",
            padding : '10px',
            fontWeight : 'bold',
            fontSize : "16px"
            }}>Submit</button>
        </div>
    </div>
  )
}

export default PetAdoptionForm