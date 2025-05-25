import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Heroone from "../Heroone.jsx";
import '../App.css'
function AppRoutes(){
return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Heroone/>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/register" element={<h1>Register</h1>}/>
        <Route path="/Creator" element={<h1>Creator</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
)
}
export default AppRoutes;