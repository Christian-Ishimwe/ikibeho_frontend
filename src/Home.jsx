import React from "react";
import NavBar from "./NavBar";
import HomeIntro from "./HomeIntro";
import { FaVideo, FaPhotoVideo } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import Footer from "./Footer";
import TestimonySection from "./TestimonySection";
import "./Home.css"
import "typeface-roboto"
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home_container">
        <HomeIntro />
        <div className="home_impact">
          <div>
            <h2>Our Impact</h2>
            <p>
              Since our inception, <strong>Ikibeho</strong> has positively
              impacted the lives of numerous teen mothers in rwamagana,
              Rwanda,providing them with the support they need to overcome
              adversity and build a brighter future. Our success stories are a
              testament to the resilience and determination of these young women
              and the effectiveness of our programs.
            </p>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Example" />
          </div>
        </div>
        <div className="home_approach">
          <div className="home_ap">
            <h2>Our Approach</h2>
            <p>
              At Ikibeho, we believe in a hands-on, experiential approach to
              learning. Our programs are designed to be practical, engaging, and
              directly applicable to real-world situations. Here's how we do it
            </p>
          </div>
          <div className="ap_item">
            <div>
              <FaVideo className="icon" />
              <h3>Videograph</h3>
              <p>
                Our videography training covers the entire production process,
                from scriptwriting and filming to editing and post-production.
                We equip young mothers with the skills needed to create
                compelling visual stories.
              </p>
            </div>
            <div>
              <FaPhotoVideo className="icon" />
              <h3>Photography</h3>
              <p>
                We teach young mothers everything from basic camera operations
                to advanced photography techniques. Our comprehensive curriculum
                includes workshops on composition, lighting, editing, and more.{" "}
              </p>
            </div>
            <div>
              <MdPark className="icon" />
              <h3>Tourism</h3>
              <p>
                We provide in-depth training on Rwanda's rich cultural and
                natural heritage. Our courses prepare young mothers for careers
                in the tourism industry, including roles as tour guides, travel
                consultants, and hospitality managers.{" "}
              </p>
            </div>
          </div>
        </div>
       <TestimonySection/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
