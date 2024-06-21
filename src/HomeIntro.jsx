import React from "react";
import { motion } from "framer-motion";
import "./HomeIntro.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";
import "./Pages/blogs.css"
const HomeIntro = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/contact");
    };
    const handleClickDonate=()=>{
      navigate("/donate")
    }
  return (
    <div className="home_intro">
      <div className="home_content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empowering Teen Mothers
        </motion.h2>

        <motion.p
          className="intro_text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          At <strong>Ikibeho Digital Foundation</strong>, we are dedicated to
          transforming the lives of teen mothers in Rwanda. We understand the
          unique challenges that young mothers face, from managing their
          education and personal development to securing a stable future for
          themselves and their children.
        </motion.p>

        <motion.p
          className="intro_text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <strong>Our mission</strong> is to provide comprehensive support that
          empowers these young women through videography and film making
          production. Digital Public services and tourism to overcome obstacles
          and thrive.
        </motion.p>

        <div className="cta_buttons">
          <motion.button
            type="button"
            onClick={handleClick}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-1 rounded-md"
            transition={{ duration: 0.6, delay: 0.6 }}
          > 
            Contact Us
          </motion.button>

          <motion.button
            onClick={handleClickDonate}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-md"
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Donate
          </motion.button>
        </div>
      </div>
      <div className="imageContainer">
        <motion.img
          src={`${process.env.PUBLIC_URL}/homeimg.jpeg`}
          alt="Example"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
};

export default HomeIntro;
