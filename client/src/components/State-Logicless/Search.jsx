import React, { useState } from "react";

import { Flex, Input, Button } from "@chakra-ui/react";
import { SearchIcon, AddIcon, CloseIcon } from "@chakra-ui/icons";
import { styles } from "../../assets/styles/chakraOverrides";

const Search = (props) => {
  const [cityName, setCityName] = useState("");

  return (
    <div>
      <Flex
        width={280}
        margin={
          window.innerWidth < 550
            ? "auto auto auto auto"
            : "auto auto auto 25px"
        }
        alignItems="center"
      >
        <SearchIcon color={props.isDarkMode ? "white" : "black"} />
        <Input
          marginRight={5}
          marginLeft={5}
          placeholder="Suchen"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          role="searchbox"
          aria-label="Search"
          color={props.isDarkMode ? "white" : "black"}
        />
        <Button
          onClick={() => props.handleSubmit(cityName)}
          disabled={cityName.length > 0 ? false : true}
        >
          {cityName.length > 0 ? (
            <AddIcon color={styles.colors.blue[100]} />
          ) : (
            <CloseIcon color={styles.colors.blue[100]} />
          )}
        </Button>
      </Flex>
    </div>
  );
};

export default Search;
