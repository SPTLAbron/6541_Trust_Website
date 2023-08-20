import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_header">
      {/* Logo */}
      <Link to="/">
        <img
          src="/path/to/your/logo.png"
          alt="Company Logo"
          style={{ cursor: "pointer", position: "absolute", top: "10px", left: "10px" }}
        />
      </Link>
      {/* Clickable Company Title */}
      <Link to="/" style={{ textDecoration: "none", color: "white", position: "absolute", top: "20px", left: "60px" }}>
        <h1 style={{ cursor: "pointer" }}>6541 Trust</h1>
      </Link>
      <div className="navbar_scrolldown">
        <div className="activites_page">Activities</div>
        <div className="founders_page">Founder</div>
      </div>
    </nav>
  );
};

export default Navbar;
