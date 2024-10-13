import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";
import TableData from "./components/TableData";

function App() {
  const [formData, setFormData] = useState([]);
  const [tableView, setTableView] = useState(false);
  const [buttonText, setButtonText] = useState("See Your Data");

  const buttonStyle = {
    width: "20vw",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "20px",
    position: "fixed",
    right: 10,
    top: 90,
    cursor: "pointer",
    backgroundColor: "#8338EC",
    color: "white",
    border: "none",
    border: "2px solid black",
    borderRadius: "8px",
  };
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setFormData(parsedData);
        } else {
          console.error("Data in localStorage is not an array");
        }
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <button
        style={buttonStyle}
        onClick={() => {
          setTableView((tableView) => !tableView);
          setButtonText((prevText) =>
            prevText === "See Your Data" ? "Fill another Form" : "See Your Data"
          );
        }}
      >
        {buttonText}
      </button>
      <div className="app-container">
        {tableView ? (
          <TableData formData={formData} />
        ) : (
          <PetAdoptionForm formData={formData} setFormData={setFormData} />
        )}
      </div>
    </>
  );
}

export default App;
