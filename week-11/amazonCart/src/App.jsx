import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import AmazonCart from "./components/AmazonCart";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import {AppBar} from "./components/AppBar";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <AppBar/>
        <Routes>
          {/* <Route path="/" element={<Layout/>}> */}
            <Route path="/cart" element = {<AmazonCart/>}/>
            <Route path="/wishlist" element = {<Wishlist/>}/>

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
function Layout(){
  return(
    <div style={{ backgroundColor: "#F3F4F6", minHeight: "100vh" }}>
      <AppBar />
      <Outlet/>
    </div>
  )
}
export default App;
