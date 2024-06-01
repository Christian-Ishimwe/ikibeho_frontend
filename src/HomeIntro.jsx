import React from "react";
import { Fade } from "react-reveal";
import "./HomeIntro.css"; // Import CSS file for styling

const HomeIntro = () => {
  return (
    <div className="home_intro">
      <div className="home_content">
        <Fade bottom>
          <h2>Empowering Teen Mothers</h2>
        </Fade>
        <Fade bottom delay={200}>
          <p className="intro_text">
            At <strong>Ikibeho Digital Foundation</strong>, we are dedicated to
            transforming the lives of teen mothers in Rwanda. We understand the
            unique challenges that young mothers face, from managing their
            education and personal development to securing a stable future for
            themselves and their children.
          </p>
        </Fade>
        <Fade bottom delay={400}>
          <p className="intro_text">
            <strong>Our mission</strong> is to provide comprehensive support
            that empowers these young women through photography, videography,
            and tourism to overcome obstacles and thrive.
          </p>
        </Fade>
        <div className="cta_buttons">
          <Fade bottom delay={600}>
            <button>Contact Us</button>
          </Fade>
          <Fade bottom delay={800}>
            <button>Donate</button>
          </Fade>
        </div>
      </div>
      <div className="imageContainer">
        <Fade right>
          <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Example" />
        </Fade>
      </div>
    </div>
  );
};

export default HomeIntro;
