import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Experience() {
  if (workExperiences.display) {
    return (
      <div id="Experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <a
                      href={card.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="cardLink"
                    >
                      <ExperienceCard
                        key={i}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                        }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
