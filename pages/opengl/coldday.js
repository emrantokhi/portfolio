import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import OpenGLTabs from '../../components/opengltabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function ColdDay() {
    return (
        <div className={styles.container}>
            <Head>
                <title>A Cold December Day</title>
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
                    A Cold December Day
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>A Cold December Day depicts a scene of a bright day after some snow, and while you are admiring the snowman that was created the day before, you catch a surprise glimpse of a famous red-suited man in his sleigh. This was created through the use of JOGL (Java Open Graphics Library) which is allows a developer to run OpenGL libraries in Java.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>A Cold December Day Explained</center></h3>
                        <div className={styles.maintext}>
                            <center>A Cold Day December Day was created in order to help me understand how to work with 3d math, in terms of creating a camera controller, to work with texture coordinates and how they should be applied to basic meshes. The snowman was handmade by me creating vertices and its own texture coordinates, along with the textures for the snowman. The Santa Claus and the sleigh were obtained through CGTrader with permissions to use them in my work. This also helped me understand the importance of getting permission to use assets that are not mine.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/r_NJl1nQoh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}