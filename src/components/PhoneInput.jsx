import React from "react";
import { Form } from "semantic-ui-react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default props => (
  <Form.Input defaultCountry="US" control={PhoneInput} {...props} />
);
