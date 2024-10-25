// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Form from './components/PetAdoptionForm';
import Table from './components/AdopterData';

const App = () => {
    const [data, setData] = useState([]);

    const handleFormSubmit = (formData) => {
        setData([...data, formData]);
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    {/* Route for the form */}
                    <Route path="/" element={<Form onSubmit={handleFormSubmit} />} />
                    {/* Route for the table */}
                    <Route path="/table" element={<Table data={data} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;