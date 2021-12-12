const axios = require("axios");

const { fromUnixTime, getDay } = require("date-fns");
const { getDayString } = require("../utils/date");

//importing utils
const {
  convertCoordinatesToCityName,
  convertCityNameToCoordinates,
} = require("../utils/geoLocation");

const WEATHER_API = `https://api.openweathermap.org/data/2.5/onecall`;

const resolvers = {
  Query: {
    getCityByCoordinates: async (obj, args, context, info) => {
      // name is required | country and config are optional
      const { lat, lon } = args;

      const cityName = await convertCoordinatesToCityName(lat, lon);

      let url = `${WEATHER_API}?lat=${lat}&lon=${lon}&units=metric&lang=de&limit=1&exclude=hourly,minutely&appid=${process.env.WEATHER_API_KEY}`;

      try {
        const { data } = await axios.get(url);

        return {
          name: cityName[0].name,
          current: {
            dt: data.current.dt,
            sunrise: data.current.sunrise,
            sunset: data.current.sunset,
            temp: data.current.temp,
            feels_like: data.current.feels_like,
            humidity: data.current.humidity,
            pressure: data.current.pressure,
            clouds: data.current.clouds,
            visibility: data.current.visibility,
            wind_speed: data.current.wind_speed,
            weather: {
              description: data.current.weather[0].description,
              icon: data.current.weather[0].icon,
            },
          },
          days: {
            day: data.daily.map((day) => {
              return {
                dayName: getDayString(getDay(fromUnixTime(day.dt))),
                temp: {
                  min: day.temp.min,
                  max: day.temp.max,
                },
                weather: {
                  description: day.weather[0].description,
                  icon: day.weather[0].icon,
                },
              };
            }),
          },
        };
      } catch (e) {
        return null;
      }
    },
    getCityByName: async (obj, args, context, info) => {
      console.log("fired");
      // name is required | country and config are optional
      const { name } = args;

      const coordinates = await convertCityNameToCoordinates(name);

      let lat = coordinates[0].lat;
      let lon = coordinates[0].lon;

      let url = `${WEATHER_API}?lat=${lat}&lon=${lon}&units=metric&lang=de&limit=1&exclude=alerts,hourly,minutely&appid=${process.env.WEATHER_API_KEY}`;

      try {
        const { data } = await axios.get(url);

        return {
          name: name,
          current: {
            dt: data.current.dt,
            sunrise: data.current.sunrise,
            sunset: data.current.sunset,
            temp: data.current.temp,
            feels_like: data.current.feels_like,
            humidity: data.current.humidity,
            pressure: data.current.pressure,
            clouds: data.current.clouds,
            visibility: data.current.visibility,
            wind_speed: data.current.wind_speed,
            weather: {
              description: data.current.weather[0].description,
              icon: data.current.weather[0].icon,
            },
          },
          days: {
            day: data.daily.map((day) => {
              return {
                dayName: getDayString(getDay(fromUnixTime(day.dt))),
                temp: {
                  min: day.temp.min,
                  max: day.temp.max,
                },
                weather: {
                  description: day.weather[0].description,
                  icon: day.weather[0].icon,
                },
              };
            }),
          },
        };
      } catch (e) {
        return null;
      }
    },
  },
};

module.exports = {
  resolvers,
};
