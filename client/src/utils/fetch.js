const fetchURL = async (url, method, body) => {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
};

const getWeatherDataFromUserCurrentLocation = (lat, lon) => {
  let body = {
    latitude: lat,
    longitude: lon,
  };

  return fetchURL(process.env.REACT_APP_GRAPHQL_ENDPOINT, "GET", body)
    .then((response) => {
      return response;
    })
    .catch((err) => err);
};

const askForLocationPermission = (success, error) => {
  console.log("askForLocationPermission");
  navigator.geolocation.getCurrentPosition(success, error);
};

export {
  fetchURL,
  askForLocationPermission,
  getWeatherDataFromUserCurrentLocation,
};
