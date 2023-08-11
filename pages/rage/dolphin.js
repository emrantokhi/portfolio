import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import RageTabs from '../../components/ragetabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function Dolphin() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dolphin Conqueror</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <RageTabs></RageTabs>
            <main>
                <h3 className={styles.description}>RAGE Engine</h3>
                <h1 className={styles.title}>
                    Dolphin Conqueror
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Dolphin Conqueror is one of the first games that I had personally created. It is a split screen two-player game in which both players play a dolphin. The goal is to collect the most planets and the mini pyramids called the All-Sporks. This was created through a bare-bones game engine called the RAGE engine (not the Rockstar one, but one that was created by a master's student at my university).</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Engine</center></h3>
                        <div className={styles.maintext}>
                            <center>This game was built on an engine that was created by a student named Ray at my university, and he called it the RAGE engine. This engine has no interface so to use the engine, a user has to vehemently look through the documents and learn about the functions. In essence, this engine was entirely bare bones, so setting everything up had to be done through code. And that included importing meshes and attaching textures to them manually.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>The Game</center></h3>
                        <div className={styles.maintext}>
                            <center>The game itself is quite simple, I was able to learn about controllers (or components) that could be attached to the objects in the game in order to have interaction in the game. For example, whenever you collect a planet to increase your score, the attached controllers to the planets would be activated, and the planets would start jumping in order to show that the planet had already been collected. You can see this in the demo video.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/LXdyThUnP90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}