import React from 'react';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import LoaderPage from './Loader/LoaderPage';
import Shelter from './Shelter';
import About from './About';
import Contact from './Contact';


function App() {
  
  const [stateLoader, setStateLoader] = useState(true);

  useEffect(()=>{
    const timer= setTimeout(()=>setStateLoader(false),3000);
    return()=>clearTimeout(timer)
  },[])

  return (
    <div>
        <div>
          {stateLoader && <LoaderPage/>}
        </div>
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
