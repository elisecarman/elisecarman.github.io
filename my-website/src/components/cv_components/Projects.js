import React from "react";
import classes from "../resume.module.css"
import { Box, HStack, Spacer } from '@chakra-ui/react';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      this.props.abbreviated ?
        <div className={classes.projects_abbr} >
          <Box>
            
            <div className={classes.pro_what}>
           
              {this.props.what}
            </div>
           
            <div className={classes.lil_dash_projects}>
              <div className={classes.pro_details}>
                {this.props.details}
              </div>
            </div>
          </Box>
        </div>
        : ((this.props.link !== undefined)?
        <>
          {/* <a position='absolute' href={this.props.link} > </a> */}
          <div className={classes.projects2}>
            <Box onClick={() => {
              window.open(this.props.link, "_blank");
              }}>
              
              <div className={classes.pro_what}>
                {this.props.what}
              </div>
                <HStack>
              <Spacer/>
              <div>
                click me!
              </div>
                </HStack>
              
              <div className={classes.lil_dash_projects}>
                <div className={classes.pro_details}>
                  {this.props.details}
                </div>
              </div>
              <HStack>
                <div className={classes.pro_footer}>
                  {this.props.content.language}
                </div>
                <Spacer/>
                <div className={classes.pro_footer} style={{minWidth:"80px"}}>
                    {this.props.content.team}
                </div>
              </HStack>
            </Box>
          </div>
        </>
        :
        <div className={classes.projects}>
          <Box >
            <div className={classes.pro_what}>
              {this.props.what}
            </div>
            <div className={classes.lil_dash_projects}>
              <div className={classes.pro_details}>
                {this.props.details}
              </div>
            </div>
            <HStack>
              <div className={classes.pro_footer}>
                {this.props.content.language}
              </div>
              <Spacer />
              <div className={classes.pro_footer} style={{ minWidth: "80px" }}>
                {this.props.content.team}
              </div>
            </HStack>
          </Box>
        </div>)
    );
  }
}


export default Projects;
