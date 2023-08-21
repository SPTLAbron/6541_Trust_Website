import React from "react";
import "./MedicalPage.css";

const MedicalPage = () => {
  return (
    <div className="medical_body">
      <div className="medical_section_1">
        <div className="medical_title">Lakshmi Welfare Plan</div>
        <div className="medical_content_container">
          <div className="medical_content">
            Mrs. Lakshmi Srinivasan was a graceful who exuded warmth with her
            charming smile. With minimal formal education, she self-taught
            herself and was fluent in 6 languages. She showed exemplary kindness
            to all humans irrespective of their social status and religious
            affiliations. As a recognition of Mrs. Srinivasan unflinching
            kindness particularly towards those who suffered chronic and life-
            threating illnesses, this fund’s aim is to help people with acute
            life- threatening health issues.
            <br />
          </div>
          {/* <img src={pankajam_1} alt="NONE" /> */}
        </div>
      </div>
    </div>
  );
};

export default MedicalPage;
