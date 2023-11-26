import React from "react";
import "./BottomPart.css";
import { Link } from "react-router-dom";

export default function BottomPart() {
  return (
    <div className="bottom_section">
      <div className="bottom_title">6541 Trust</div>
      <div className="bottom_content">
        <div className="bottom_statement">
          <div className="bottom_section_top">
            <div className="bottom_section_top_message">
              The 6541 works to provide crucial medicine and education for the
              needy.
            </div>
            <div className="bottom_section_pages_container">
              <Link
                to="/medical"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_medical">Medical</div>
              </Link>
              <Link
                to="/education"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_education">Education</div>
              </Link>
              <Link
                to="/founders"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_founder">Founders</div>
              </Link>
              {/* <div className="bottom_section_past_work">Past Work</div> */}
            </div>
          </div>
          <div className="bottom_section_bottom">
            <div className="contact_us_section">
              <div className="contact_us_header">Contact Us</div>
              <div className="contact_us_info">
                <div className="phone">Phone number: +91 87908-06505 </div>
                <div className="email">Email: 6541trust@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
