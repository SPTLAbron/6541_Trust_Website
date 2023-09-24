import React from "react";
import "./EducationPage.css";
import pankajam_1 from "./pankajam_1.jpeg";
import education from "./education.jpeg";

const EducationPage = () => {
  return (
    <div className="education_body">
      <div className="education_title">Pankajam Women's Welfare Trust</div>
      <div className="education_section_1">
        <div className="education_image_container">
          <img
            src={pankajam_1}
            style={{
              height: "21rem",
              width: "28rem",
              justifySelf: "center",
              borderWidth: "0.05rem",
              borderStyle: "solid",
            }}
            alt="NONE"
          />
          <div className="education_name_title">Pankajam Sambamurty</div>
          <div className="education_image_content">
            Mrs. Pankajam is an amazingly resilient woman. Following old Indian
            traditions, she had to quit school to get married at the age of 13.
            By 27, she became a single mother, struggling to support her
            children. Rather than giving up, she went back to continue her
            education and got a job as an accountant. Looking back, this
            required a lot of guts and resolution to succeed in a male-dominated
            society, especially in the 1960s. Her hard work and
            single-mindedness inspired her children to set goals and
            methodically achieve them. Driven by her own personal experiences,
            Mrs. Pankajam has always helped single mothers who are striving to
            help their children succeed in life.
          </div>
        </div>
      </div>

      <div className="education_section_1">
        <div className="education_objective_title">Trust Objective</div>
        <div className="education_objective_image_container">
          <div className="education_objective_image_content">
            This fund is set up in honor of Mrs. Pankajam to seek out and
            empower women, particularly single mothers struggling to bring up
            children.
          </div>
          <img
            src={education}
            style={{
              height: "25rem",
              width: "40rem",
              justifySelf: "center",
              borderWidth: "1rem",
            }}
            alt="NONE"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
