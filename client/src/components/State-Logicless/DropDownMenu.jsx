import React from "react";

//importing components
import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuDivider,
  MenuList,
  MenuItem,
} from "@chakra-ui/menu";

import { Button } from "@chakra-ui/react";

import { styles } from "../../assets/styles/chakraOverrides";

//importing icons
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const DropdDownMenu = (props) => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} boxShadow="md">
          <HamburgerIcon color={styles.colors.blue[100]} />
        </MenuButton>
        <MenuList
          bg={props.isDarkMode ? "gray.600" : "white"}
          color={props.isDarkMode ? "white" : "gray.600"}
        >
          <MenuGroup title="About me">
            <MenuItem _hover={{ bg: styles.colors.blue[100] }}>
              <ExternalLinkIcon marginEnd="5px" />
              <a
                href="https://www.linkedin.com/in/giuseppe-cipriano-59a18a1b5/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </MenuItem>
            <MenuItem _hover={{ bg: styles.colors.blue[100] }}>
              <ExternalLinkIcon marginEnd="5px" />
              <a
                href="https://github.com/03-CiprianoG"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="About the app">
            <MenuItem _hover={{ bg: styles.colors.blue[100] }}>
              <ExternalLinkIcon marginEnd="5px" />
              <a
                href="https://github.com/03-CiprianoG/jacando-wetter"
                rel="noreferrer"
                target="_blank"
              >
                Docs
              </a>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropdDownMenu;
