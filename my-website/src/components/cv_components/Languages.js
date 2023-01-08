import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';

class Languages extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      this.props.abbreviated ?
        <Text fontSize={{ base: '11px', md: '13px', lg: '15px' }}>
          <div className={classes.languages_abbr}>
            {this.props.name}
          </div>
        </Text>

        :

        <Text fontSize={{ base: '11px', md: '13px', lg: '15px' }}>
          <div className={classes.languages}>
            {this.props.name}
          </div>
        </Text>
    );
  }
}


export default Languages;