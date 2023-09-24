import React from "react";
import "./BottomPart.css";
import insta from "./insta.jpeg";

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
            {/* <div className="bottom_section_top_media">
              <img
                src={insta}
                style={{
                  height: "2rem",
                  width: "2rem",
                  justifySelf: "center",
                  borderWidth: "0.05rem",
                  borderStyle: "solid",
                }}
                alt="NONE"
              />
            </div> */}
            <div className="bottom_section_pages_container">
              <a
                href="/founders"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_founder">Founders</div>
              </a>
              <a
                href="/medical"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_medical">Medical</div>
              </a>
              <a
                href="/education"
                style={{
                  textDecoration: "none",
                  color: "white",
                  // position: "absolute",
                }}
              >
                <div className="bottom_section_education">Education</div>
              </a>
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
