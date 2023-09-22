import React from "react";
import classes from "../resume.module.css"
import Skills from "./Skills";
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Classes from "./Classes";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Languages from "./Languages";
import Souvenir from "./Souvenir";
import { Text, Box, Flex, Spacer } from '@chakra-ui/react';

function rowCount(items, col_count) {
    return Math.ceil(items.length / col_count)
}

class CollectionContainer extends React.Component {
    constructor(props) {
        super(props)
    };

    render_item = (content, type) => {
        if (type == "classes") {
            return <Classes
                name={content.name}
                grade={content.grade}
                abbreviated={false}>
            </Classes>
        } else if (type == "skills") {
            return <Skills name={content}></Skills>
        } else if (type == "experiences") {
            return <Experiences
                where={content.where}
                what={content.what}
                when={content.when}
                abbreviated={false}
            ></Experiences>
        } else if (type == "projects") {
            return <Projects
                content={content}
                what={content.what}
                details={content.details}
                link={content.link}
            ></Projects>
        } else if (type == "languages") {
            return <Languages
                name={content}></Languages>
        } else if (type == "souvenir") {
            return <Souvenir></Souvenir>
        }
    };


    returnItems = (col_count, items, provided, snapshot) => {
        var returned = []
        const row_count = rowCount(items, col_count);

        for (let i = 0; i < items.length; i += row_count) {
            var curr_items = items.slice(i, i + row_count)
            returned.push(
                <Box>
                    {curr_items.map((item, index) => (
                        <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index + i}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={this.props.getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                    )}>
                                    {this.render_item(item.content, item.type)}
                                </div>
                            )}
                        </Draggable>
                    ))}
                </Box>
            )
        }

        return returned

    }

    render() {

        return (

            <Droppable droppableId={this.props.droppableId} isDropDisabled={true}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={this.props.getListStyle(snapshot.isDraggingOver)}>
                        <Flex>
                            {this.returnItems(this.props.col_target, this.props.itemList, provided, snapshot)}
                        </Flex>
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

        )

    }
}



export default CollectionContainer;