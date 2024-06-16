import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VisitModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    phone: "",
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
    const { name, email, date, phone } = formData; // Extracting the values from formData

    const details = {
      name,
      email,
      date,
      phone,
    };
    const type = "visit";
    const new_visit = { type, details };

    try {
      const response = await fetch(
        "https://api.ikibehofoundation.org.rw/api/donations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_visit),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="visitModal"
      tabIndex="-1"
      aria-labelledby="visitModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="visitModalLabel">
              Schedule a Visit
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
                <label htmlFor="date" className="form-label">
                  Visit Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={formData.date}
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

              {!isPending && (
                <button type="submit" className="btn btn-primary">
                  Schedule a visit
                </button>
              )}
              {isPending && (
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  booking...
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitModal;
