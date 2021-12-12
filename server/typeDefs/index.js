const { gql } = require("apollo-server");

const typeDefs = gql`
  type WeatherData {
    name: String
    current: Current
    days: Days
  }

  type Days {
    day: [Day]
  }

  type Day {
    dayName: String
    temp: Temp
    weather: Weather
  }

  type Temp {
    min: Float
    max: Float
  }

  type Weather {
    description: String
    icon: String
  }

  type Current {
    dt: Int
    sunrise: Int
    sunset: Int
    temp: Float
    feels_like: Float
    pressure: Int
    humidity: Int
    clouds: Int
    visibility: Int
    wind_speed: Float
    weather: Weather
  }

  type Query {
    getCityByCoordinates(lat: Float!, lon: Float!): WeatherData
    getCityByName(name: String!): WeatherData
  }
`;

module.exports = {
  typeDefs,
};
