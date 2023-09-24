import React from "react";
import "./PastworksPage.css";
import pankajam_1 from "./path/to/pankajam_1.jpg";

const PastworksPage = () => {
  return (
    <div className="pastwork_body">
      <div className="pastwork_title">text1</div>
      <div className="pastwork_section_1">
        <div className="pastwork_image_container">
          <img
            src={pankajam_1}
            alt="text2"
            className="pastwork_image"
          />
          <div className="pastwork_name_title">text2</div>
          <div className="pastwork_image_content">
            jrbfgg vgbaehv  vegbvdjvbkj eabvjabjv ubajvshb
            jsbvj nzcdjgba sjhbvsz jhv jfhbsj uv zjvhblasjv 
            sjfbvkjhbawrisbvh vsiuvnalskhvblfbvusvlbvlb jfh
            wiaufbvhjbraius wuvbshwaiusvb aiwrusjllisua.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastworksPage;
