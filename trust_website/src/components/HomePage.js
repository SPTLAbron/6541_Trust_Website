import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import homescreen from "./homescreen.jpeg";
// import image from "./download.jpeg";

export default function HomePage() {
  return (
    <>
      <div className="home_body">
        <div className="home_section_1">
          <div className="non_profit_message">
            We believe in a non-profit organization dedicated to supporting and
            providing for needy children.
          </div>
        </div>
        <div className="home_section_2">
          <div className="mission_title">Our Mission</div>
          <div className="mission_content_container">
            <div className="mission_content">
              To help the underprivileged and less-fortunate members of our
              Indian society through financial resources, counseling and
              guidance just as we were helped several years back. This is our
              small token of appreciation for those who supported us and to the
              society that got us here. We strongly believe that there are
              children in our society who could grow up to become leaders of
              tomorrow with a little help and a gentle nudge. The only thing
              that we seek in return is to see underprivileged people succeed
              and thrive. We get our guidance our scriptures, which says:
              <br />
              <br />
              BHAGAVAD GITA 17.20: <br />
              datavyam iti yad danam diyate nupakarine deśhe kāle chapātre
              chataddānaṁ sāttvikaṁ smṛitam <br />
              Charity given out of duty, without expectation of return, at the
              proper time and place, and to a worthy person is considered to be
              in the mode of goodness.
            </div>
            <img source={homescreen} alt="NONE"></img>
          </div>
        </div>

        <div className="home_section_3">
          <div className="work_title">Our Initiatives</div>
          <div className="work_content_container">
            <div className="work_content">
              We recognize that people’s needs are diverse and can span multiple
              areas. So, we have chosen the few that are top of mind for us and
              come up with 2 different individual welfare plans initially under
              6541 Trust umbrella. We have named each of these plans for the
              mentors who were passionate about these causes.
            </div>
            {/* <div className="medicines_image">IMAGE</div> */}
          </div>
        </div>

        {/* <div className="section_3">
          <div className="contact_us_header">Contact Us</div>
        </div>
        <input type="text" onChange={onChange} /> */}
      </div>
      {/* About Us Box */}
      {/* <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 10,
        }}
      >
        <p style={{ marginBottom: "5px" }}>
          <strong>Contact Us</strong>
        </p>
        <p>WhatsApp: +123456789</p>
        <p>Email: example@example.com</p>
      </div> */}
    </>
  );
}

// const onChange = () => {
//   console.log("changed");
// };
