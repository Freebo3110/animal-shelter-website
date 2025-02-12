import React from 'react';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Shelter from './Shelter';
import About from './About';
import Contact from './Contact';


function App() {
  
  return (
    <div>
        <div>
          <Router>
        <nav>
          <Link to="/" className="link">Shelter</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/contact" className="link">Contact us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Shelter />} />
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router>
        </div>
    </div>
  )
  ;
}

export default App;
