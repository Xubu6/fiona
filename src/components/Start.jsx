import React from "react";
import { RoughNotation } from "react-rough-notation";
import YC from './YC';

import { START_COPY } from "../copy";

function Start({ action }) {
  const { header, subheader, description } = START_COPY;
  return (
    <>
      <div className="header-container">
        <div className="header">{header}</div>
        <RoughNotation className="subheader" type="highlight" show={true} color="#9370DB" animationDelay="500">{subheader}</RoughNotation>
      </div>
      <div className="description-container">
        <div className="description">{description}</div>
      </div>
      {action}
      <div className ="yc-container">
        <YC />
      </div>
    </>
  );
}

export default Start;
