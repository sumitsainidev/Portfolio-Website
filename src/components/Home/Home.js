import React, { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "./Home.css";
import NavHeader from "../Nav/NavHeader";
import { motion } from "framer-motion";
import SocialMedia from "./SocialMedia/SocialMedia";
import { Button } from "react-bootstrap";
import { home_p_section } from "../../portfolio";
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
      <div id="Home" className="home-container" ref={this.vantaRef}>
        <NavHeader />
        <div className="home-container-content">
          <div className="text-center container homeScreen">
            <h1>
              <div className="home-hello">Hi, I'm </div>Sumit Saini
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
              {home_p_section}
            </p>
            <SocialMedia />
            <Button
              id="hoverId"
              className="btn btn-outline-light btn-lg btn-background"
              style={{ backgroundColor: "#007bff" }}
              href="#Contact"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
