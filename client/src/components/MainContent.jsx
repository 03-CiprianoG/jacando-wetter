import React from "react";

//importing components
import MainBox from "./MainBox";
import ChartBox from "./ChartBox";
import Loader from "./State-Logicless/Loader.jsx";
import ErrorBox from "./State-Logicless/ErrorBox";

const MainContent = (props) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {props.errorMsg.length !== 0 ? (
        <ErrorBox isDarkMode={props.isDarkMode} />
      ) : Object.keys(props.weatherData).length > 0 ? (
        <>
          <MainBox
            weatherData={props.weatherData}
            isDarkMode={props.isDarkMode}
          />
          <ChartBox
            weatherData={props.weatherData}
            isDarkMode={props.isDarkMode}
          />
        </>
      ) : (
        <Loader
          isDarkMode={props.isDarkMode}
          userGaveLocPerm={props.userGaveLocPerm}
          weatherData={props.weatherData}
        />
      )}
    </div>
  );
};

export default MainContent;
