import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavHeader.css";
export class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { backGroundTrans: false, yOffset: false };

    this.changeBkColor = this.changeBkColor.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > 55) {
      this.setState({ yOffset: true });
    } else {
      this.setState({ yOffset: false });
    }
  }

  changeBkColor() {
    let oppState = !this.state.backGroundTrans;
    this.setState({ backGroundTrans: oppState });
  }
  render() {
    let backGroundClass = "bkTrans";
    if (this.state.yOffset) {
      backGroundClass = "bkPrimary";
    } else if (this.state.backGroundTrans) {
      backGroundClass = "bkPrimary";
    } else {
      backGroundClass = "bkTrans";
    }
    return (
      <Navbar
        className={`nav-bar fixed-top ${backGroundClass}`}
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={this.changeBkColor}
        >
          {!this.state.backGroundTrans ? (
            ""
          ) : (
            <span
              aria-hidden="true"
              style={{ color: "white", fontSize: "30px", fontWeight: "BOLD" }}
            >
              &times;
            </span>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5" style={{ fontWeight: "500" }}>
            <Nav.Link className="nav-bar-link p-2" href="#AboutMe">
              About
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#Experience">
              Experience
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#Skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#Project">
              Project
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavHeader;
