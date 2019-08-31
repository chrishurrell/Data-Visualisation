import React from "react";
import Section from "./../Section";
import Features3 from "./../Features3";
import "./styles.scss";

function FeaturesSection3(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column">
            <figure className="FeaturesSection3__image image">
              <img src={props.image} alt="Illustration" />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column is-5-desktop">
            <Features3
              items={[
                {
                  title: "Chat",
                  description:
                    "Imagine a world where you can chat with your friends without having to see their dumb faces.",
                  iconClass: "fas fa-comments",
                  iconColor: "primary"
                },
                {
                  title: "Play",
                  description:
                    "We embedded a bunch free flash games inside our app. What we lack in quality we make up in quantity.",
                  iconClass: "fas fa-gamepad",
                  iconColor: "danger"
                },
                {
                  title: "Cats",
                  description:
                    "Our market research told us people like cats so we put some cat icons on our website.",
                  iconClass: "fas fa-cat",
                  iconColor: "info"
                }
              ]}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection3;
