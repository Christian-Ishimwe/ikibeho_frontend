import React, { useState } from "react";
import "./Navbar.css";
import "typeface-roboto";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
      <>
        <nav>
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
          <a href="#" className="logo">
            IKIBEHO DIGITAL FOUNDATION
          </a>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <a href="/blogs">Blogs</a>
            </li>

            <li>
              <a href="/contact">Contacts</a>
            </li>
            <li>
              <a href="/donate" className="donate">
                Donate
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
};

export default NavBar;
