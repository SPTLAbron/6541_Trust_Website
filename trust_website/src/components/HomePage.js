import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
// import image from "./download.jpeg";

export default function HomePage() {
  return (
    <>
      <div className="body">
        <div className="section_1">
          <div className="non_profit_message">
            We believe in a non-profit organization dedicated to supporting and
            providing for needy children.
          </div>
        </div>
        <div className="section_2">
          <div className="mission_title">Our Mission</div>
          <div className="content_container">
            <div className="mission_content">
              To provide financial support for individuals, families or
              organizations who are facing challenges related to poverty.
            </div>
            <div className="medicines_image">IMAGE</div>
          </div>
        </div>
        {/* <div className="section_3">
          <div className="contact_us_header">Contact Us</div>
        </div>
        <input type="text" onChange={onChange} /> */}
      </div>
      <div className="bottom_section">
        {/* Clickable Company Title */}
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="bottom_title">6541 Trust</div>
        </Link>
        <div className="bottom_content">
          <div className="bottom_statement">
            The 6541 works to provide crucial medicine and education for the
            needy.
          </div>
        </div>
      </div>
      {/* About Us Box */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ marginBottom: "5px" }}>
          <strong>About Us</strong>
        </p>
        <p>WhatsApp: +123456789</p>
        <p>Email: example@example.com</p>
      </div>
    </>
  );
}

// const onChange = () => {
//   console.log("changed");
// };
