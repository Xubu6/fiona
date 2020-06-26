import React, { useState } from "react";
import { Form, Message } from "semantic-ui-react";
import { RoughNotation } from "react-rough-notation";

import PhoneInput from "./PhoneInput";
import Location from "./Location";
import { FORM_COPY } from "../copy";

export default ({
  location,
  action,
  onFormChange,
  onLocationChange,
  error
}) => {
  const [locationConfirmed, setLocationConfirmed] = useState(
    location ? true : false
  );

  const { header, fields } = FORM_COPY;

  return (
    <>
      <div className="form-container">
        <div className="header-container" style={{ paddingLeft: "unset" }}>
          <div className="header" style={{ textAlign: "left" }}>
            <RoughNotation type="underline" show={true} color="#9370DB" animationDelay="500">{header}</RoughNotation>
          </div>
        </div>
        <Location
          location={location}
          onLocationChange={onLocationChange}
          onConfirmationChange={setLocationConfirmed}
        />
        {locationConfirmed && (
          <>
            <Form error={!!error}>
              <PhoneInput
                {...fields.phoneNumber}
                onChange={value =>
                  onFormChange(undefined, { name: "phoneNumber", value })
                }
                placeholder="Phone Number:"
              />
              <Form.TextArea
                {...fields.productName}
                name="productName"
                placeholder="Product Name:"
                onChange={onFormChange}
              />
              <Message error {...FORM_COPY.error} />
            </Form>
          </>
        )}
      </div>
      {locationConfirmed && action}
    </>
  );
};
