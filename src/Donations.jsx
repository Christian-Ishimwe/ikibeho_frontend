import "./Donations.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import DonationModal from "./DonationModal"; // Corrected the file name import
import VisitModal from "./VisitModal";
import VolunteerModal from "./VolunteerModal"; // Corrected the file name import

const Donations = () => {
  return (
    <>
      <div id="donations">
        <div className="donation__intro">
          <div className="donation__contents">
            <h2>Donate to Our Cause</h2>
            <p>
              Make a difference with your contribution. Every donation helps us
              continue our mission.
            </p>
            <a href="#donateopt" className="text-decoration-none text-light">
              <button id="donateButton" className="btn btn-primary ">
                <i className="ri-arrow-down-line"></i> Donate Now
              </button>
            </a>
          </div>
          <div className="donation__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(10, 34, 57)"
              viewBox="0 0 24 24"
              width="200"
              height="100"
            >
              <path d="M5.00488 9.00281C5.55717 9.00281 6.00488 9.45052 6.00488 10.0028C7.63965 10.0028 9.14352 10.5632 10.3349 11.5023L12.5049 11.5028C13.8375 11.5028 15.0348 12.0821 15.8588 13.0025L19.0049 13.0028C20.9972 13.0028 22.7173 14.1681 23.521 15.8542C21.1562 18.9748 17.3268 21.0028 13.0049 21.0028C10.2142 21.0028 7.85466 20.3996 5.944 19.3449C5.80557 19.7284 5.43727 20.0028 5.00488 20.0028H2.00488C1.4526 20.0028 1.00488 19.5551 1.00488 19.0028V10.0028C1.00488 9.45052 1.4526 9.00281 2.00488 9.00281H5.00488ZM6.00589 12.0028L6.00488 17.0248L6.05024 17.0573C7.84406 18.3177 10.183 19.0028 13.0049 19.0028C16.0089 19.0028 18.8035 17.8472 20.84 15.8734L20.9729 15.7398L20.8537 15.6394C20.3897 15.2764 19.8205 15.0512 19.2099 15.0097L19.0049 15.0028L16.8934 15.0028C16.9664 15.3244 17.0049 15.6591 17.0049 16.0028V17.0028H8.00488V15.0028L14.7949 15.0018L14.7605 14.9233C14.38 14.1297 13.593 13.5681 12.6693 13.5081L12.5049 13.5028L9.57547 13.5027C8.66823 12.5773 7.40412 12.0031 6.00589 12.0028ZM4.00488 11.0028H3.00488V18.0028H4.00488V11.0028ZM18.0049 5.00281C19.6617 5.00281 21.0049 6.34595 21.0049 8.00281C21.0049 9.65966 19.6617 11.0028 18.0049 11.0028C16.348 11.0028 15.0049 9.65966 15.0049 8.00281C15.0049 6.34595 16.348 5.00281 18.0049 5.00281ZM18.0049 7.00281C17.4526 7.00281 17.0049 7.45052 17.0049 8.00281C17.0049 8.55509 17.4526 9.00281 18.0049 9.00281C18.5572 9.00281 19.0049 8.55509 19.0049 8.00281C19.0049 7.45052 18.5572 7.00281 18.0049 7.00281ZM11.0049 2.00281C12.6617 2.00281 14.0049 3.34595 14.0049 5.00281C14.0049 6.65966 12.6617 8.00281 11.0049 8.00281C9.34803 8.00281 8.00488 6.65966 8.00488 5.00281C8.00488 3.34595 9.34803 2.00281 11.0049 2.00281ZM11.0049 4.00281C10.4526 4.00281 10.0049 4.45052 10.0049 5.00281C10.0049 5.55509 10.4526 6.00281 11.0049 6.00281C11.5572 6.00281 12.0049 5.55509 12.0049 5.00281C12.0049 4.45052 11.5572 4.00281 11.0049 4.00281Z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="donation__options" id="donateopt">
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
                Join our diverse Volunteers, working together to create Positive
                change
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
                className="btn btn-primary"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>

      <DonationModal />
      <VisitModal />
      <VolunteerModal />
    </>
  );
};

export default Donations;
