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
import useWindowDimensions from '../utils/Resize.js';

function Welcome2(props) {
    const { height, width } = useWindowDimensions();

    return (width > 691 ?
        <div className={classes.bg}>
            <div className={classes.mainPage}>

                <Grid
                    w={"100%"}
                    h={"100%"}
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(10, 1fr)'
                    gap={4}
                >

                    <GridItem colSpan={5} rowSpan={6}>
                        <div class="animate__animated animate__fadeIn">
                            {<Image src={art4}></Image>}
                        </div>
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

                                <div className={classes.scroll_text}>
                                    <br></br>
                                    <br></br>
                                    I have always been a creator.
                                    <br></br>
                                    I am an illustrator,
                                    <br></br>
                                    a fashion designer,
                                    <br></br>
                                    a Dungeons and Dragons enthusiast...
                                    <br></br>
                                    <br></br>
                                    I create new stories and new worlds constantly.
                                    <br></br>
                                    <br></br>
                                    <div className={classes.spacer} />
                                    Studying computer science has only further expanded my ability to create, and with each new skill I learn I see this ability grow.

                                    <div className={classes.spacer} />
                                    I chose computer science because I wanted to find a skill I would love to explore beyond the classroom or work,
                                    <br></br>
                                    and find joy in truly mastering.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    Come along on my journey.

                                </div>
                                <div className={classes.spacer} />


                            </div>
                        </Box>

                    </GridItem>


                </Grid>
            </div>
        </div> :
        <div className={classes.bg}>
            <div className={classes.mainPage}>

                <Grid
                    w={"100%"}
                    h={"100%"}
                    templateRows='repeat(6, 1fr)'
                    templateColumns='repeat(10, 1fr)'
                    gap={4}
                >

                    <GridItem colSpan={4} rowSpan={2}>

                        {<Image src={art4}></Image>}

                    </GridItem>

                    <GridItem colSpan={6} rowSpan={2}>

                        <div className={classes.intro}>
                            <div class="animate__animated animate__fadeInDown">
                                <div style={{ fontSize: 40 }}>Welcome</div>
                                My name is Elise Carman
                                <br></br>
                                I am a software developer at Brown University
                            </div>
                        </div>



                    </GridItem>
                    <GridItem colSpan={1} rowSpan={4}></GridItem>
                    <GridItem colSpan={8} rowSpan={4}>
                        <Box >
                            <div className={classes.scroll_display}>
                                <div className={classes.shadow_display_small}></div>

                                <div className={classes.scroll_text}>
                                    <br></br>
                                    <br></br>
                                    I have always been a creator.
                                    <br></br>
                                    I am an illustrator,
                                    <br></br>
                                    a fashion designer,
                                    <br></br>
                                    a Dungeons and Dragons enthusiast...
                                    <br></br>
                                    <br></br>
                                    I create new stories and new worlds constantly.
                                    <br></br>
                                    <br></br>
                                    <div className={classes.spacer} />
                                    Studying computer science has only further expanded my ability to create, and with each new skill I learn I see this ability grow.

                                    <div className={classes.spacer} />
                                    I chose computer science because I wanted to find a skill I would love to explore beyond the classroom or work,
                                    <br></br>
                                    and find joy in truly mastering.
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    Come along on my journey.

                                </div>
                                <div className={classes.spacer} />


                            </div>
                        </Box>

                    </GridItem>
                    <GridItem colSpan={1} rowSpan={4}></GridItem>

                </Grid>
            </div>
        </div>


    );
}


export default Welcome2;