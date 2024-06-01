import React from "react";
import "./ContactUs.css"; // Assuming your styles are in ContactUs.css

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        At Ikibeho Digital Foundation, we value your feedback and inquiries.
        Please use the form below to get in touch with us.
      </p>
      <div className="contact-details">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>Ikibeho Digital Foundation</p>
          <p>1234 NGO Street</p>
          <p>Kigali, Rwanda</p>
          <p>Email: info@ikibeho.org</p>
          <p>Phone: +250 123 456 789</p>
          <div className="map">
            <iframe
              title="Ikibeho Digital Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.0642452408585!2d4.353510515746839!3d50.84669767953209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c380f6e0b15d%3A0x6820c2d53d2e7d0d!2sGrand%20Place!5e0!3m2!1sen!2sbe!4v1628522931317!5m2!1sen!2sbe"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
