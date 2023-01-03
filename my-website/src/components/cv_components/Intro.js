import useWindowDimensions from "../../utils/Resize";
import { Text, Box, Flex, Spacer, Image, Grid, GridItem } from '@chakra-ui/react';
import art5 from '../../assets/artwork5.png'
import classes from "../resume.module.css"

export default function Intro() {
    const { height, width } = useWindowDimensions();
    return (width > 700 ?
        <Grid

            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={1} colSpan={1}>
                <div class="animate__animated animate__fadeIn">
                    <div className={classes.resume_intro}>Interact with my resume!</div>
                </div>
            </GridItem>


            <GridItem rowSpan={1} colSpan={1}>
                <div class="animate__animated animate__fadeIn">
                    <Image src={art5}></Image>
                </div>
            </GridItem>

        </Grid>

        :

        <Box>



            <div class="animate__animated animate__fadeIn">
                <div style={{ marginTop: 80 }}>
                    <Image src={art5}></Image>
                </div>
            </div>
            <div class="animate__animated animate__fadeIn">
                <div style={{ marginLeft: -220 }} >
                    <div style={{ marginTop: -200 }}>
                        <div className={classes.resume_intro}>Interact with my resume!</div>
                    </div>
                </div>
            </div>

        </Box>

    );
}