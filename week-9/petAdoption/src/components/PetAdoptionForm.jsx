import { useState } from "react";

function PetAdoptionForm({ onAdoptionSubmit }) {
  const [formData, setFormData] = useState({
    petName: "",
    petType: "",
    breed: "",
    ownerName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdoptionSubmit(formData);
    setFormData({
      petName: "",
      petType: "",
      breed: "",
      ownerName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#cb9e7b",
          display: "flex",
          margin: "5%",
          opacity: 0.75,
          height: 700,
          width: 800,
          marginLeft: 300,
          gap: 20,
        }}
      >
        <form onSubmit={handleSubmit} style={{ marginTop: 40, zIndex: 0.5 }}>
          <label
            htmlFor="petName"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Pet Name
          </label>
          <input
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            type="text"
            placeholder="Pet Name"
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          />

          <label
            htmlFor="petType"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Pet Type
          </label>
          <select
            name="petType"
            value={formData.petType}
            onChange={handleChange}
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          >
            <option value="" disabled>
              Select pet type
            </option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="rabbit">Rabbit</option>
          </select>

          <label
            htmlFor="breed"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Breed
          </label>
          <input
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            type="text"
            placeholder="Breed"
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          />

          <label
            htmlFor="ownerName"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Your Name
          </label>
          <input
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          />

          <label
            htmlFor="email"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          />

          <label
            htmlFor="phone"
            style={{ marginLeft: 33, fontSize: 20, fontWeight: "bolder" }}
          >
            Phone
          </label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="Phone"
            style={{
              width: 700,
              borderRadius: "5px",
              borderStyle: "none",
              marginLeft: 30,
              height: "40px",
            }}
          />

          <button
            style={{
              borderRadius: 10,
              marginLeft: 30,
              width: 700,
              marginTop: "40px",
              height: "45px",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PetAdoptionForm;
