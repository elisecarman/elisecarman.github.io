import React from "react";
import classes from "../components/general.module.css";
import { Text, Box, Flex, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { Draggable } from "react-beautiful-dnd";
import { Image } from '@chakra-ui/react';
import art1 from '../assets/artwork1.png';
import art3 from '../assets/artwork3.png';
import art4 from '../assets/artwork4.png';
import art5 from '../assets/artwork5.png';
import 'animate.css';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (

      <div className={classes.bg}>
        <div className={classes.mainPage}>

          <Grid
            w={"100%"}
            h={"100%"}
            templateRows='repeat(6, 1fr)'
            templateColumns='repeat(10, 1fr)'
            gap={4}
          >

            <GridItem colSpan={5} rowSpan={6} style={{pointerEvents: 'none'}}>

              {<Image src={art4}></Image>}

            </GridItem>

            <GridItem colSpan={5} rowSpan={6}>

              <div className={classes.intro}>
                <div class="animate__animated animate__fadeInDown">
                  <div style={{ fontSize: 40 }}>Welcome</div>
                  My name is Elise Carman
                  <br></br>
                  I am a software developer at Brown University
                </div>
              </div>

              <Box >
                <div className={classes.scroll_display}>

                  <div className={classes.shadow_display}></div>

                  {/* <div className={classes.scroll_text}>
                    <br></br>
                    <br></br>
                    I have always been a creator.
                    <br></br>
                    I am an illustrator,
                    <br></br>
                    a <a href="https://elisetienneco.wixsite.com/portfolio">fashion designer</a>,
                    <br></br>
                    a Dungeons and Dragons enthusiast...
                    <br></br>
                    <br></br>
                    I create new stories and new worlds constantly.
                    <br></br>
                    <br></br>
                    <div className={classes.spacer} />
                    Studying computer science has only further expanded my ability to create.
                    <div className={classes.spacer} />
                    I chose this field and this career because I wanted skills to hone beyond the classroom or work,
                    <br></br>
                    and find joy in truly mastering. 
                    <br></br>
                    <br></br>
                    <br></br>
                    Come along on this journey!

                  </div> */}
                  <div className={classes.spacer} />


                </div>
              </Box>

            </GridItem>


          </Grid>
        </div>
      </div>


    );
  }
}



export default Welcome;