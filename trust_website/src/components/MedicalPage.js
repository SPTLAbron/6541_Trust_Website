import React from "react";
import "./MedicalPage.css";
import lakshmi_photo from "./lakshmi_photo.jpg";

const MedicalPage = () => {
  return (
    <div className="medical_body">
      <div className="medical_title">Lakshmi Welfare Plan</div>
      <div className="medical_section_1">
        <div className="medical_section_1">
          <div className="medical_image_container">
            <img
              src={lakshmi_photo}
              style={{
                height: "25rem",
                width: "28rem",
                justifySelf: "center",
                borderWidth: "0.05rem",
                borderStyle: "solid",
              }}
              alt="NONE"
            />
            <div className="medical_name_title">Lakshmi Srinivasan</div>
            <div className="medical_image_content">
              Mrs. Lakshmi Srinivasan was a graceful who exuded warmth with her
              charming smile. With minimal formal education, she self-taught
              herself and was fluent in 6 languages. She showed exemplary
              kindness to all humans irrespective of their social status and
              religious affiliations.
            </div>
          </div>
        </div>
        <div className="medical_section_1">
          <div className="medical_objective_title">Trust Objective</div>
          <div className="medical_objective_content">
            As a recognition of Mrs. Srinivasan unflinching kindness
            particularly towards those who suffered chronic and life- threating
            illnesses, this fund’s aim is to help people with acute life-
            threatening health issues.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPage;
