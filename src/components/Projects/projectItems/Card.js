import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioCard({
  card: { img, title, desc, demo, source, language_array },
}) {
  const [isLoading, setIsLoading] = useState(true);

  const thumbnail = {
    backgroundImage: `url(${img})`,
  };

  const LoadingAnimation = () => {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div className="overlay">
            <img
              src={img}
              onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
              onError={() => setIsLoading(false)}
              style={{ display: "none" }}
              alt={title}
            />
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  let array = language_array;
  return (
    <Card data-aos="flip-left">
      <div className="card-thumbnail" style={thumbnail}>
        <LoadingAnimation />
      </div>

      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div>
          {array.map((language) => (
            <p
              key={language}
              className="badge badge-light card-link"
              style={{
                backgroundColor: "#007bff",
                color: "#ffffff",
                padding: ".25em 0.3em",
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "0",
                marginRight: "0.5rem",
                marginBottom: "5px",
              }}
            >
              {language}
            </p>
          ))}
        </div>
        <div className="btn-grp">
          <Button href={demo} target="_blank">
            Live Demo
          </Button>
          <Button href={source} target="_blank" variant="secondary">
            Source Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
