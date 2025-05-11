import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Correct import
import Hero from './pages/Hero';
import Creator from './pages/Creator';
import Devlop from './pages/Devlop';
import LoinSignup from './pages/LoginSignup';
import Exp from './pages/Exp'; 
function App() {
  return (
    <> 
      <BrowserRouter>  {/* Use BrowserRouter instead of Router */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/creator" element={<Creator />} />
          <Route path="/devlop" element={<Devlop />} />
          <Route path="/Verify" element={<LoinSignup />} />
          <Route path="/exp" element={<Exp />} />
        </Routes>             
      </BrowserRouter>
    </>
  );
}

export default App;
