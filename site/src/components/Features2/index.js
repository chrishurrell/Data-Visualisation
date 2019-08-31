import React from "react";
import "./styles.scss";

function Features2(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div className={`Features2__feature has-text-${props.align}-desktop`}>
          <div className={`Features2__icon icon has-text-${item.iconColor}`}>
            <i className={`${item.iconClass}`} />
          </div>
          <h3 className="Features2__title title has-text-weight-bold is-spaced is-5">
            {item.title}
          </h3>
          <p className="subtitle is-6 has-text-grey">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Features2;
