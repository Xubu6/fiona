import React from "react";

import { START_COPY } from "../copy";

function Start({ action }) {
  const { header, subheader, description } = START_COPY;
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
    </>
  );
}

export default Start;
