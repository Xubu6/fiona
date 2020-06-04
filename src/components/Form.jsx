import React from "react";
import { Form } from "semantic-ui-react";

import PhoneInput from "./PhoneInput";
import Location from "./Location";

export default ({
  location,
  onActionClick,
  onFormChange,
  onLocationChange
}) => {
  return (
    <>
      <div className="form-container">
        <div className="header-container" style={{ paddingLeft: "unset" }}>
          <div className="header" style={{ textAlign: "left" }}>
            Just fill this out...
          </div>
        </div>
        <Location location={location} onLocationChange={onLocationChange} />
        <Form>
          <PhoneInput
            label="Phone number"
            onChange={value =>
              onFormChange(undefined, { name: "phoneNumber", value })
            }
            placeholder="Phone Number:"
          />
          <Form.TextArea
            label="Product Name"
            name="productName"
            placeholder="Product Name:"
            onChange={onFormChange}
          />
        </Form>
      </div>
    </>
  );
};
