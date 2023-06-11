import React, { Component } from "react";
import "./AboutMe.css";
import { Button } from "react-bootstrap";
import {
  about_p_section_1,
  about_p_section_2,
  about_p_section_3,
  socialMediaLinks,
} from "../../portfolio";
export class AboutMe extends Component {
  render() {
    return (
      <div id="AboutMe" style={{ backgroundColor: "#e9ecef" }}>
        <div className="container">
          <div className="changeFlexDir">
            <div className="flexBox image-section">
              <img
                class="border border-secondary rounded-circle imageHandle"
                src="Images/MyImg1.png"
                alt="profilepicture"
              />
            </div>
            <div className="flexBox">
              <div className="about-section">
                <div>
                  <h1>About Me</h1>
                  <p className="mediaHandleP" style={{ fontSize: "21px" }}>
                    {about_p_section_1}
                    <a
                      href="http://dtu.ac.in/"
                      className="left"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Delhi Technological University (D.T.U).
                    </a>
                    {about_p_section_2}
                    <a
                      href="https://www.jf.ag/"
                      className="left"
                      target="_blank"
                      rel="noreferrer"
                    >
                      J&F India Pvt. Ltd.
                    </a>
                    {about_p_section_3}
                  </p>
                  <Button
                    className="btn btn-lg btn-background"
                    style={{ marginBottom: "10px" }}
                    href={socialMediaLinks.resume}
                    target="_blank"
                    download
                  >
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
