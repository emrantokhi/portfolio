import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal4Tabs from '../../components/unreal4tabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function EscapeGame() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Escape Game</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal4Tabs></Unreal4Tabs>
            <main>
                <h3 className={styles.description}>Unreal Engine 4</h3>
                <h1 className={styles.title}>
                    Escape Game!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Escape Game is an Unreal Engine 4 game in which you simply have to escape the room by putting an object on a pressure plate. There are two levels that were created, one more of a demo, the other using assets from the Unreal Marketplace. I use GIT as source control and Visual Studio 2019 as my IDE.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Part 2: Putting What I learned to Use</center></h3>
                        <div className={styles.maintext}>
                            <center>Using the free assets from Unreal Marketplace, called Spaceship Interior Environment Set by Denys Rutkovskyi, and the experience that I gained from creating the tech demo, I put together a small level with a similar premise as the tech demo, though with a bit of a surprise at the end. It took about 6-7 hours to put together the level, and another hour to put in the interactive features, which includes the pressure plates and doors.    
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube.com/embed/TexDWc22aa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Part 1: A Tech Demo</center></h3>
                        <div className={styles.maintext}>
                            <center>Through making this tech demo, I was able to learn about how the following are used in Unreal Engine: Binary Space Partitions (BSPs), lighting, material editing, using static meshes, collisions, trigger volumes, physics handlers, sounds and background music, and using components made from code to customize a scene more effectively and add in interaction. 
                                <br /><br />The basis of this demo was to learn how to customize my scene and use Unreal based C++ programming to add functionality to my game.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px" }}>
                    <CardMedia component="iframe" src="https://www.youtube.com/embed/3rOcuvCB3A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                </Box>
               
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}