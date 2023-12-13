
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import PokeDecx from './Pages/PokeDex';


export default function App() {
  return <div>
   <Router>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PokeDex" element={< PokeDecx />} />

        </Routes>
      </Router>
  </div>
}

