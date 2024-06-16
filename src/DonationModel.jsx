import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DonationModal = () => {
  const [amount, setAmount] = useState(100);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const type = "donation";
    const details = { name, email, phone, amount };
    const new_donation = { type, details };
    fetch("https://api.ikibehofoundation.org.rw/api/donations", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_donation),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Server error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Your donation have been submitted, we will reach to you!");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <div
      className="modal fade"
      id="donationModal"
      tabIndex="-1"
      aria-labelledby="donationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="donationModalLabel">
              Make a Donation
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
                <label htmlFor="donationAmount" className="form-label">
                  Donation Amount (USD)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="donationAmount"
                  aria-describedby="amountHelp"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="donorName" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="donorName"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="donorEmail" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="donorEmail"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="donorEmail" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="donorPhone"
                  placeholder="Enter your Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              {!isPending && (
                <button type="submit" className="btn btn-primary">
                  Donate Now
                </button>
              )}
              {isPending && (
                <button class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Donating...
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
