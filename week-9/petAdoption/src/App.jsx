import "./App.css";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState([]);
  return (
    <>
      <Header></Header>
      <div className="app-container">
        <PetAdoptionForm
          formData={formData}
          setFormData={setFormData}
        ></PetAdoptionForm>
      </div>
      {console.log(formData)}
    </>
  );
}

export default App;
