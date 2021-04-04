import React from "react";
import { contact, socialMediaLinks } from "../../portfolio";
import "./Contact.css";
import { Button } from "react-bootstrap";
const Contact = () => {
  return (
    <div className="">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              Get In Touch
            </h1>
          </div>
        </>
        <div className="">
          <div className="git-cont row">
            <div className=".col-md-offset-4 col-6 col-sm-6 half">
              <form
                action={
                  contact.contactUrl
                    ? contact.contactUrl
                    : "https://formspree.io"
                }
                method={contact.contactUrl ? "POST" : "GET"}
              >
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  required
                ></input>
                <input
                  type="mail"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  required
                ></input>
                <input
                  type="text"
                  id="sub"
                  name="Subject"
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
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className=".col-md-offset-4 col-6 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block" style={{ paddingTop: "48px" }}>
                  {socialMediaLinks.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={socialMediaLinks.linkedin}
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
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {socialMediaLinks.resume && (
                  <a title="Download Resume" href="www.google.com" download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        2020 © Copyright <strong>{contact.copyright}</strong>. All Rights
        Reserved
      </p>
    </div>
  );
};

export default Contact;
