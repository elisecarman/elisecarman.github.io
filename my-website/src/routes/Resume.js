import classes from "../components/resume.module.css"
import general from "../components/general.module.css"
import React from "react";

import Classes from "../components/cv_components/Classes"
import Skills from "../components/cv_components/Skills"
import Experiences from "../components/cv_components/Experiences"
import Projects from "../components/cv_components/Projects"
import Souvenir from "../components/cv_components/Souvenir"
import Souvenir2 from "../components/cv_components/Souvenir-f"
import ListContainer from "../components/cv_components/ListContainer"
import CollectionContainer from "../components/cv_components/CollectionContainer"

import { Row, Col, Container } from "react-bootstrap";
import { Text, Box, Flex, Spacer, Image, Grid, GridItem } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import art5 from '../assets/artwork5.png'
import 'animate.css';
import SouvernirSmall from "../components/cv_components/SouvenirSmall";
import CV from "../components/cv_components/CV";
import Legend from "../components/cv_components/Legend";
import Intro from "../components/cv_components/Intro";

const grid = 8;

class Resume extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            classes: [
                { type: "classes", id: "0", content: { name: "Operating Systems", grade: "A" } },
                { type: "classes", id: "1", content: { name: "Deep Learning", grade: "A" } },
                { type: "classes", id: "2", content: { name: "Cybersecurity and International Relations", grade: "A" } },
                { type: "classes", id: "3", content: { name: "Computer Systems", grade: "A" } },
                { type: "classes", id: "4", content: { name: "Blockchain Cryptocurrency", grade: "B" } },
                { type: "classes", id: "5", content: { name: "Compilers and Program Analysis", grade: "A" } },
                { type: "classes", id: "6", content: { name: "Embedded Software", grade: "A" } },
                { type: "classes", id: "7", content: { name: "Software Security and Exploitation", grade: "A" } }
            ],

            skills: [
                { type: "skills", id: "80", content: "React" },
                { type: "skills", id: "90", content: "SpringBoot" },
                { type: "skills", id: "100", content: "NodeJS" },
                { type: "skills", id: "130", content: "NumPy" },
                { type: "skills", id: "140", content: "TensorFlow" },
                { type: "skills", id: "150", content: "Git" },
                { type: "skills", id: "160", content: "Docker" },
                { type: "skills", id: "170", content: "Kubernetes" },
                { type: "skills", id: "180", content: "Jenkins" },
                { type: "skills", id: "100", content: "Splunk" },
                { type: "skills", id: "210", content: "Agile Workflow" },
                { type: "skills", id: "220", content: "Atlassian Suite" },

            ],

            languages: [
                { type: "languages", id: "230", content: "JavaScript" },
                { type: "languages", id: "240", content: "HTML" },
                { type: "languages", id: "250", content: "CSS" },
                { type: "languages", id: "260", content: "Scala" },
                { type: "languages", id: "270", content: "C" },
                { type: "languages", id: "280", content: "C#" },
                { type: "languages", id: "290", content: "C++" },
                { type: "languages", id: "300", content: "Go Lang" },
                { type: "languages", id: "310", content: "Swift" },
                { type: "languages", id: "320", content: "Solidity" },
                { type: "languages", id: "330", content: "Python" },
                { type: "languages", id: "340", content: "Java" },
                { type: "languages", id: "350", content: "OCaml" },
                { type: "languages", id: "360", content: "ASM" },
                
            ],


            experiences: [
                {
                    type: "experiences", id: "390", content: {
                        where: "Anaplan: Software Engineer Intern", when: "(June-August 2022)", what:
                            ["Learned industry standards for CI/CD and gained familiarity with Docker, Kubernetes, Jenkins, Tilt, Splunk, Postman",
                                "Worked within a full stack team following Agile workflow and Scrum Sprints",
                                "Contributed on tickets involving e2e testing with Cucumber and Puppeteer, as well as front end contributions",
                                "Facilitated the adoption of New Relic within my team for synthetic monitoring"]
                    }
                },

                { type: "experiences", id: "400", content: { where: "Anthem AI: Software Engineer Intern", when: "(February-April 2022)", what: ["Created a prototype for the UI of a medical information display tool using React, gaining familiarity with Electron Forge, CSS, JavaScript, HTML and TypeScript"] } },

                {
                    type: "experiences", id: "410", content: {
                        where: "Anthem AI: Software Engineer Intern", when: "(June-August 2021)",
                        what: ["Created a V0 prototype for the UI of a medical information display tool using XCode and Swift",
                            "Tested UX hypothesis and reported to a design leader, gaining familiarity with Avocode and Zeplin",
                            "Gained knowledge of Jira and Confluence software"]
                    }
                }
            ],

            projects: [
                { 
                    type: "projects", id: "470", content: { 
                        language: "JavaScript, HTML, CSS",
                        team: "solo project",
                        what: "Snark", 
                        details: "a multiplayer online game built with React, Node and Express ",
                        link: "snarkgame-b763b1c1250f.herokuapp.com" 
                    } 
                },

                { 
                    type: "projects", id: "510", content: {
                        language: "C",
                        team: "class project",
                        what: "Weenix", 
                        details: "An operating sytsem with processes and threads scheduling, device drivers, terminal emulation, a file system, a polymorphic file system support, and a virtual memory ",
                        link: "https://github.com/brown-cs1690/handout/wiki/Weenix-Operating-System"
                        }
                },
                {
                    type: "projects", id: "500", content: {
                        language: "JavaScript, HTML, CSS",
                        team: "solo project",
                        what: "Atlas Swings", 
                        details: "a Unity Game, winner of the 2022 NYC Game Jam by Geopipe",
                        link: "https://itch.io/jam/new-york-new-york/results"
                    }
                },
                { 
                    type: "projects", id: "490", content: { 
                        language: "C#",
                        team: "club project",
                        what: "Augustine at Home", 
                        details: "a stealth Unity Game",
                        link: "https://brownrisdgames.itch.io/augustine-at-home" 
                    } 
                },

                {
                    type: "projects", id: "450", content: {
                        language: "C",
                        team: "class project",
                        what: "Shell", 
                        details: "An implementation of a shell interface with ln, cd and rm functionality, file redirection, signal handling and multi process functionality"
                    }
                },
                { 
                    type: "projects", id: "460", content: { 
                        language: "Python",
                        team: "class project",
                        what: "Variable Autoencoder on MNIST", 
                        details: "A Generative Adversarial Network generating new written numbers",
                        link: "https://hackmd.io/@BrownDeepLearningS23/hw6p" 
                    } 
                },
                { 
                    type: "projects", id: "430", content: { 
                        language: "Go Lang",
                        team: "class project",
                        what: "BrunoCoin", 
                        details: "a non-optimized basic cryptocurrency- in class project ",
                        link: "https://github.com/elisecarman/BrunoCoinStencil" 
                    } 
                },
                // { 
                //     type: "projects", id: "420", content: { 
                //         language: "Java",
                //         team: "class project",
                //         what: "Recommender", 
                //         details: "a prediction algorithm trained on a collected dataset " 
                //     } 
                // },
                // { 
                //     type: "projects", id: "440", content: { 
                //         language: "Scala",
                //         team: "class project",
                //         what: "Search", 
                //         details: " an algorithm to index and query through a large database of information " 
                //     } 
                // },
                // { type: "projects", id: "480", content: { what: "Embedded Dress", details: "an embedded garment which lights up brighter with crowd interaction" } },
                
                
            ],
            souvenir: [],
            selected: []

        }
    };

    getList = id => this.state[id];

    reorder = (list, startIndex, endIndex) => {

        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = this.reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = this.state
            state[source.droppableId] = items

            this.setState(state);
        } else {
            const result = this.move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            let state = this.state
            state[source.droppableId] = result[source.droppableId]
            state[destination.droppableId] = result[destination.droppableId]

            this.setState({ state });
        }
    }


    getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: grid * 0.5,
        margin: `0 0 1px 0`,

        // change background colour if dragging
        background: isDragging ? 'transparent' : 'tranparent',

        // styles we need to apply on draggables
        ...draggableStyle
    });

    getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'transparent' : 'transparent',
        /*  padding: grid, */
        width: "100%"
    });

    handleReset = () => {

        this.setState({
            classes: [
                { type: "classes", id: "0", content: { name: "Operating Systems", grade: "A" } },
                { type: "classes", id: "1", content: { name: "Deep Learning", grade: "A" } },
                { type: "classes", id: "2", content: { name: "Cybersecurity and International Relations", grade: "A" } },
                { type: "classes", id: "3", content: { name: "Computer Systems", grade: "A" } },
                { type: "classes", id: "4", content: { name: "Blockchain Cryptocurrency", grade: "B" } },
                { type: "classes", id: "5", content: { name: "Compilers and Program Analysis", grade: "A" } },
                { type: "classes", id: "6", content: { name: "Embedded Software", grade: "A" } },
                { type: "classes", id: "7", content: { name: "Software Security and Exploitation", grade: "A" } }
            ],

            skills: [
                { type: "skills", id: "80", content: "React" },
                { type: "skills", id: "90", content: "SpringBoot" },
                { type: "skills", id: "100", content: "NodeJS" },
                { type: "skills", id: "130", content: "NumPy" },
                { type: "skills", id: "140", content: "TensorFlow" },
                { type: "skills", id: "150", content: "Git" },
                { type: "skills", id: "160", content: "Docker" },
                { type: "skills", id: "170", content: "Kubernetes" },
                { type: "skills", id: "180", content: "Jenkins" },
                { type: "skills", id: "100", content: "Splunk" },
                { type: "skills", id: "210", content: "Agile Workflow" },
                { type: "skills", id: "220", content: "Atlassian Suite" },

            ],

            languages: [
                { type: "languages", id: "230", content: "JavaScript" },
                { type: "languages", id: "240", content: "HTML" },
                { type: "languages", id: "250", content: "CSS" },
                { type: "languages", id: "260", content: "Scala" },
                { type: "languages", id: "270", content: "C" },
                { type: "languages", id: "280", content: "C#" },
                { type: "languages", id: "290", content: "C++" },
                { type: "languages", id: "300", content: "Go Lang" },
                { type: "languages", id: "310", content: "Swift" },
                { type: "languages", id: "320", content: "Solidity" },
                { type: "languages", id: "330", content: "Python" },
                { type: "languages", id: "340", content: "Java" },
                { type: "languages", id: "350", content: "OCaml" },
                { type: "languages", id: "360", content: "ASM" },

            ],


            experiences: [
                {
                    type: "experiences", id: "390", content: {
                        where: "Anaplan: Software Engineer Intern", when: "(June-August 2022)", what:
                            ["Learned industry standards for CI/CD and gained familiarity with Docker, Kubernetes, Jenkins, Tilt, Splunk, Postman",
                                "Worked within a full stack team following Agile workflow and Scrum Sprints",
                                "Contributed on tickets involving e2e testing with Cucumber and Puppeteer, as well as front end contributions",
                                "Facilitated the adoption of New Relic within my team for synthetic monitoring"]
                    }
                },

                { type: "experiences", id: "400", content: { where: "Anthem AI: Software Engineer Intern", when: "(February-April 2022)", what: ["Created a prototype for the UI of a medical information display tool using React, gaining familiarity with Electron Forge, CSS, JavaScript, HTML and TypeScript"] } },

                {
                    type: "experiences", id: "410", content: {
                        where: "Anthem AI: Software Engineer Intern", when: "(June-August 2021)",
                        what: ["Created a V0 prototype for the UI of a medical information display tool using XCode and Swift",
                            "Tested UX hypothesis and reported to a design leader, gaining familiarity with Avocode and Zeplin",
                            "Gained knowledge of Jira and Confluence software"]
                    }
                }
            ],

            projects: [
                {
                    type: "projects", id: "470", content: {
                        language: "JavaScript, HTML, CSS",
                        team: "solo project",
                        what: "Snark",
                        details: "a multiplayer online game built with React, Node and Express ",
                        link: "snarkgame-b763b1c1250f.herokuapp.com"
                    }
                },

                {
                    type: "projects", id: "510", content: {
                        language: "C",
                        team: "class project",
                        what: "Weenix",
                        details: "An operating sytsem with processes and threads scheduling, device drivers, terminal emulation, a file system, a polymorphic file system support, and a virtual memory ",
                        link: "https://github.com/brown-cs1690/handout/wiki/Weenix-Operating-System"
                    }
                },
                {
                    type: "projects", id: "500", content: {
                        language: "JavaScript, HTML, CSS",
                        team: "solo project",
                        what: "Atlas Swings",
                        details: "a Unity Game, winner of the 2022 NYC Game Jam by Geopipe",
                        link: "https://itch.io/jam/new-york-new-york/results"
                    }
                },
                {
                    type: "projects", id: "490", content: {
                        language: "C#",
                        team: "club project",
                        what: "Augustine at Home",
                        details: "a stealth Unity Game",
                        link: "https://brownrisdgames.itch.io/augustine-at-home"
                    }
                },

                {
                    type: "projects", id: "450", content: {
                        language: "C",
                        team: "class project",
                        what: "Shell",
                        details: "An implementation of a shell interface with ln, cd and rm functionality, file redirection, signal handling and multi process functionality"
                    }
                },
                {
                    type: "projects", id: "460", content: {
                        language: "Python",
                        team: "class project",
                        what: "Variable Autoencoder on MNIST",
                        details: "A Generative Adversarial Network generating new written numbers",
                        link: "https://hackmd.io/@BrownDeepLearningS23/hw6p"
                    }
                },
                {
                    type: "projects", id: "430", content: {
                        language: "Go Lang",
                        team: "class project",
                        what: "BrunoCoin",
                        details: "a non-optimized basic cryptocurrency- in class project ",
                        link: "https://github.com/elisecarman/BrunoCoinStencil"
                    }
                },
                // {
                //     type: "projects", id: "420", content: {
                //         language: "Java",
                //         team: "class project",
                //         what: "Recommender",
                //         details: "a prediction algorithm trained on a collected dataset "
                //     }
                // },
                // {
                //     type: "projects", id: "440", content: {
                //         language: "Scala",
                //         team: "class project",
                //         what: "Search",
                //         details: " an algorithm to index and query through a large database of information "
                //     }
                // },
                // { type: "projects", id: "480", content: { what: "Embedded Dress", details: "an embedded garment which lights up brighter with crowd interaction" } },


            ],
            souvenir: [],
            selected: []

        })
    }

    render() {


        return (
            <div className={general.bg}>
                <div className={general.mainPage2}>


                    <div>
                        <Grid

                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(8, 1fr)'
                            gap={4}
                        >

                            <GridItem colSpan={1} rowSpan={1} />
                            <GridItem colSpan={7} rowSpan={1}>
                                <Intro />
                            </GridItem>

                            <GridItem colSpan={1} rowSpan={1} />

                            <GridItem colSpan={6} rowSpan={1}>
                                <Legend />
                            </GridItem>


                            <GridItem colSpan={1} rowSpan={1}>

                            </GridItem>
                        </Grid>
                    </div>
                    <div>
                        <Grid


                            templateRows='repeat(1, 1fr)'
                            templateColumns='repeat(8, 1fr)'
                            gap={4}
                        >
                            <GridItem colSpan={1} rowSpan={1} />
                            <GridItem colSpan={6} rowSpan={1}>

                                <CV
                                    getItemStyle={this.getItemStyle}
                                    getListStyle={this.getListStyle}
                                    skills={this.state.skills}
                                    languages={this.state.languages}
                                    experiences={this.state.experiences}
                                    classes={this.state.classes}
                                    projects={this.state.projects}
                                    souvenirs={this.state.souvenir}
                                    handleReset={this.handleReset}
                                    onDragEnd={this.onDragEnd}
                                >

                                </CV>


                            </GridItem>
                            <GridItem colSpan={1} rowSpan={1} />
                        </Grid>
                    </div>
                    <div style={{ height: "300px" }}></div>
                </div>
            </div>
        );
    }
}



export default Resume;
