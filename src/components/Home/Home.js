import React, { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import "./Home.css";
import NavHeader from "../Nav/NavHeader";
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
        Foreground content goes here
      </div>
    );
  }
}

export default Home;
