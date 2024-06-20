import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const VolunteerModal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    volunteerType: "",
    availabilityDate: "",
  });
  const [isPending, setPending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    const { name, email, phone, volunteerType, availabilityDate } = formData;

    const details = {
      name,
      email,
      phone,
      volunteerType,
      availabilityDate,
    };
    const type = "volunteer";
    const new_volunteer = { type, details };

    try {
      const response = await fetch(
        "https://api.ikibehofoundation.org.rw/api/donations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_volunteer),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="volunteerModal"
      tabIndex="-1"
      aria-labelledby="volunteerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="volunteerModalLabel">
              Volunteer with Us
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="volunteerType" className="form-label">
                  Volunteer Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="volunteerType"
                  placeholder="Enter your volunteer type"
                  value={formData.volunteerType}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="availabilityDate" className="form-label">
                  Availability Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="availabilityDate"
                  value={formData.availabilityDate}
                  onChange={handleChange}
                  required
                />
              </div>
              {!isPending && (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
              {isPending && (
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  submiting...
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
