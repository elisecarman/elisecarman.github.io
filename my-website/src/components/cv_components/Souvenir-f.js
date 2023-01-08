import React from "react";
import classes from "../resume.module.css"
import sclasses from "../souvenir.module.css"
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
import { render } from "@testing-library/react";
import { useState, useEffect } from 'react';
import Report from "./Report";
import ReactDOMServer from 'react-dom/server';

function render_item(content, type) {
    if (type == "classes") {
        return <Classes
            name={content.name}
            grade={content.grade}
            abbreviated={true}>
        </Classes>

    } else if (type == "skills") {
        return <Skills name={content}
            abbreviated={true}>
        </Skills>
    } else if (type == "experiences") {
        return <Experiences
            where={content.where}
            what={content.what}
            when={content.when}
            abbreviated={true}
        ></Experiences>
    } else if (type == "projects") {
        return <Projects
            what={content.what}
            details={content.details}
            abbreviated={true}
        ></Projects>
    } else if (type == "languages") {
        return <Languages
            name={content}
            abbreviated={true}></Languages>
    }
};

function generatePDF() {

    var fake = {
        "classes": [],
        "skills": [],
        "languages": [],
        "experiences": [],
        "projects": []

    };

    var element = document.getElementById("report");/* 
    var element2 = ReactDOMServer.renderToString(<Report sortedSvn={fake}></Report>); 
    var element2 = ReactDOMServer.renderToStaticMarkup(<Report sortedSvn={fake}></Report>);*/
    const report = new JsPDF('portrait', 'pt', 'legal');
    report.html(element).then(() => {
        report.save('report.pdf');
    });
}

function getNotes() {
    var element = document.getElementById("notes");

    return (<div> {element} </div>)

}

function sortSouvenirs(souvenirs) {

    var classes = []
    var skills = []
    var languages = []
    var experiences = []
    var projects = []


    for (var i = 0; i < souvenirs.length; i++) {


        switch (souvenirs[i].type) {
            case "classes":

                classes.push(souvenirs[i]);
                break;
            case "skills":

                skills.push(souvenirs[i]);
                break;
            case "languages":

                languages.push(souvenirs[i]);
                break;
            case "experiences":

                experiences.push(souvenirs[i]);
                break;
            case "projects":

                projects.push(souvenirs[i]);
                break;
            default:
                break;
        }


    }

    const sortedSvn = {
        classes: classes,
        skills: skills,
        languages: languages,
        experiences: experiences,
        projects: projects

    }

    return (sortedSvn);
}


