import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; // Your Home component
import Contacts from './Contacts'; // Your Contact Us component
import Footer from './Footer'; // Your Footer component
import NavBar from './NavBar';
import About from './About';
import Donations from './Donations';
import ThankYou from './Thankyou';
import Blogs from './Pages/Blogs';
import SingleBlog from './Pages/singleBlog';
import './App.css'; // Adjust the path if necessary

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donations />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SingleBlog/>} />

            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
