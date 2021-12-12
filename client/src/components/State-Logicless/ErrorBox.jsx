import React from "react";

import globe from "../../assets/img/globe.gif";

import { Image, Text, Flex } from "@chakra-ui/react";

const ErrorBox = (props) => {
  return (
    <>
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
          <Image width="100px" src={globe} alt="" margin="auto" />
          <Text fontSize="md" margin="auto">
            Diesen Ort wurde nicht gefunden
          </Text>
        </>
      </Flex>
    </>
  );
};

export default ErrorBox;
