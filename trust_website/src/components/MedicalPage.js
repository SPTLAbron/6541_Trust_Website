import React from "react";
import "./MedicalPage.css";
import lakshmi_photo from "./lakshmi_photo.jpg";
import hospital from "./indian_hospital.jpeg";

const MedicalPage = () => {
  return (
    <div className="medical_body">
      <div className="medical_title">Lakshmi Medical Trust</div>
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
            Mrs. Lakshmi Srinivasan was a graceful person who exuded warmth with
            her charming smile. With minimal formal education, she taught
            herself and became fluent in 4 languages. She showed exemplary
            kindness to everyone, irrespective of their social status and
            religious affiliations.
          </div>
        </div>
      </div>
      <div className="medical_section_2">
        <div className="medical_objective_title">Trust Objective</div>
        <div className="medical_objective_container">
          <div className="medical_objective_content">
            In recognition of Mrs. Srinivasan's unflinching kindness,
            particularly towards those who have suffered chronic illnesses, this
            fund aims to help individuals with severe and life-threatening
            health issues.
          </div>
          <img
            src={hospital}
            style={{
              height: "20rem",
              width: "20rem",
              justifySelf: "center",
              borderWidth: "0.01rem",
              borderStyle: "solid",
              marginRight: "3rem",
            }}
            alt="NONE"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalPage;
