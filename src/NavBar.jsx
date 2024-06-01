import React from "react";
import "./Navbar.css"
import "typeface-roboto"
const NavBar=()=>{
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Stories</a></li>
                </ul>
                <a href="#" className="logo">IKIBEHO DIGITAL FOUNDATION</a>
                <ul>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#" className="donate">Donate</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar