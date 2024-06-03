import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Your Home component
import Contacts from './Contacts'; // Your Contact Us component
import Footer from './Footer'; // Your Footer component
import NavBar from './NavBar';
import About from './About';
const App = () => {
  return (

    <Router>
      <NavBar/>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path='/about' element={<About/>}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

