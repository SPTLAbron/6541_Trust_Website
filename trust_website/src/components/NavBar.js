import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_header">
      {/* Logo */}
      {/* <Link to="/">
        <img
          src="/path/to/your/logo.png"
          alt="Company Logo"
          style={{ cursor: "pointer", position: "absolute", top: "10px", left: "10px" }}
        />
      </Link> */}
      {/* Clickable Company Title */}
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "white",
          position: "absolute",
        }}
      >
        <h1 className="navbar_title">6541 Trust</h1>
      </a>
      <div className="navbar_scrolldown">
        <div className="activities_container">
          <button className="activites_page">Activities</button>
          <div className="dropdown_container">
            <a
              href="/medical"
              style={{
                textDecoration: "none",
                color: "white",
                // position: "absolute",
              }}
            >
              <div className="medical_page">Medical</div>
            </a>

            <a
              href="/education"
              style={{
                textDecoration: "none",
                color: "white",
                position: "absolute",
              }}
            >
              <div className="educational_page">Education</div>
            </a>
          </div>
        </div>
        <a
          href="/founders"
          style={{
            textDecoration: "none",
            color: "white",
            position: "absolute",
          }}
        >
          <div className="founders_page">Founder</div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
