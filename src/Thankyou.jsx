import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ThankYou = () => {
  window.addEventListener("DOMContentLoaded", ()=>{
    window.location.reload()
  })
  return (
    <div className="container text-center mt-5">
      <h1>Thank You for Helping Our Girls at Ikibeho Digital Foundation!</h1>
      <p>Your support means a lot to our Girls.</p>
      <img
        src={`${process.env.PUBLIC_URL}/homeimg.jpeg`}
        alt="Thank You"
        className="rounded-circle my-3"
        width={400}
        height={400}
      />
    </div>
  );
};

export default ThankYou;
