import React, { useState, useEffect } from "react";

import { Form, Button } from "semantic-ui-react";

export default ({ location, onLocationChange }) => {
  const [mode, setMode] = useState(
    location && location.formattedAddress ? "read" : "write"
  );

  useEffect(() => {
    if (location && location.formattedAddress) setMode("read");
  }, [location]);

  if (mode === "read")
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block", margin: "auto 1em" }}>
          <b>{location.formattedAddress}</b>
        </div>
        <Button
          compact
          onClick={() => setMode("write")}
          content="Edit"
          color="blue"
        />
      </div>
    );

  if (mode === "write" || !location)
    return (
      <div style={{ textAlign: "left" }}>
        <Form>
          <Form.Input
            name="addressLine1"
            label="Address Line 1"
            onChange={onLocationChange}
            value={location ? location.addressLine1 : ""}
          />
          <Form.Input
            name="addressLine2"
            label="Address Line 2"
            onChange={onLocationChange}
            value={location ? location.addressLine2 : ""}
          />
          <Form.Group widths="equal">
            <Form.Input
              name="city"
              label="City"
              onChange={onLocationChange}
              value={location ? location.city : ""}
            />
            <Form.Input
              name="state"
              label="State"
              onChange={onLocationChange}
              value={location ? location.state : ""}
            />
            <Form.Input
              name="country"
              label="Country"
              onChange={onLocationChange}
              value={location ? location.country : ""}
            />
            <Form.Input
              name="postalCode"
              label="Postal code"
              onChange={onLocationChange}
              value={location ? location.postalCode : ""}
            />
          </Form.Group>
        </Form>
      </div>
    );
};
