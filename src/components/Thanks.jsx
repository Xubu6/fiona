import React from "react";

import { THANKS_COPY } from "../copy";
import YC from './YC';

export default ({ action }) => {
  const { header, subheader, description } = THANKS_COPY;
  return (
    <>
      <div className="header-container">
        <div className="header">{header}</div>
        <div className="subheader">{subheader}</div>
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
