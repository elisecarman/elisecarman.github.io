import React from "react";
import classes from "../resume.module.css"
import sclasses from "../souvenir.module.css"
import { Text, Box, Flex, Spacer, Button, ButtonGroup, HStack } from '@chakra-ui/react';
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
            content={content}
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
    const report = new JsPDF('portrait', 'px', 'a4');
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

    const stringList = (list) => {
        let result = list[0].content
        for (let i = 1; i < list.length; i ++){
            let add = ", " + list[i].content
            result += add
        }
        return result
    }

    return (width < 1200 ? <div></div> :
        <div>


            <div className={classes.souvenir}>
                <Box >
                    <div className={classes.so_name}> Elise Carman </div>
                    <Flex>
                        <Box>
                            <div className={classes.so_grade} style={{fontStyle: "italic", marginBottom: '20px'}}>Brown University</div>
                            <div className={classes.so_grade}>Expected Graduation: December 2023 </div>
                        </Box>
                        <Spacer></Spacer>
                    </Flex>
                    {/* change */}
                    <div className={classes.so_gpa}> GPA: 3.86</div>


                    {/* <textarea id="notes" name="textarea" className={classes.so_comment} placeholder={"Type in your thoughts"}>
                    </textarea> */}

                    <HStack marginTop={'30px'}>
                        <Spacer/>
                        <div className={classes.buttons}
                            // onClick={props.handleReset}
                            >
                            <Button
                                borderColor="#e6e6e6"
                                borderStyle="dotted"
                                borderWidth="2px"
                                colorScheme='gray'
                                variant='outline'
                                fontSize={"15"}
                                onClick={props.handleReset}
                                _hover={{
                                    bg: "#3b3b3b"
                                }}
                                _active={{
                                    bg: "#3b3b3b"
                                }}
                                transition="0.3s"
                            >
                                Reset
                            </Button>

                        </div>
                        <Spacer/>
                        <div className={classes.buttons}
                        >
                            <Button
                                borderColor="#e6e6e6"
                                borderStyle="dotted"
                                borderWidth="2px"
                                colorScheme='gray'
                                variant='outline'
                                fontSize={"15"}
                                onClick={generatePDF}
                                /*  {() => generatePDF(Svn)} */
                                _hover={{
                                    bg: "#3b3b3b"
                                }}
                                _active={{
                                    bg: "#3b3b3b"
                                }}
                                transition="0.3s"
                                rightIcon={<ArrowUpIcon />}
                                >

                                Export
                            </Button>
                        </div>
                        <Spacer />
                    </HStack>


                    <div className={classes.so_drop}>
                        <Droppable droppableId={props.droppableId}>
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={props.getListStyle(snapshot.isDraggingOver)}>
                                    {props.itemList.length == 0 ? <div className={classes.isEmpty}>Drop takeaways here!</div> :
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
            <div className={sclasses.bg} style={{ visibility: "hidden" }}>
                <div id="report" className={sclasses.report}>
                    <div className={sclasses.margin} style={{maxWidth: '380px'}}>
                        <div style={{width:'380px'}}></div>
                        <div style={{display: 'flex'}}>
                        <h1 style={{fontSize: '25px', marginBottom: '5px'}}> <b> Elise Carman</b> </h1>
                            <h1 align="right" style={{ fontSize: '20px', marginTop:'8px', marginLeft: '38x' }}> <b><i> resume takeaways</i></b> </h1>
                        </div>
                        <div><h1>Sc.B. Computer Science at Brown University</h1></div>
                        <div> Expected Graduation: December 2023</div>
                        <div> GPA: 3.86</div>
                        <div>{getNotes().value}</div>
                        {(sortedSvn["skills"].length != 0 || sortedSvn["languages"].length != 0) ?
                            
                            
                            <div class={sclasses.parent}>
                                {sortedSvn["languages"].length == 0 ?
                                    <div></div>
                                    : 
                                    <div>
                                        <h2 style={{ fontSize: '13px', marginBottom: '5px'}}><b>Languages</b></h2>
                                        <h3>
                                        {stringList(sortedSvn["languages"])}
                                        </h3>
                                    </div>}
                                <div style={{height: '10px'}}></div>
                                {sortedSvn["skills"].length == 0 ?
                                    <div></div>
                                    :
                                    <div>
                                        <h2 style={{ fontSize: '13px', marginBottom: '5px' }}><b>Skills</b></h2>
                                        <h3>
                                            {stringList(sortedSvn["skills"])}
                                        </h3>
                                    </div>}

                            </div>
                            :
                            <div />}

                        <br></br>
                        {sortedSvn["classes"].length == 0 ?
                            <div></div>
                            : <div > <h2 align="center" style={{fontSize: '12px'}}><b> Classes of Interest</b></h2>
                                <br></br>
                                    
                                <ul>{sortedSvn["classes"].map((item, index) => (<li index={index}>{item.content.name}<br></br></li>))}</ul></div>}

                        <br></br>
                        {sortedSvn["projects"].length == 0 ?
                            <div></div>
                            : <div ><h2 align="center" style={{ fontSize: '12px' }}> <b>Projects of Interest</b></h2>
                                <br></br>
                                <ul>{sortedSvn["projects"].map((item, index) => (<li index={index}><i>{item.content.what}</i>
                                    <br></br>
                                    {item.content.details}
                                    <br></br>
                                    </li>))}
                                    </ul>
                            </div>}

                        <br></br>
                        {sortedSvn["experiences"].length == 0 ?
                            <div></div>
                            : <div > <h2 align="center" style={{ fontSize: '12px' }}><b>Experiences of Interest</b></h2>
                                <br></br>
                                <ul>{sortedSvn["experiences"].map((item, index) => (<li index={index}>{item.content.where}<br></br></li>))}</ul></div>}

                    </div>
                </div>
            </div>
            
        </div >

    );
}

export default Souvernir2;