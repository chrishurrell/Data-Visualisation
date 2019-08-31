import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function CtaSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      backgroundImageOpacity={0.8}
    >
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile is-centered is-variable is-8">
          <div className="column is-narrow">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
            />
          </div>
          <div className="column is-narrow">
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
