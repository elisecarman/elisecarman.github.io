import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';

class Experiences extends React.Component {
    constructor(props) {
      super(props)
        };
      
  
    render() {
        console.log(this.props.abbreviated)
      return (
      
        <div className={classes.experiences}>
            <Box >
                
                    <div className={classes.exp_where}>
                    {this.props.where} 
                    </div>
                    <div className={classes.lil_dash}/>
                    
                    <div className={classes.exp_when}>
                    {this.props.when}
                    </div>
                    
              
          </Box>
      </div>
    
      );
    }
}
  

export default Experiences;