function Souvernir2(props) {

    const [Svn, setSvn] = useState({});
    var sortedSvn = sortSouvenirs(props.itemList);
    /* setSvn(sortSouvenirs(props.itemList)); */
    const { height, width } = useWindowDimensions();
    console.log(document.getElementById('notes'));

    return (width < 1200 ? <div></div> :
        <div>


            <div className={classes.souvenir}>
                <Box >
                    <div className={classes.so_name}> Elise Carman </div>
                    <Flex>
                        <Box>
                            <div className={classes.so_grade}>Brown University</div>
                            <div className={classes.so_grade}>expected graduation: December 2023 </div>
                        </Box>
                        <Spacer></Spacer>
                        <div className={classes.so_gpa}> GPA: 3.84</div>
                    </Flex>

                    {/* <textarea id="notes" name="textarea" className={classes.so_comment} placeholder={"Type in your thoughts"}>
                    </textarea> */}

                    <Flex>
                        <div className={classes.buttons}
                            onClick={props.handleReset}>
                            <Button
                                borderColor="#f08080"
                                borderStyle="dotted"
                                borderWidth="2px"
                                colorScheme='gray'
                                variant='outline'
                                fontSize={"15"}
                                marginLeft={"5"}
                                onClick={props.handleReset}
                                _hover={{
                                    bg: "#571915"
                                }}
                                _active={{
                                    bg: "#571915"
                                }}
                                transition="0.3s"
                            >
                                Reset
                            </Button>

                        </div>
                        <div className={classes.buttons}>
                            <Button
                                borderColor="#f08080"
                                borderStyle="dotted"
                                borderWidth="2px"
                                colorScheme='gray'
                                variant='outline'
                                fontSize={"15"}
                                marginLeft={"5"}
                                onClick={generatePDF}
                                /*  {() => generatePDF(Svn)} */
                                _hover={{
                                    bg: "#571915"
                                }}
                                _active={{
                                    bg: "#571915"
                                }}
                                transition="0.3s"
                                rightIcon={<ArrowUpIcon />}>

                                Export
                            </Button>
                        </div>

                    </Flex>


                    <div className={classes.so_drop}>
                        <Droppable droppableId={props.droppableId}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={props.getListStyle(snapshot.isDraggingOver)}>
                                    {props.itemList.length == 0 ? <div className={classes.isEmpty}>Drop souvenirs here!</div> :
                                        props.itemList.map((item, index) => (
                                            <Draggable
                                                key={item.id}
                                                draggableId={item.id}
                                                index={index}
                                                renderClone={false}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={props.getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style
                                                        )}>
                                                        {render_item(item.content, item.type)}
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>


                    </div>


                </Box>

            </div>

            {sortedSvn["projects"].length < 8 ?
                <div className={sclasses.bg} style={{ visibility: "hidden" }}>

                    <div id="report" className={sclasses.report} style={{ width: "145%" }}>
                        <div className={sclasses.margin}>
                            <h1 align="center"> <b> Elise Carman</b> </h1>
                            <div align="center"> Expected Graduation: December 2023</div>
                            <div align="center"> GPA: 3.84</div>
                            <div align="center">{getNotes().value}</div>
                            {(sortedSvn["skills"].length != 0 || sortedSvn["languages"].length != 0) ?
                                <div align="center" class={sclasses.parent}>
                                    {sortedSvn["languages"].length == 0 ?
                                        <div></div>
                                        : <div class={sclasses.child}>
                                            <h2 align="center">Languages </h2>
                                            <ul>{sortedSvn["languages"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul>
                                        </div>}

                                    {sortedSvn["skills"].length == 0 ?
                                        <div></div>
                                        : <div class={sclasses.child}> <h2 align="center">Skills</h2>
                                            <ul>{sortedSvn["skills"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul></div>}

                                </div>
                                :
                                <div />}

                            <br></br>
                            {sortedSvn["classes"].length == 0 ?
                                <div></div>
                                : <div > <h2 align="center"> Classes of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["classes"].map((item, index) => (<li index={index}>{item.content.name}</li>))}</ul></div>}

                            <br></br>
                            {sortedSvn["projects"].length == 0 ?
                                <div></div>
                                : <div ><h2 align="center"> Projects of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["projects"].map((item, index) => (<li index={index}><b>{item.content.what}</b>
                                        <br></br>
                                        {item.content.details}</li>))}</ul>
                                </div>}

                            <br></br>
                            {sortedSvn["experiences"].length == 0 ?
                                <div></div>
                                : <div > <h2 align="center">Experiences of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["experiences"].map((item, index) => (<li index={index}>{item.content.where}</li>))}</ul></div>}



                        </div>
                    </div>
                </div>
                :
                <div className={sclasses.bg} style={{ visibility: "hidden" }}>

                    <div id="report" className={sclasses.report} style={{ width: "100%" }}>
                        <div className={sclasses.margin}>
                            <h1 align="center"> <b> Elise Carman</b> </h1>
                            <div align="center"> Expected Graduation: December 2023</div>
                            <div align="center"> GPA: 3.84</div>
                            <div align="center" class={sclasses.parent}>
                                {sortedSvn["languages"].length == 0 ?
                                    <div></div>
                                    : <div class={sclasses.child}>
                                        <h2 align="center">Languages </h2>
                                        <ul>{sortedSvn["languages"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul>
                                    </div>}

                                {sortedSvn["skills"].length == 0 ?
                                    <div></div>
                                    : <div class={sclasses.child}> <h2 align="center">Skills</h2>
                                        <ul>{sortedSvn["skills"].map((item, index) => (<li index={index}>{item.content}</li>))}</ul></div>}

                            </div>

                            <br></br>
                            {sortedSvn["classes"].length == 0 ?
                                <div></div>
                                : <div > <h2 align="center"> Classes of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["classes"].map((item, index) => (<li index={index}>{item.content.name}</li>))}</ul></div>}

                            <br></br>
                            {sortedSvn["projects"].length == 0 ?
                                <div></div>
                                : <div ><h2 align="center"> Projects of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["projects"].map((item, index) => (<li index={index}><b>{item.content.what}</b>
                                        <br></br>
                                        {item.content.details}</li>))}</ul>
                                </div>}

                            <br></br>
                            {sortedSvn["experiences"].length == 0 ?
                                <div></div>
                                : <div > <h2 align="center">Experiences of Interest</h2>
                                    <br></br>
                                    <ul>{sortedSvn["experiences"].map((item, index) => (<li index={index}>{item.content.where}</li>))}</ul></div>}



                        </div>
                    </div>
                </div>
            }
        </div >

    );
}

export default Souvernir2;