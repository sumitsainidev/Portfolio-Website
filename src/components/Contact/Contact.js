import React from "react";
import { contact, socialMediaLinks } from "../../portfolio";
import "./Contact.css";
import { Button } from "react-bootstrap";
import emailjs from "emailjs-com";
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.init("user_8Y258fjhQFl5MV0fzn9xR");
    emailjs
      .sendForm(
        "service_g8h58jn",
        "template_y9t9vcg",
        e.target,
        "user_8Y258fjhQFl5MV0fzn9xR"
      )
      .then(
        (result) => {
          alert("Thank you for connecting.");
          e.target.reset();
        },
        (error) => {
          alert(
            "Some Error Occured. Please try again or Contact me on linkldn"
          );
        }
      );
  }

  return (
    <div id="Contact">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              Get In Touch
            </h1>
          </div>
        </>
        <div className="flex-container">
          <div className="half flex-item-left">
            <form onSubmit={sendEmail}>
              <input
                type="text"
                id="name"
                name="firstname"
                placeholder="Your name"
                required
              ></input>
              <input
                type="mail"
                id="mailid"
                name="email"
                placeholder="Email Address"
                required
              ></input>
              <input
                type="text"
                id="sub"
                name="subject"
                placeholder="Subject"
                required
              ></input>
              <textarea
                id="msg"
                className="mar10"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <Button
                className="btn btn-lg buttonBack"
                style={{ marginLeft: "10px" }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="half flex-item-right">
            <p className="lead" style={{ fontWeight: "400" }}>
              {contact.pitch}
            </p>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div
                className="inline-block"
                style={{ paddingTop: "5px", fontSize: "42px", display: "flex" }}
              >
                {socialMediaLinks.linkedin && (
                  <a
                    title="Visit Linkedin profile"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={socialMediaLinks.linkedin}
                    style={{ width: "50px" }}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {socialMediaLinks.github && (
                  <a
                    title="Visit Github profile"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={socialMediaLinks.github}
                    style={{ width: "50px" }}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                )}
                <br />
              </div>

              <a
                title="Download Resume"
                target="_blank"
                rel="noreferrer"
                href={socialMediaLinks.resume}
                style={{ paddingTop: "5px", fontSize: "42px", width: "50px" }}
                download
              >
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
        <p id="not-dark" className="Copy">
          2020 © Copyright <strong>{contact.copyright}</strong>. All Rights
          Reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
