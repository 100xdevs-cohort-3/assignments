import "./App.css";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";
import { useState } from "react";
import TableData from "./components/TableData";

function App() {
  const [formData, setFormData] = useState([]);
  const [tableView, setTableView] = useState(false);
  const [buttonText, setButtonText] = useState("See Your Data");
  const buttonStyle = {
    width: "20vw",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    position: "fixed",
    right: 0,
    top : 90,
    cursor : "pointer"
  };
  return (
    <>
      <Header></Header>
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
          <TableData formData={formData}></TableData>
        ) : (
          <PetAdoptionForm
            formData={formData}
            setFormData={setFormData}
          ></PetAdoptionForm>
        )}
      </div>
      {console.log(formData)}
    </>
  );
}

export default App;
