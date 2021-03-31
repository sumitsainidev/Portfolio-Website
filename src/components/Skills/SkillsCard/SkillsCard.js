import React from "react";
import "./SkillsCard.css";
const Skills = ({ label, per, faClass }) => {
  return (
    <div
      className="skill__square col-3 col-sm-2 my-3 mx-auto"
      style={{ display: "inline", textAlign: "center" }}
    >
      <i className={`${faClass} mx-auto my-auto fa-5x`}></i>
      <h6 className="mt-2">{label}</h6>
    </div>
  );
};

export default Skills;
