import React from "react";
import "./EducationPage.css";
import pankajam_1 from "./pankajam_1.jpeg";
import education from "./education.jpeg";

const EducationPage = () => {
  return (
    <div className="education_body">
      <div className="education_title">Pankajam Welfare Trust</div>
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
          <div className="education_name_title">Pankajam LASTNAME</div>
          <div className="education_image_content">
            Mrs. Pankajam is an amazing and resilient woman. Forced to quit
            school and get married at the age of 13, and becoming a mother of 6
            boys by age 27, she struggled to support her family survive as a
            single mother. So, rather than give up, she went back and finished
            high school, got a job as an accountant and continued her education
            and got a college degree. Looking back, this required a lot of guts
            and resolution to succeed in a male-dominated society. Her hard work
            and single-mindedness to set a goal and methodically, achieve it
            rubbed off on her 6 children who got inspiration from her. Because
            of her own personal experience Mrs. Pankajam has always had a desire
            to help single mothers who are striving to help their children
            succeed in life.
          </div>
        </div>
      </div>

      <div className="education_section_1">
        <div className="education_objective_title">Trust Objective</div>
        <div className="education_objective_image_container">
          <div className="education_objective_image_content">
            This fund is set up in honor of Mrs. Pankajam to seek out and
            empower women, particularly single mothers struggling to bring up
            children. We work with organizations to provide free education for
            the poor children.
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
