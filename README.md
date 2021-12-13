<h3 fontSize="22px" align="center">Assignment by Jacando AG</h3>

## Live on:

<a href='https://jacando-wetter.netlify.app/' rel='noreferrer' target='_blank'>App</a> | <a href='https://jacando-wetter.herokuapp.com/' rel='noreferrer' target='_blank'>GraphQL Endpoint</a>

</br>

# Languages and Tools:

<p align="center" gap="10px"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40"/> </a> <a href="https://chakra-ui.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logo-colored@2x.png?raw=true" alt="chakra" width="160" height="40"/> </a> </p>

</br>

# Features:

<p>Some of the features are required by the assignment</p>

### ✅ Responsive

### ✅ Dark Theme

### ✅ GraphQL API

### ✅ Localization

### ✅ Shows weather data

</br>

# Description:

The App will ask for location and if the location permission is granted, it will automatically fetch the weather data of the user's current location. <br/>
Otherwise the user can manually enter any location.

### It shows:

<br/>

# GraphQL API:

**Only the required fields are defined here, you can define any field you want and retrieve even more data**

## Types:

- `WeatherData`: Data returned from query
  - `Current`: Current weather data
    - `Temp`: Min and Max temperature of a day
    - `Weather`: Weather description and icon
  - `Days`: Array of weather data of the next 7 days
    - `Day`: Weather data of a single day of the next 7 days
- `Query`: Queries

## Queries:

- `getCityByCoordinates`: Returns the weather data of the given coordinates
- `getCityByName`: Returns the weather data of the given city name

</br>

# Client:

- Components are built on top of the [Chakra UI](https://chakra-ui.com/) framework.
- The state is managed by passing down props to the components.
- The data is fetched from the API with the help of the [Apollo Client](https://www.apollographql.com/docs/react/).

## Components:

- `MainBox`: shows:

  - Current weather description (ie. sunny)
  - Current temperature
  - Today's high temperature
  - Today's low temperature
  - Weather icon
  - Wind Speed
  - Humidity
  - Pressure
  - Sunrise/Sunset Time

- `ChartBox`: shows:
  - Multiline chart of the next 7 days with the following data:
    - High temperature
    - Low temperature
    - Day of the week

</br>

# Getting Started with Create React App:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
