import { useState, useEffect } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY);

const useGeolocation = () => {
  const [position, setPosition] = useState({});
  const [geolocation, setGeolocation] = useState(null);
  const [error, setError] = useState(null);

  const addressObjFromComponents = ({
    address_components,
    formatted_address
  }) => {
    const streetNumber = address_components[0].short_name;
    const streetName = address_components[1].short_name;
    const city = address_components[3].short_name;
    const state = address_components[5].short_name;
    const country = address_components[6].long_name;
    const postalCode = address_components[7].short_name;

    return {
      addressLine1: `${streetNumber} ${streetName}`,
      addressLine2: "",
      city,
      state,
      country,
      postalCode,
      formattedAddress: formatted_address
    };
  };

  const onPositionChange = ({ coords: { latitude, longitude } }) => {
    setPosition({ latitude, longitude });
    Geocode.fromLatLng(latitude, longitude).then(
      ({ results }) => {
        setGeolocation(addressObjFromComponents(results[0]));
      },
      error => {
        console.error(error);
        setError(error);
      }
    );
  };
  const onPositionError = ({ message }) => setError(message);

  const getPositionEffect = () => {
    const getPosition = async () => {
      const geo = navigator.geolocation;
      if (!geo) {
        setError("Geolocation not supported");
        return;
      }

      await geo.getCurrentPosition(onPositionChange, onPositionError, {
        enableHighAccuracy: true,
        timeout: 5000
      });
    };

    getPosition();
    return () => {};
  };

  useEffect(getPositionEffect, []);

  return { position, geolocation, error };
};

export default useGeolocation;
