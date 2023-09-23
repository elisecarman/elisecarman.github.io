import React from "react";
import classes from "../resume.module.css"
import { Text, Box, Flex, Spacer, Button, ButtonGroup } from '@chakra-ui/react';
import ListContainer from "./ListContainer";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Classes from "./Classes";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Languages from "./Languages";
import Skills from "./Skills";
import JsPDF from 'jspdf';
import { CloseIcon, ArrowUpIcon } from '@chakra-ui/icons';
import useWindowDimensions from '../../utils/Resize.js';

function SouvernirSmall() {
    const { height, width } = useWindowDimensions();
    return (width < 1200 ?

        <div id="report">
            <div className={classes.souvenir}>
                <Box >
                    <div className={classes.so_name}>  Carman </div>
                    <Flex>
                        <Box>
                            <div className={classes.so_grade} style={{fontStyle: 'italic', marginBottom: '20px'}}>Brown University</div>
                            <div className={classes.so_grade}>Expected Graduation: December 2023 </div>
                        </Box>
                        <Spacer></Spacer>
                    </Flex>
                    {/* change */}
                    <div className={classes.so_gpa}> GPA: 3.86</div>


                </Box>

            </div>

        </div>
        :
        <div></div>
    );
}

export default SouvernirSmall;