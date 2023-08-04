import React from "react";
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
        <div className="bottom_title">6541 Trust</div>
        <div className="bottom_content">
          <div className="bottom_statement">
            The 6541 works to provide crucial medicine and education for the
            needy.
          </div>
        </div>
      </div>
    </>
  );
}

// const onChange = () => {
//   console.log("changed");
// };
