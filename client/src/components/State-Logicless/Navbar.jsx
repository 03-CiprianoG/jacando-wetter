import React, { useContext } from "react";

import { Flex, Button, Image } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import DropDownMenu from "./DropDownMenu";
import jacando_wetter_logo from "../../assets/img/jacando_wetter_logo.svg";
import jacando_wetter_logo_white from "../../assets/img/jacando_wetter_logo white.svg";

import { styles } from "../../assets/styles/chakraOverrides";

const Navbar = (props) => {
  return (
    <div>
      <Flex
        position="fixed"
        zIndex="1000"
        top="0"
        as="nav"
        align="center"
        justify="space-evenly"
        bg={props.isDarkMode ? "gray.600" : "white"}
        color={props.isDarkMode ? "white" : "gray.600"}
        wrap="wrap"
        w="100%"
        mb={5}
        p={6}
        boxShadow="lg"
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
      >
        <DropDownMenu isDarkMode={props.isDarkMode} />
        {props.isDarkMode ? (
          <Image src={jacando_wetter_logo_white} width="80px" />
        ) : (
          <Image src={jacando_wetter_logo} width="80px" />
        )}

        <Button onClick={props.themeToggler} boxShadow="md">
          {props.isDarkMode ? (
            <SunIcon color={styles.colors.blue[100]} />
          ) : (
            <MoonIcon />
          )}
        </Button>
      </Flex>
    </div>
  );
};

export default Navbar;
