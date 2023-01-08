import classes from "../resume.module.css";
import { Text, Box, Flex, Spacer, Image, Grid, GridItem } from '@chakra-ui/react';
import useWindowDimensions from "../../utils/Resize";
import SouvernirSmall from "./SouvenirSmall";

function growLegend(width) {
    const rounded_width = Math.ceil(width / 200);
    var result = <div className={classes.legend}>
        <Flex>

            <div className={classes.list2} style={{ color: "white" }}>Legend</div>
            <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
            <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
            <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
            <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>
            <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

        </Flex>
    </div>

    switch (rounded_width) {
        case 1:
            result =
                (<div className={classes.legend}>
                    <Box>
                        <Flex>
                            <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>

                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

                        </Flex>
                    </Box >
                </div>)
            break;
        case 2:
            result =
                (<div className={classes.legend}>
                    <Box>
                        <Flex>
                            <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>

                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

                        </Flex>
                    </Box >
                </div>)
            break;
        case 3:
            result =
                (<div className={classes.legend}>
                    <Box>
                        <Flex>
                            <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>

                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

                        </Flex>
                    </Box >
                </div>)
            break;
        case 4:
            result =
                (<div className={classes.legend}>
                    <Box>
                        <Flex>

                            <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>

                        </Flex>
                        <Flex>
                            <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>
                            <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>
                        </Flex>
                    </Box>
                </div>)
            break;
        case 5:
            result =
                (<div className={classes.legend}>
                    <Flex>

                        <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

                    </Flex>
                </div>)
            break;
        case 6:
            result =
                (<div className={classes.legend}>
                    <Flex>

                        <div className={classes.list2} style={{ color: "white" }}>Legend</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_languages} > Coding Languages</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_skills}>Software Experience</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_projects}>Coding Projects</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_experiences}>Professional Experience</div>
                        <div style={{ marginBottom: 20 }} className={classes.legend_classes}>University Classes</div>

                    </Flex>
                </div>)
            break;

        default:
    }
    return result;
}

export default function Legend() {
    const { _, width } = useWindowDimensions();

    return (
        <Box>
            {growLegend(width)}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <SouvernirSmall />
        </Box>

    )
}