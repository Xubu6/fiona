import React, { useState, useEffect } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { Helmet } from 'react-helmet'
import HttpsRedirect from 'react-https-redirect';

import Logo from "./components/Logo";
import YC from "./components/YC";

import Start from "./components/Start";
import Form from "./components/Form";
import Thanks from "./components/Thanks";

import useGeolocation from "./lib/hooks/useGeolocation";

import "./App.css";

const TITLE = 'Fiona';

const ActionButton = props => (
  <div className="action">
    <Button color="violet" size="massive" {...props} />
  </div>
);

function App() {
  const { geolocation } = useGeolocation();
  const [appState, setAppState] = useState("start");
  const [location, setLocation] = useState(geolocation);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLocation(geolocation);
  }, [geolocation]);

  const [{ phoneNumber, productName }, setFormState] = useState({
    phoneNumber: undefined,
    productName: undefined
  });

  const formatAddress = () => {
    return `${location.addressLine1}${
      location.addressLine2 ? ` ${location.addressLine2},` : ","
    } ${location.city}, ${location.state} ${location.postalCode}, ${
      location.country
    }`;
  };

  const handleStartAction = () => {
    setAppState("form");
  };

  const handleFormAction = () => {
    fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        body: `📢New Fiona Request!📢\n\n🏡 Address: ${formatAddress()}\n\n📱Phone: ${phoneNumber}\n\n🛍 Product: ${productName}`
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) setAppState("thanks");
        else {
          console.log(data.error);
          setError(data.error);
        }
      })
  };

  const handleBackAction = () => setAppState("start");

  const handleFormChange = (_, { name, value }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handleLocationChange = (_, { name, value }) =>
    setLocation(prev => ({ ...prev, [name]: value }));

  let disabled = typeof phoneNumber === "undefined" || typeof productName === "undefined" || productName.trim() === "";

  return (
    <HttpsRedirect>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="App">
        <Container>
          {appState !== "form" && <YC />}
          {appState !== "form" && <Logo />}
          {appState === "start" && (
            <Start
              action={
                <ActionButton content="Request" onClick={handleStartAction} />
              }
            />
          )}
          {appState === "form" && (
            <div>
              <div style={{ textAlign: "left" }}>
                <Icon
                  name="arrow left"
                  size="huge"
                  link
                  onClick={handleBackAction}
                />
              </div>
              <Form
                location={location}
                error={error}
                action={
                  <ActionButton
                    disabled={disabled}
                    content="Submit" onClick={handleFormAction} 
                  />
                }
                onLocationChange={handleLocationChange}
                onFormChange={handleFormChange}
              />
            </div>
          )}
          {appState === "thanks" && (
            <Thanks
              onActionClick={handleBackAction}
              action={<ActionButton content="Back" onClick={handleBackAction} />}
            />
          )}
        </Container>
      </div>
    </HttpsRedirect>
  );
}

export default App;
