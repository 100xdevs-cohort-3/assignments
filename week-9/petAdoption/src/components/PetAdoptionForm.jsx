import React from "react";
import { useState } from "react";
import AdopterData from "./AdopterData";
const PetAdoptionForm = () => {
  let [petData, setPetData] = useState({});
  let [displayFormData, setDisplayFormData] = useState(false);
  let [adoptersData, setAdoptersData] = useState([]);
  function goBack() {
    setDisplayFormData(false);
  }
  function handleSubmit() {
    petData.id = adoptersData.length;
    setAdoptersData([...adoptersData, petData]);
    setPetData({});
    setDisplayFormData(true);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "640px",
        marginBottom: "80px",
      }}
    >
      {displayFormData == false && (
        <div
          style={{
            opacity: 0.8,
            width: "400px",
            // height: "54000px",
            backgroundColor: "#3ded97",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <div>
            <label>
              Pet name:
              <input
                type="text"
                placeholder="Pet name"
                name="petName"
                onChange={(e) => {
                  setPetData({ ...petData, petName: e.target.value });
                }}
              />
            </label>
          </div>
          <label>
            Pet type:
            <input
              type="text"
              placeholder="Pet type"
              name="petType"
              onChange={(e) => {
                setPetData({ ...petData, petType: e.target.value });
              }}
            />
          </label>
          <label>
            Breed:
            <input
              type="text"
              placeholder="breed"
              name="breed"
              onChange={(e) => {
                setPetData({ ...petData, breed: e.target.value });
              }}
            />
          </label>
          <label>
            Your name:
            <input
              type="text"
              placeholder="Your name"
              name="yourName"
              onChange={(e) => {
                setPetData({ ...petData, name: e.target.value });
              }}
            />
          </label>
          <label>
            Email:{" "}
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setPetData({ ...petData, email: e.target.value });
              }}
            />
          </label>
          <label>
            Phone:{" "}
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={(e) => {
                setPetData({ ...petData, phone: e.target.value });
              }}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {displayFormData && (
        <AdopterData adoptersData={adoptersData} goBack={goBack} />
      )}
    </div>
  );
};

export default PetAdoptionForm;
