import React, { Component } from "react";
import { skillsBar } from "../../portfolio";
import SkillsCard from "./SkillsCard/SkillsCard";
export class Skills extends Component {
  render() {
    return (
      <div className="education-section" id="education">
        <div id="Skills">
          <div className="row d-flex justify-content-center skills">
            {skillsBar.map((x) => (
              <SkillsCard faClass={x.faClass} label={x.name} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
