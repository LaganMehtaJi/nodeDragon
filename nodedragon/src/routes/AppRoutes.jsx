import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Heroone from "../Heroone.jsx";
import '../App.css'
import Login from "../screens/Login.jsx";
import Signup from "../screens/Signup.jsx";
function AppRoutes(){
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Heroone/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/Creator" element={<h1>Creator</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
)
}
export default AppRoutes;