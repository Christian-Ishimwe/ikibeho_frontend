import React from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <span> &copy2024 Ikibeho Digital Foundation</span>
          <span>IKIBEHO DIGITAL FOUNDATION</span>
          <button>
            <BiDonateHeart />
            Donate Now
          </button>
        </div>
        <div>
          <div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Stories</a>
            <a href="#">Contacts</a>
          </div>
          <div>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
