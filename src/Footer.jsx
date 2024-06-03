import React from "react";
import "./Footer.css"; // Assuming your styles are in Footer.css
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>©2024 Ikibeho</p>
        <h2>IKIBEHO DIGITAL FOUNDATION</h2>
        <button className="purchase-btn">Donate</button>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <nav className="footer-nav">
          <a href="/home">Home</a>
          <a href="#about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className="footer-social">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
