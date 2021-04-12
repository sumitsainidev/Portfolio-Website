import React, { useEffect } from "react";
import Section from "./projectItems/Section";
import Card from "./projectItems/Card";
import { useState } from "react";
import { connect } from "react-redux";
import "./Projects.scss";

const Projects = ({ portfolios }) => {
  const [count, setCount] = useState(8);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(portfolios.slice(0, count));
  }, [count, portfolios]);

  return (
    <div id="Project" className="education-container">
      <div className="education-section">
        <Section id="portfolio">
          <h1 className="education-heading">Projects</h1>
          <div className="cards">
            {items &&
              items.map((card, index) => <Card card={card} key={index} />)}
          </div>

          <div className="d-flex justify-content-center">
            {count < portfolios.length && (
              <div
                className="btn btn-primary mt-5 btn-lg"
                style={{
                  color: "#fff",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                }}
                onClick={() => setCount(count + 4)}
              >
                See more
              </div>
            )}
          </div>
        </Section>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  const portfolios = store.portfolios;
  return { portfolios };
};

export default connect(mapStateToProps)(Projects);
