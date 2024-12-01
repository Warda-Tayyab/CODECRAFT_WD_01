import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home"; // Import pages
import About from "./Pages/About";
import Services from "./Pages/Service";
import Contact from "./Pages/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <div style={{ padding: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  
    

  );
};

export default App;
