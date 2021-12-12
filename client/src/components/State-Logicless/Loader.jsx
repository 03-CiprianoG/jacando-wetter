import React from "react";

import { Flex, Image, Text } from "@chakra-ui/react";

import loader from "../../assets/img/loader_location_pin.gif";

const Loader = (props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      color={props.isDarkMode ? "white" : "gray.600"}
      w={320}
      margin="25px auto auto auto"
      shadow="lg"
      h="fit-content"
      rounded="xl"
      flexDirection="column"
      p={10}
    >
      <>
        <Image width="100px" src={loader} alt="" margin="auto" />
        <Text fontSize="md" margin="auto">
          Warten Sie...
        </Text>
      </>
    </Flex>
  );
};

export default Loader;
