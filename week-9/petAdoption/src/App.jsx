import "./App.css";
import Header from "./components/Header";
import PetAdoptionForm from "./components/PetAdoptionForm";

function App() {
  return (
    <>
      <Header></Header>
      <div className="app-container">
        <PetAdoptionForm></PetAdoptionForm>
      </div>
    </>
  );
}

export default App;
