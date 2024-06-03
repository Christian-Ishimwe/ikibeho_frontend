import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "typeface-roboto";
import "./About.css";
const About = () => {
  return (
    <div id="about">
      <div className="about_intro">
        <h3>About us</h3>
        <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Contacts" />
      </div>
      <div className="about_content">
        <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Contacts" />
        <div>
          <h2>About Ikibeho</h2>
          <p>
            Ikibeho Digital Foundation in an independent, non-governmental
            organisation based in Muyumbu, Rwamagana registerd with the Rwandan
            Govenment. Ikibeho strives to improve the both quality and education
            of teen mothers.
          </p>
          <div className="about_missions">
            <div className="about_item">
              <div>
                <IoMdCheckmarkCircleOutline className="about_icon" />
              </div>
              <div>
                <span>Vision:</span> Our work aims to break the vicious cycle of
                poverty and social isolation and to restore hope among the youth
                for a better future. We believe that every person be men or
                female have equal rights.
              </div>
            </div>
            <div className="about_item">
              <div>
                <IoMdCheckmarkCircleOutline className="about_icon" />
              </div>
              <div>
                <span>Mission:</span> No Girl uneducated. “We believe that every
                young girl and even those who drop from school due to unwanted
                pregnancies in Rwanda needs and deserves quality education in
                order to develop and get engage in employment opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_history">
        <h2>Our History</h2>
        <p>
          IKIBEHO DIGITAL FOUNDATION, a common-benefit foundation, was
          established on July 3rd, 2023, by NEZEHOSE MEDARD. The founder, Eng.
          NEZEHOSE Medard, resides in Kibagabaga Cell, Kimironko Sector, Gasabo
          District, and can be contacted via mobile at +250788483378 or by email
          at nezehose@gmail.com.
        </p>
        <p>
          As a professional technologist and engineer, NEZEHOSE Medard
          envisioned creating a foundation that would transform the well-being
          of teen mothers, vulnerable women from poor families, and young girls
          who had dropped out of school due to family disputes. This vision led
          to the establishment of IKIBEHO DIGITAL FOUNDATION, a training center
          aimed at improving the financial and mental well-being of the Rwandan
          society through digital training skills. The foundation offers three
          main training courses: provision of public service activities,
          filmmaking and video production, and tourism activities.
        </p>
        <p>
          The beneficiaries of the foundation's programs include children,
          especially girls, who left school due to limited abilities, poor
          families from the first and second social classes, teen mothers who
          dropped out of school due to unwanted pregnancies, and vulnerable
          women from poor families.
        </p>
        <p>
          The foundation operates under the deed of incorporation and complies
          with the provisions of Law No 059/2021 of 14/10/2021 governing
          foundations in Rwanda. The head office of IKIBEHO DIGITAL FOUNDATION
          is located in Kabagabo Cell, Muyumbu Sector, Rwamagana District,
          Eastern Province, but it can be relocated to other parts of the
          country as needed.
        </p>
        <p>
          The strategic location of the foundation in the rural part of the
          country was chosen to facilitate access to the beneficiaries, making
          it easier for the foundation to provide training to those in need.
        </p>
      </div>

      
    </div>
  );
};

export default About;
