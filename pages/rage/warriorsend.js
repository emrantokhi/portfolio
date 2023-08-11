import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import RageTabs from '../../components/ragetabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function WarriorsEnd() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Warrior's End</title>
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
                    Warrior's End!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Warrior's End was the second game I had created. It is a two-player first person shooter game in which both players play mech-cat figures and try to reduce each other's health to zero. The map is set at a shipyard and both players spawn at their respective spawn locations. The second player can be AI controlled or the game can utilize networking to include a second player. This game was created using the RAGE engine. (An explanation of the engine is on the Dolphin Conqueror page!)</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Models</center></h3>
                        <div className={styles.maintext}>
                            <center>Something that was special to me about this game is that I had personally created almost all of the models in this game, except for the forklift. I had created all the other models that were in the game were created in Blender, including the character models. I had created keyframe animations for the character models as well.
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
                            <center>Warrior's End was over 1000 lines of code in total, though still a bit incomplete. I was not able to get a fully functioning AI, which is what you will see in the video, however, other parts of the game were able to be implemented. For instance, the bullets use physics generated from a physics engine that had to be manually attached to the object. I learned about the physics world and the world that contains the actual models and was able to connect them. I was also able to implement sound, which includes walking, background music (copyright free), and sounds for the gun shooting.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/npZwhB3PdLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />
                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Networking</center></h3>
                        <div className={styles.maintext}>
                            <center>One of the toughest parts for me personally when I created this game was to set up networking. I used a thin server and thick client, and it was a basic UDP server that takes a port and an IP address to connect to it. I did all the processing on the client, and sent data to the server, which would essentially just send the data out to the other player, or potentially players that were in the game. This included movement data, which was then transferred to a ghost player in the other person's game. It also included bullet location and player data such as health. It also would handle removing players from its list of players when one would disconnect from the game.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}