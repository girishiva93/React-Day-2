import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Complete Home Service</h1>
          </div>
          <div className="col-3">
            <button className="contact-btn">Contact</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
