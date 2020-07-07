import React from "react";
import { RoughNotation } from "react-rough-notation";

import { THANKS_COPY } from "../copy";
import YC from './YC';

export default ({ action }) => {
  const { header, subheader, description } = THANKS_COPY;
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
};
