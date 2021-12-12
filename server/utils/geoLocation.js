const fetch = require("node-fetch");

let directGeoCodingBaseUrl = `http://api.openweathermap.org/geo/1.0/direct`;

const convertCityNameToCoordinates = (cityName) => {
  return fetch(
    `${directGeoCodingBaseUrl}?q=${cityName}&limit=1&appid=${process.env.GEOCODING_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    return response.json();
  });
};

let reverseGeoCodingBaseUr = `http://api.openweathermap.org/geo/1.0/reverse`;

const convertCoordinatesToCityName = (lat, lon) => {
  return fetch(
    `${reverseGeoCodingBaseUr}?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.GEOCODING_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => {
    return response.json();
  });
};

module.exports = { convertCityNameToCoordinates, convertCoordinatesToCityName };
