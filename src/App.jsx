import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"

export default function App() {
  return <div>
   <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  </div>
}

