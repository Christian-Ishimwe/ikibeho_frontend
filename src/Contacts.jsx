import React from "react";
import "./Contacts.css"; // Assuming your styles are in ContactUs.css
import "typeface-roboto"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <div id="contacts">
      <div className="contacts_intro">
        <h3>Contact us</h3>
        <img src={`${process.env.PUBLIC_URL}/homeimg.jpeg`} alt="Contacts" />
      </div>
      <div className="contacts_content">
        <div className="contacts_address">
          <div className="contact_item">
            <CiLocationOn className="contact_icon" />
            <h3>Our Address</h3>
            <p>Muyumbu, Rwamagana District ,Eastern</p>
          </div>
          <div className="contact_item">
            <MdOutlinePhoneInTalk className="contact_icon" />
            <h3>Phone Number</h3>
            <p>+250 783 475 088</p>
          </div>
          <div className="contact_item">
            <MdEmail className="contact_icon" />
            <h3>Email Address</h3>
            <p>info@ikibefoundation.org.rw</p>
          </div>
        </div>
        <div className="contacts_form">
          <div className="contacts_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7389.133774708667!2d30.24210101038168!3d-1.96058828561095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1717398585772!5m2!1sen!2srw"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contacts">
            <h3>contact us</h3>
            <h2>
              Get in <strong>Touch</strong>
            </h2>
            <form action="#">
              <div className="input_field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>
              <div className="input_field">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className="input_field">
                <label htmlFor="message">Comment or Message</label>
                <textarea name="message"></textarea>
              </div>
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
