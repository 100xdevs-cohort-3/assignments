import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PetAdoptionForm from "./components/PetAdoptionForm";
import TableData from "./components/TableData";

const App = () => {
	const [submissions, setSubmissions] = useState([]);
  
  const appStyle = {
    width: "100%",
    backgroundImage: 'url("https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg")',
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    display: "flex",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
    padding: "20px", // To add some space around the content
  };
  

	return (
		<div style={appStyle}>
      
			<Router>
				<Routes>
					<Route
						path="/"
						element={<PetAdoptionForm setSubmissions={setSubmissions} />}
					/>
					<Route path="/table" element={<TableData submissions={submissions} />} />
				</Routes>
			</Router>
      
		</div>
	);
};

export default App;
