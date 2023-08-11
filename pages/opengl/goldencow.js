import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import OpenGLTabs from '../../components/opengltabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function GoldenCow() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Not the Golden Cow!</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <OpenGLTabs></OpenGLTabs>
            <main>
                <h3 className={styles.description}>OpenGL</h3>
                <h1 className={styles.title}>
                    Not the Golden Cow Statue!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Not the Golden Cow Statue! is not supposed to be a game, but it depicts a scene of a UFO abducting a golden cow statue. This was done through JOGL (Java Open Graphics Library) which are libraries that allow a developer to use OpenGL libraries in Java.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Not the Golden Cow Statue! Explained</center></h3>
                        <div className={styles.maintext}>
                            <center>Going through this, I was able to familiarize myself with how graphics libraries work on the lower end. For example, I was able to learn about 3d math, lighting, water effects, sin waves, interpolation, skyboxes, shadows, atmospheric fog, shaders, textures, camera controllers, rendering, the graphics pipeline, and actually working within the graphics pipeline. 
                                <br /><br />With this particular particular program, I made sure that the movement was based upon elapsed time rather than frame rate, and I was able to implement the previous features in order to create this scene.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/io7jAWa-lkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}