import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"footer-text"}>
          <i class="fas fa-code"></i>
          {" with ❤️ by Sumit Saini using "}
          <i class="fab fa-react"></i>
        </p>
      </div>
    </Fade>
  );
}
