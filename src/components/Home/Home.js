import React, { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "./Home.css";
import NavHeader from "../Nav/NavHeader";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia/SocialMedia";
import { Button } from "react-bootstrap";

export class Home extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1,
      scaleMobile: 1.0,
      waveHeight: 10.5,
      waveSpeed: 0.9,
      zoom: 1.54,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div className="home-container" ref={this.vantaRef}>
        <NavHeader />
        <div className="home-container-content">
          <div className="text-center container homeScreen">
            <h1>
              Hi I'm Sumit
              <motion.span
                drag={true}
                dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                className="hand"
                animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
                transition={{ yoyo: Infinity, duration: 1.7 }}
              >
                <span role="img" aria-label="Hand waving">
                  👋🏻
                </span>
              </motion.span>{" "}
            </h1>
            <p
              className="mediaHandleP"
              style={{ width: "54%", margin: "auto" }}
            >
              A passionate Full Stack Software Developer having an experience of
              building Web and Mobile applications with JavaScript / Reactjs /
              Nodejs / React Native and some other cool libraries and
              frameworks.
            </p>
            <SocialMedia />
            <Button className="btn btn-outline-light btn-lg btn-background">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
