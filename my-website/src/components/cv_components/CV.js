
import { Text, Box, Flex, Spacer, Image, Grid, GridItem } from '@chakra-ui/react';
import CollectionContainer from './CollectionContainer.js';
import useWindowDimensions from '../../utils/Resize.js';
import Classes from "./Classes"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Projects from "./Projects"
import Souvenir2 from "./Souvenir-f"
import ListContainer from './ListContainer.js';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import classes from "../resume.module.css";


function growColumns(width) {
    const rounded_width = Math.ceil(width / 200);
    switch (rounded_width) {
        case 1:
            return 2;
        case 2:
            return 2;
        case 3:
            return 2;

        case 4:
            return 4;

        case 5:
            return 5;
        case 6:
            return 5;
        default:
            return 5;
    }
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal")

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

}

window.addEventListener("scroll", reveal);

export default function CV(props) {
    const { height, width } = useWindowDimensions();
    console.log(width);
    const num_columns = growColumns(width);


    // To check the scroll position on page load
    reveal();

    return (width > 975 ?
        <DragDropContext onDragEnd={props.onDragEnd}>
            <Box>
                <Flex>
                    <Box>
                        <Flex>

                            <Box>
                                <div /* className={classes.reveal} */>
                                    <CollectionContainer
                                        getItemStyle={props.getItemStyle}
                                        getListStyle={props.getListStyle}
                                        itemList={props.skills}
                                        droppableId="skills"
                                        col_target={num_columns}>
                                    </CollectionContainer>
                                </div>

                                <CollectionContainer
                                    getItemStyle={props.getItemStyle}
                                    getListStyle={props.getListStyle}
                                    itemList={props.languages}
                                    droppableId="languages"
                                    col_target={num_columns}
                                />
                                <ListContainer
                                    getItemStyle={props.getItemStyle}
                                    getListStyle={props.getListStyle}
                                    itemList={props.experiences}
                                    droppableId="experiences"
                                />
                                <CollectionContainer
                                    getItemStyle={props.getItemStyle}
                                    getListStyle={props.getListStyle}
                                    itemList={props.classes}
                                    droppableId="classes"
                                    col_target={Math.ceil(num_columns / 2)}>
                                </CollectionContainer>

                            </Box>
                            <ListContainer
                                getItemStyle={props.getItemStyle}
                                getListStyle={props.getListStyle}
                                itemList={props.projects}
                                droppableId="projects"
                            />

                        </Flex>

                    </Box>
                    <Souvenir2
                        getItemStyle={props.getItemStyle}
                        getListStyle={props.getListStyle}
                        itemList={props.souvenirs}
                        droppableId="souvenir"
                        handleReset={props.handleReset}></Souvenir2>
                </Flex>
            </Box>
        </DragDropContext>

        :

        <DragDropContext onDragEnd={props.onDragEnd}>


            <Box>
                <CollectionContainer
                    getItemStyle={props.getItemStyle}
                    getListStyle={props.getListStyle}
                    itemList={props.skills}
                    droppableId="skills"
                    col_target={num_columns}>
                </CollectionContainer>

                <CollectionContainer
                    getItemStyle={props.getItemStyle}
                    getListStyle={props.getListStyle}
                    itemList={props.languages}
                    droppableId="languages"
                    col_target={num_columns}
                />
                <ListContainer
                    getItemStyle={props.getItemStyle}
                    getListStyle={props.getListStyle}
                    itemList={props.experiences}
                    droppableId="experiences"
                />
                <CollectionContainer
                    getItemStyle={props.getItemStyle}
                    getListStyle={props.getListStyle}
                    itemList={props.classes}
                    droppableId="classes"
                    col_target={Math.ceil(num_columns / 2)}>
                </CollectionContainer>
                <CollectionContainer
                    getItemStyle={props.getItemStyle}
                    getListStyle={props.getListStyle}
                    itemList={props.projects}
                    droppableId="projects"
                    col_target={Math.ceil(num_columns / 2)}
                />
            </Box>


        </DragDropContext>

    )
}
