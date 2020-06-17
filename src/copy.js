export const START_COPY = {
  header: "Need something now?",
  subheader: "Ask Fiona.",
  description:
    "Fiona searches local stores for the item you need, so you can have it the same day."
};

export const FORM_COPY = {
  header: "Just fill this out...",
  fields: {
    phoneNumber: {
      label: "Phone Number",
      placeholder: "Phone number:"
    },
    productName: {
      label: "Product Name",
      placeholder: "Product Name:"
    }
  },
  error: {
    header: "😵 Oops!",
    content:
      "There was an error processing your request, please try again soon."
  }
};

export const LOCATION_COPY = {
  fields: {
    addressLine1: {
      label: "Address Line 1",
      placeholder: "123 Fairy Tale Lane",
      error: { content: "Please fill out this field.", pointing: "above" }
    },
    addressLine2: {
      label: "Address Line 2",
      placeholder: "Apt 1A"
    },
    city: {
      label: "City",
      placeholder: "Duloc",
      error: { content: "Please fill out this field.", pointing: "above" }
    },
    state: {
      label: "State/Province",
      error: { content: "Please fill out this field.", pointing: "above" }
    },
    country: {
      label: "Country",
      error: { content: "Please fill out this field.", pointing: "above" }
    },
    postalCode: {
      label: "Postal Code",
      placeholder: "12345",
      error: { content: "Please fill out this field.", pointing: "above" }
    }
  },
  editButton: "Not quite right?",
  confirmButton: "Confirm"
};

export const THANKS_COPY = {
  header: "Thanks for your request!",
  subheader: "Keep an eye out for a text from Fiona.",
  description: "We'll start searching local stores near you for your product."
};
