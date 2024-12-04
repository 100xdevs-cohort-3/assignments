import React, { useEffect, useState } from "react";
import "./index.css"
import "./App.css";
import AmazonCart from "./components/AmazonCart";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import WishList from "./components/WishList";
import AppBar from "./components/AppBar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<AmazonCart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  console.log("layout-re rendered!")
  useEffect(()=>{
    console.log("Layout mounted!")
  },[])

  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
export default App;
