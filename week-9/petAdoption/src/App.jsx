import "./App.css";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";
import { useState } from "react";
import TableData from "./components/TableData";

function App() {
  const [formData, setFormData] = useState([]);
  const [tableView, setTableView] = useState(false)
  const buttonStyle = {
    width: "20vw",
    padding: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    position : "fixed",
    right : 0
  };
  return (
    <>
      <Header></Header>
      <button style={buttonStyle} onClick={()=>{
        setTableView(tableView=>!tableView)
      }}>See Data</button>
      <div className="app-container">
        <PetAdoptionForm
          formData={formData}
          setFormData={setFormData}
        ></PetAdoptionForm>
        {/* {tableView?<TableData formData={formData}></TableData>:alert('No data')} */}
        
      </div>
      {console.log(formData)}
    </>
  );
}

export default App;
