import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './footer';
import AboutSection from './Aboutpage';
import ServicePage from './Servicepage';
import ContactUs from './contact';
import FlyAshBricksInfo from './Flyashcon';
import InterlockingBricksInfo from './interlockcon';
import SolidBricksInfo from './Solidbrickcon';
import Aggregates from './Aggregatescon';
import HollowbrickInfo from './Hollowbrickcon';
import Image from './image';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/About" element={<AboutSection />} /> 
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service/Living-Room" element={<FlyAshBricksInfo />} />
          <Route path="/service/Modular-Kitchen" element={<InterlockingBricksInfo />} />
          <Route path="/service/Pvc-Decor" element={<SolidBricksInfo/>} />
          <Route path="/service/Hall-Decoring" element={<HollowbrickInfo/>} />
          <Route path="/service/Wardrobes-Cupboards" element={<Aggregates />} />
          

         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
