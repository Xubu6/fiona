import React, { useState } from "react";

import { Form, Button } from "semantic-ui-react";

import { LOCATION_COPY } from "../copy";

export default ({ location, onLocationChange, onConfirmationChange }) => {
  const [mode, setMode] = useState(location ? "read" : "write");

  const formatAddress = () => {
    return `${location.addressLine1}${
      location.addressLine2 ? ` ${location.addressLine2},` : ","
    } ${location.city}, ${location.state} ${location.postalCode}, ${
      location.country
    }`;
  };

  const { fields, editButton, confirmButton } = LOCATION_COPY;

  let disabled = false;

  const renderError = field => {
    if (location && location[field] === "") {
      disabled = true;
      return fields[field].error;
    }
  };

  if (mode === "read")
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", margin: "auto 1em" }}>
          <b>{formatAddress()}</b>
        </div>
        <Button
          compact
          style={{ margin: "10px 0 " }}
          onClick={() => {
            setMode("write");
            onConfirmationChange(false);
          }}
          content={editButton}
          color="blue"
        />
      </div>
    );

  if (mode === "write" || !location)
    return (
      <div style={{ textAlign: "left" }}>
        <Form
          onSubmit={() => {
            setMode("read");
            onConfirmationChange(true);
          }}
        >
          <Form.Input
            {...fields.addressLine1}
            name="addressLine1"
            onChange={onLocationChange}
            error={renderError("addressLine1")}
            value={location ? location.addressLine1 : ""}
          />
          <Form.Input
            {...fields.addressLine2}
            name="addressLine2"
            onChange={onLocationChange}
            value={location ? location.addressLine2 : ""}
          />
          <Form.Group widths="equal">
            <Form.Input
              {...fields.city}
              name="city"
              onChange={onLocationChange}
              error={renderError("city")}
              value={location ? location.city : ""}
            />
            <Form.Input
              {...fields.state}
              name="state"
              onChange={onLocationChange}
              error={renderError("state")}
              value={location ? location.state : ""}
            />
            <Form.Input
              {...fields.country}
              name="country"
              onChange={onLocationChange}
              error={renderError("country")}
              value={location ? location.country : ""}
            />
            <Form.Input
              {...fields.postalCode}
              name="postalCode"
              onChange={onLocationChange}
              error={renderError("postalCode")}
              value={location ? location.postalCode : ""}
            />
          </Form.Group>
          <div style={{ textAlign: "right" }}>
            <Form.Button 
              disabled={disabled}
              content={confirmButton} positive 
            />
          </div>
        </Form>
      </div>
    );
};
