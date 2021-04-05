import React, { Component } from "react";
import "./AboutMe.css";
import { Button } from "react-bootstrap";
export class AboutMe extends Component {
  render() {
    return (
      <div id="AboutMe" style={{ backgroundColor: "#e9ecef" }}>
        <div className="container">
          <div className="changeFlexDir">
            <div className="flexBox image-section">
              <img
                class="border border-secondary rounded-circle imageHandle"
                src="Images/MyImg1.jpg"
                alt="profilepicture"
              />
            </div>
            <div className="flexBox">
              <div className="about-section">
                <div>
                  <h1>About Me</h1>
                  <p className="mediaHandleP" style={{ fontSize: "21px" }}>
                    A passionate Full Stack Software Developer having an
                    experience of building Web and Mobile applications with
                    JavaScript / Reactjs / Nodejs / React Native and some other
                    cool libraries and frameworks.
                  </p>
                  <Button
                    className="btn btn-lg btn-background"
                    style={{ marginBottom: "10px" }}
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
