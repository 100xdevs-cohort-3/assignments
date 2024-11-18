import Header from "./components/LandingPage";
import PetAdoptionForm from "./components/PetAdoptionForm";
import AdopterData from "./components/AdopterData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/myApp.css";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
            </div>
          }
        />

        <Route
          path="/petAdoptionForm"
          element={
            <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
                height: "100vh",
                backgroundSize: "cover",
              }}
            >
              <PetAdoptionForm formData={formData} setFormData={setFormData} />
            </div>
          }
        />

        <Route
          path="/adopter"
          element={
            <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
                height: "100vh",
                backgroundSize: "cover",
              }}
            >
              <AdopterData formData={formData} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
