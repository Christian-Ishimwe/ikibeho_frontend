import React from "react";
import HomeIntro from "./HomeIntro";
import { FaVideo, FaPhotoVideo } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import TestimonySection from "./TestimonySection";
import "./Home.css"
import "typeface-roboto"
const Home = () => {
  return (
    <>
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
              <h3>Videograph and Film making</h3>
              <p>
                Our videography training covers the entire production process,
                from scriptwriting and filming to editing and post-production.
                We equip young mothers with the skills needed to create
                compelling visual stories.
              </p>
            </div>
            <div>
              <FaPhotoVideo className="icon" />
              <h3>Digital Public Services</h3>
              <p>
                Ikibeho empowers teen mothers by teaching them digital public
                service skills, fostering self-sufficiency and brighter futures.
                Through targeted education and support, they bridge the digital
                divide for young mothers.{" "}
              </p>
            </div>
            <div>
              <MdPark className="icon" />
              <h3>Tourism & Tea Value Chain Development</h3>
<p>
  We provide in-depth training on Rwanda's cultural and natural heritage.
  Our courses prepare young mothers for careers in tourism, including roles as
  tour guides, travel consultants, hospitality managers, and in the tea industry.
</p>

            </div>
          </div>
        </div>
        <TestimonySection />
      </div>
    </>
  );
};

export default Home;
