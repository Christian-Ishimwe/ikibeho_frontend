import React, { useState } from "react";
import "./Contacts.css"; // Assuming your styles are in ContactUs.css
import "typeface-roboto";
import "./Pages/blogs.css"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";

const Contacts = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isPending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const comment = { email, message, name };
    fetch("https://api.ikibehofoundation.org.rw/api/contacts/send", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => {
        if (!response.ok) {
          alert("There was an error");
          throw new Error("Internal server error");
        }
        return response.json();
      })
      .then((data) => {
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent successfully");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPending(false);
      });
  };

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
            <p>Muyumbu, Rwamagana District, Eastern</p>
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
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contacts">
            <h3>Contact us</h3>
            <h2>
              Get in <strong>Touch</strong>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="input_field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input_field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input_field">
                <label htmlFor="message">Comment or Message</label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              {isPending && (
                <button
                  disabled
                  className="bg-gray-300 text-gray-600 py-2 px-4 rounded cursor-not-allowed"
                >
                  Sending message...
                </button>
              )}
              {!isPending && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
