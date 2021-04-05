import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavHeader.css";
export class NavHeader extends Component {
  render() {
    return (
      <Navbar className="nav-bar mediaSettings" expand="lg" variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link className="nav-bar-link p-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#features">
              About
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#pricing">
              Experience
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#pricing">
              Project
            </Nav.Link>
            <Nav.Link className="nav-bar-link p-2" href="#pricing">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavHeader;
