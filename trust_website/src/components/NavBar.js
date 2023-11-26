import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar_header">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          position: "absolute",
        }}
      >
        <h1 className="navbar_title">6541 Trust</h1>
      </Link>
      <div className="navbar_scrolldown">
        <div className="activities_container">
          <button className="activites_page">Activities</button>
          <div className="dropdown_container">
            <Link
              to="/medical"
              style={{
                textDecoration: "none",
                color: "white",
                // position: "absolute",
              }}
            >
              <div className="medical_page">Medical</div>
            </Link>

            <Link
              to="/education"
              style={{
                textDecoration: "none",
                color: "white",
                position: "absolute",
              }}
            >
              <div className="educational_page">Women's Welfare</div>
            </Link>
          </div>
        </div>
        <Link
          to="/founders"
          style={{
            textDecoration: "none",
            color: "white",
            position: "absolute",
          }}
        >
          <div className="founders_page">Founders</div>
        </Link>
        <Link
          to="/founders"
          style={{
            textDecoration: "none",
            color: "white",
            position: "absolute",
          }}
        >
          {/* <div className="past_work">Past Work</div> */}
        </Link>
        {/* <div className="past_work">Past Work</div> */}
      </div>
    </nav>
  );
};

export default Navbar;
