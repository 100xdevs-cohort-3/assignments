import { useState } from "react";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";
import AdopterData from "./components/AdopterData";
import "./myApp.css";

const App = () => {
  const [adoptionList, setAdoptionList] = useState([]);

  const handleAdoptionSubmit = (formData) => {
    setAdoptionList([...adoptionList, formData]);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        backgroundSize: "cover",
        overflowY: "auto", // Allows scrolling when content overflows
        paddingBottom: "50px",
      }}
    >
      <Header message={"Pet Adoption Form"} />
      <PetAdoptionForm onAdoptionSubmit={handleAdoptionSubmit} />
      <AdopterData adoptionList={adoptionList} />
    </div>
  );
};

export default App;
