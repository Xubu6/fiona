import React, { useState, useEffect } from "react";
import { Container, Button, Icon } from "semantic-ui-react";

import Logo from "./components/Logo";

import Start from "./components/Start";
import Form from "./components/Form";
import Thanks from "./components/Thanks";

import useGeolocation from "./lib/hooks/useGeolocation";

import "./App.css";

function App() {
  const { geolocation } = useGeolocation();
  const [appState, setAppState] = useState("start");
  const [location, setLocation] = useState(geolocation);

  useEffect(() => {
    setLocation(geolocation);
  }, [geolocation]);

  const [{ phoneNumber, productName }, setFormState] = useState({
    phoneNumber: "",
    productName: ""
  });

  const handleStartAction = () => {
    setAppState("form");
  };
  const handleFormAction = () => setAppState("thanks");
  const handleBackAction = () => setAppState("start");

  const handleFormChange = (_, { name, value }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handleLocationChange = (_, { name, value }) =>
    setLocation(prev => ({ ...prev, [name]: value }));

  const ActionButton = () => {
    const Action = props => (
      <Button content="Request" color="violet" size="massive" {...props} />
    );
    if (appState === "start")
      return <Action content="Request" onClick={handleStartAction} />;
    if (appState === "form")
      return <Action content="Submit" onClick={handleFormAction} />;
    return <Action content="Back" onClick={handleBackAction} />;
  };

  return (
    <div className="App">
      <Container>
        {appState !== "form" && <Logo />}
        {appState === "start" && <Start onActionClick={handleStartAction} />}
        {appState === "form" && (
          <div style={{ textAlign: "left" }}>
            <Icon
              name="arrow left"
              size="huge"
              link
              onClick={handleBackAction}
            />
            <Form
              location={location}
              onActionClick={handleFormAction}
              onLocationChange={handleLocationChange}
              onFormChange={handleFormChange}
            />
          </div>
        )}
        {appState === "thanks" && <Thanks onActionClick={handleBackAction} />}
        <div className="action">
          <ActionButton />
        </div>
      </Container>
    </div>
  );
}

export default App;
