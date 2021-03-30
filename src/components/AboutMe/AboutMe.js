import React, { Component } from "react";
import "./AboutMe.css";
import { Button } from "react-bootstrap";
export class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-wrapper jumbotron jumbotron-fluid m-0">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-5 d-none d-lg-block align-self-center ">
              <img
                class="border border-secondary rounded-circle"
                src="Images/MyImg1.jpg"
                alt="profilepicture"
                width="370"
                height="370"
              />
            </div>
            <div className="col-lg-7">
              <div className="about-container-content">
                <div>
                  <h1>About Me</h1>
                  <p>
                    A passionate Full Stack Software Developer having an
                    experience of building Web and Mobile applications with
                    JavaScript / Reactjs / Nodejs / React Native and some other
                    cool libraries and frameworks.
                  </p>
                  <Button className="btn btn-lg btn-background">Resume</Button>
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
