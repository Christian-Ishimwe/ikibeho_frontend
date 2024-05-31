import React from "react";
import NavBar from "./NavBar";
import { FaVideo, FaPhotoVideo } from "react-icons/fa";
import { MdPark } from "react-icons/md";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home_container">
        <div>
          <div className="home_content">
            <h2>Empowering Teen Mothers</h2>
            <p>
              At <strong>Ikibeho Digital Foundation</strong>, we are dedicated
              to transforming the lives of teen mothers in Rwanda. We understand
              the unique challenges that young mothers face, from managing their
              education and personal development to securing a stable future for
              themselves and their children.{" "}
            </p>
            <p>
              {" "}
              <strong>Our mission</strong> is to provide comprehensive support
              that empowers these young women throught photograph, videography
              and tourism to overcome obstacles and thrive.
            </p>
            <div>
              <button>Contact Us</button>
              <button>Donate</button>
            </div>
          </div>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Example" />
        </div>
        <div className="home__impact">
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
          <div>
            <h2>Our Approach</h2>
            <p>
              At Ikibeho, we believe in a hands-on, experiential approach to
              learning. Our programs are designed to be practical, engaging, and
              directly applicable to real-world situations. Here's how we do it
            </p>
            <div>
              <div>
                <FaVideo />
                <h3>Videograph</h3>
                <p>
                  Our videography training covers the entire production process,
                  from scriptwriting and filming to editing and post-production.
                  We equip young mothers with the skills needed to create
                  compelling visual stories.
                </p>
              </div>
              <div>
                <FaPhotoVideo />
                <h3>Photography</h3>
                <p>
                  We teach young mothers everything from basic camera operations
                  to advanced photography techniques. Our comprehensive
                  curriculum includes workshops on composition, lighting,
                  editing, and more.{" "}
                </p>
              </div>
              <div>
                <MdPark />
                <h3>Toursim</h3>
                <p>
                  We provide in-depth training on Rwanda's rich cultural and
                  natural heritage. Our courses prepare young mothers for
                  careers in the tourism industry, including roles as tour
                  guides, travel consultants, and hospitality managers.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home_testimonies">
          <h2>Testimonies</h2>
          <p>
            At Ikibeho Digital Foundation, the impact of our work is best told
            through the voices of the young mothers we support. Here are some of
            their stories:
          </p>
          <div>
            <p>
              Joining Ikibeho, was the best decision I ever made. The
              photography training not only gave me a skill but also a sense of
              purpose. I never imagined that I could turn my passion into a
              career. The internship they provided helped me gain real-world
              experience, and now I have started my own small photography
              business. I am forever grateful for the support and guidance I
              received.
            </p>
            <ul>
              <li>
                <strong>Age </strong>18
              </li>
              <li>
                <strong>Program </strong>Photography
              </li>
              <li>
                <strong>Name </strong>Janine Dushimana
              </li>
            </ul>
          </div>
          <div>
            <p>
              Before I found Ikibeho Foundation, I felt lost and overwhelmed.
              The videography program changed everything for me. I learned so
              much and got to work on real projects during my internship. The
              staff were incredibly supportive and always there to help. Now,
              I’m working with a local media company, and I feel like I have a
              bright future ahead.
            </p>
            <ul>
              <li>
                <strong>Age </strong>17
              </li>
              <li>
                <strong>Program </strong>Videography
              </li>
              <li>
                <strong>Name </strong>Yvette Icyimpaye
              </li>
            </ul>
          </div>
          <div>
            <p>
              As a young mother, I never thought I could have a career in
              tourism. The training I received from Ikibeho was thorough and
              inspiring. The internship at a local tour company gave me hands-on
              experience, and I’ve recently been offered a permanent position.
              This opportunity has given me hope and confidence in my abilities.
            </p>
            <ul>
              <li>
                <strong>Age </strong>20
              </li>
              <li>
                <strong>Program </strong>Tourism
              </li>
              <li>
                <strong>Name </strong>Aline Nkurunziza
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
