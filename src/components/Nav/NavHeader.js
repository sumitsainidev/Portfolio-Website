import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavHeader.css";
export class NavHeader extends Component {
  render() {
    return (
      <Navbar className="nav-bar" variant="dark">
        <Nav className="ml-auto mr-5">
          <Nav.Link className="nav-bar-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-bar-link" href="#features">
            About
          </Nav.Link>
          <Nav.Link className="nav-bar-link" href="#pricing">
            Experience
          </Nav.Link>
          <Nav.Link className="nav-bar-link" href="#pricing">
            Project
          </Nav.Link>
          <Nav.Link className="nav-bar-link" href="#pricing">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavHeader;
