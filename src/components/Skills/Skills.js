import React, { Component } from "react";
import { skillsBar } from "../../portfolio";
import SkillsCard from "./SkillsCard/SkillsCard";
export class Skills extends Component {
  render() {
    return (
      <div
        className="education-section"
        style={{ paddingTop: "0px" }}
        id="Skills"
      >
        <div
          className="row d-flex justify-content-center skills"
          style={{ marginBottom: "0px" }}
        >
          {skillsBar.map((x) => (
            <SkillsCard faClass={x.faClass} label={x.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
