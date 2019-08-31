import React from "react";
import "./styles.scss";

function Features3(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div className="Features3__columns columns is-vcentered is-variable is-4">
          <div className="column is-narrow">
            <div className={`Features3__icon icon has-text-${item.iconColor}`}>
              <i className={`${item.iconClass}`} />
            </div>
          </div>
          <div className="column">
            <h3 className="Features3__title title has-text-weight-bold is-spaced is-5">
              {item.title}
            </h3>
            <p className="subtitle is-6 has-text-grey">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features3;
