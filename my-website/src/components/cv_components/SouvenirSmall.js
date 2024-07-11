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
                    <div className={classes.so_name}> Elise Carman </div>
                    <Flex>
                        <Box>
                            <div className={classes.so_grade} style={{ fontStyle: "italic", marginBottom: '0px' }}>✿ Master's degree in AI </div>
                            <div className={classes.so_grade} style={{ marginBottom: '-3px' }}>Brown University </div>
                            <div className={classes.so_grade} style={{ marginBottom: '20px' }}>Expected Graduation: May 2025 </div>
                            <div className={classes.so_grade} style={{ fontStyle: "italic", marginBottom: '0px' }}>✿ Bachelor's degree in Computer Science </div>
                            <div className={classes.so_grade} style={{ marginBottom: '-3px' }}>Brown University </div>
                            <div className={classes.so_gpa}> Undergraduate GPA: 3.9</div>
                            
                            
                            {/* <div className={classes.so_grade} style={{fontStyle: 'italic', marginBottom: '20px'}}>Master's and Bachelor's degrees at Brown University</div>
                            <div className={classes.so_grade}>Expected Master's Graduation: May 2025 </div> 
                            <div className={classes.so_gpa}> Undegraduate GPA: 3.9</div> */}

                           
                        </Box>
                        <Spacer></Spacer>
                    </Flex>
                </Box>

            </div>

        </div>
        :
        <div></div>
    );
}

export default SouvernirSmall;