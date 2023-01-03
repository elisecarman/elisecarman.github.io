import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';
import useWindowDimensions from '../../utils/Resize.js';

function Experiences(props) {
  const { height, width } = useWindowDimensions();


  return (

    <div className={classes.experiences}>

      <div className={classes.exp_where}>
        {props.where}
      </div>
      <div className={classes.lil_dash} />

      <div className={classes.exp_when}>
        {props.when}
      </div>


    </div>


  );

}


export default Experiences;
