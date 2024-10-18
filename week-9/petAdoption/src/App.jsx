import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import DataPage from './pages/DataPage'; 

const App = () => {
  const [formDataList, setFormDataList] = useState([]);
 


  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<PetAdoptionForm  onSubmit={(data) => setFormDataList((prevList) => [...prevList, data])} />} 
          />
          <Route
            path="/data"
            element={<DataPage data={formDataList} />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
