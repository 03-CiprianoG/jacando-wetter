import React, { useState, useEffect } from "react";

//importing style file
import "./App.css";
import { styles } from "./assets/styles/chakraOverrides";

//importing libs
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

//importing utils
import { askForLocationPermission } from "./utils/fetch";

//importing components
import Navbar from "./components/State-Logicless/Navbar";
import MainContent from "./components/MainContent";
import Search from "./components/State-Logicless/Search";

function App() {
  //Apollo Client initialization
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  // theme related state
  const [isDarkMode, toogleIsDarkMode] = useState(false);

  // location related state
  const [weatherData, setWeatherData] = useState([]);
  const [userGaveLocPerm, setUserGaveLocPerm] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // if the user submit the input, then fetch weather data
  const handleSubmit = (cityName) => {
    console.log(typeof cityName);
    setWeatherData([]);
    setErrorMsg("");
    client
      .query({
        query: gql`
          query GetCityBYName {
            getCityByName(name: "${cityName}") {
              name
              current {
                dt
                sunrise
                sunset
                temp
                feels_like
                pressure
                humidity
                clouds
                visibility
                wind_speed
                weather {
                  description
                  icon
                }
              }
              days {
                day {
                  dayName
                  temp {
                    min
                    max
                  }
                  weather {
                    description
                    icon
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => setWeatherData(result.data.getCityByName))
      .catch((err) => setErrorMsg("Ort nicht gefunden"));
  };

  // theme related function
  function themeToggler() {
    toogleIsDarkMode(!isDarkMode);
  }

  //if the user has accepted, then fetch the weather data
  const userAccepted = (position) => {
    setUserGaveLocPerm(true);
    const { latitude, longitude } = position.coords;
    client
      .query({
        query: gql`
        query GetCityBYCoordinates {
          getCityByCoordinates(lat:${latitude}, lon:${longitude}) {
            name
            current {
             temp
             weather {
               description
               icon
             }
             sunrise
             sunset
             wind_speed
             humidity
             pressure
           }
           days {
             day {
               dayName
               temp {
                 min
                 max
               }
               weather {
                 description
                 icon
               }
             }
           }
        }
      }
        `,
      })
      .then((result) => setWeatherData(result.data.getCityByCoordinates));
  };

  //if the user has denied, then take note and wait for the user to give an input
  const userDenied = () => {
    setUserGaveLocPerm(false);
  };

  // This app will automatically ask for location permission on every render
  // if the user agrees, it will automatically fetch the weather data and provide it to the entire app.
  useEffect(() => {
    askForLocationPermission(userAccepted, userDenied);
  }, []);

  return (
    <div
      className="App"
      style={{
        background: isDarkMode ? styles.colors.mygray[100] : "#fff",
        width: "100%",
        height: "100%",
        paddingTop: "120px",
      }}
    >
      <ChakraProvider>
        <Navbar themeToggler={() => themeToggler()} isDarkMode={isDarkMode} />
        <Search
          isDarkMode={isDarkMode}
          handleSubmit={(cityName) => handleSubmit(cityName)}
        />
        <MainContent
          weatherData={weatherData}
          isDarkMode={isDarkMode}
          userGaveLocPerm={userGaveLocPerm}
          errorMsg={errorMsg}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;
