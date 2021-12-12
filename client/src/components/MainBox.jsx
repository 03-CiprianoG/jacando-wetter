import React, { useState } from "react";

//importing components
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";

import { ArrowDownIcon } from "@chakra-ui/icons";

const MainBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        color={props.isDarkMode ? "white" : "black"}
        w="90%"
        maxWidth={600}
        margin="25px auto auto auto"
        shadow="lg"
        h="fit-content"
        rounded="xl"
        p={10}
        flexDirection="column"
        animation="1s ease-in-out"
      >
        <Box textAlign="center">
          <Text fontSize="4xl" fontWeight="400">
            {props.weatherData.name}
          </Text>
          <Text fontSize="6xl" fontWeight="300" marginTop={-3}>
            {Math.round(props.weatherData.current.temp) + "°"}
          </Text>
          <Text fontSize="l" fontWeight="200">
            {props.weatherData.current.weather.description}
          </Text>
          <Text fontSize="14px">
            MAX: {Math.floor(props.weatherData.days.day[1].temp.max)}° {""}
            MIN: {Math.floor(props.weatherData.days.day[1].temp.min)}°
          </Text>
          <Image
            src={`http://openweathermap.org/img/wn/${props.weatherData.current.weather.icon}@2x.png`}
            margin="auto"
          />
          <Button
            onClick={() => setIsOpen(!isOpen)}
            background="none"
            border="none"
            _hover={{ background: "none", transform: "translateY(8px)" }}
            _active={{ background: "none" }}
            _focus={{ border: "none" }}
          >
            <ArrowDownIcon />
          </Button>
        </Box>
        {isOpen && (
          <Flex flexDirection="row" justifyContent="space-around" width="100%">
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              shadow="md"
              p={2}
              rounded="lg"
              color={props.isDarkMode ? "white" : "gray.600"}
            >
              <Text>Windge.:</Text>
              <Text>
                {props.weatherData.current.wind_speed}
                Km/h
              </Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              shadow="md"
              p={2}
              rounded="lg"
              color={props.isDarkMode ? "white" : "gray.600"}
            >
              <Text>Luftfe.</Text>
              <Text>{props.weatherData.current.humidity}%</Text>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              shadow="md"
              p={2}
              rounded="lg"
              color={props.isDarkMode ? "white" : "gray.600"}
            >
              <Text>Luftdr</Text>
              <Text>{props.weatherData.current.pressure}hPa</Text>
            </Box>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default MainBox;
