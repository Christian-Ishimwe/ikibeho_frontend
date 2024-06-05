import "./Donations.css"
import React from "react"

const Donations=()=>{
    return (
      <>
        <div id="donations">
          <div className="donation__intro">
            <div className="donation__contents">
              <h2>Donate to Our Cause</h2>
              <p>
                Make a difference with your contribution. Every donation help us
                continue our Mission.
              </p>
              <button id="donateButton">
                <i className="ri-arrow-down-line"></i> Donate Now
              </button>
            </div>
            <div className="donation__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="rgb(10, 34, 57)"
                viewBox="0 0 24 24"
                width="300"
                height="200"
              >
                <path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="donation__options">
          <div className="donation_options_container">
            <h2>Donation Options</h2>
            <div className="donation__items">
              <div className="donation_item">
                <h4>One-Time Donation</h4>
                <p>Make a contribution to support our young Girls</p>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#donationModal"
                >
                  Donate
                </button>
              </div>
              <div className="donation__item">
                <h4>Volunteer Opportunities</h4>
                <p>
                  Join our diverse Volunteers, working together to create
                  Positive change
                </p>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#volunteerModal"
                >
                  Volunteer
                </button>
              </div>
              <div className="donation__item">
                <h4>Visit us</h4>
                <p>
                  Visit us at our office, and mentor our young Girls and Make an
                  impactful Change
                </p>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#visitModal"
                >
                  Book
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="donationModal"
          tabindex="-1"
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
                <form id="#">
                  <div className="mb-3">
                    <label for="donationAmount" className="form-label">
                      Donation Amount (USD)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="donationAmount"
                      aria-describedby="amountHelp"
                      placeholder="Enter amount"
                    />
                    <div id="amountHelp" className="form-text">
                      Enter the amount you wish to donate in USD.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="message" className="form-label">
                      Message (optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Write a message"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="volunteerModal"
          tabindex="-1"
          aria-labelledby="volunteerModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="volunteerModalLabel">
                  Volunteer Registration
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form id="volunteerForm">
                  <div className="mb-3">
                    <label for="fullNameVolunteer" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullNameVolunteer"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="emailVolunteer" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailVolunteer"
                      aria-describedby="emailHelpVolunteer"
                      placeholder="Enter your email"
                    />
                    <div id="emailHelpVolunteer" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="volunteerPhone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="availability" className="form-label">
                      Availability
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="availabilityDate"
                      min="2023-01-01"
                      max="2030-12-31"
                      required
                    />
                    <input
                      type="time"
                      className="form-control mt-2"
                      id="availabilityTime"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label for="skills" className="form-label">
                      Skills
                    </label>
                    <textarea
                      className="form-control"
                      id="skills"
                      rows="3"
                      placeholder="Describe your skills"
                    ></textarea>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      id="submit-volunteer"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="visitModal" tabindex="-1" aria-labelledby="visitModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="visitModalLabel">Schedule a Visit</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form  id="visit-form">
          <div className="mb-3">
            <label for="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="mb-3">
            <label for="preferredDate" className="form-label">Preferred Date</label>
            <input type="date" className="form-control" id="preferredDate" min="2023-01-01" max="2030-12-31" required />
          </div>
          <div className="mb-3">
            <label for="reason" className="form-label">Reason for Visit</label>
            <textarea className="form-control" id="reason" rows="3" placeholder="Enter reason for visit" required></textarea>
          </div>
          <div className="mb-3">
            <a href="https://maps.app.goo.gl/rsRxeHasUV4SS4Ei8" target="_blank">Get Directions</a>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button id="submit-visit" className="btn btn-primary">Schedule Visit</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
}

export default  Donations