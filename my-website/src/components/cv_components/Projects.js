import React from "react";
import classes from "../resume.module.css"
import { Box } from '@chakra-ui/react';

class Projects extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      this.props.abbreviated ?
        <div className={classes.projects_abbr}>
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
        :
        <div className={classes.projects}>
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

    );
  }
}


export default Projects;
