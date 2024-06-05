import React from "react";
import "./Navbar.css"
import "typeface-roboto"
const NavBar=()=>{
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    {/* <li><a href="#">Stories</a></li> */}
                </ul>
                <a href="#" className="logo">IKIBEHO DIGITAL FOUNDATION</a>
                <ul>
                    <li><a href="/contact">Contacts</a></li>
                    <li><a href="/donate" className="donate">Donate</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar