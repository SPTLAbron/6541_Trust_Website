import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_header">
      <div className="navbar_title">6541 Trust</div>
      <div className="navbar_scrolldown">
        <div className="activites_page">Activities</div>
        <div className="founders_page">Founder</div>
        {/* <div className="organizations_page">Contact Us</div> */}
      </div>
    </nav>
  );
};

export default Navbar;
