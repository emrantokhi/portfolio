import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal4Tabs from '../../components/unreal4tabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function BullsAndCows() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bulls and Cows</title>
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
                    Bulls and Cows!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Bulls and Cows is a simple word guessing game. You interact with a terminal, and when you guess a word, the game processes it and tells you how many Bulls (letters in the right spot) and how many Cows (letters are in the incorrect spot) there are. The game also allows you to ask for a hint for 5 lives. It features 3059 words.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Learning Unreal</center></h3>
                        <div className={styles.maintext}>
                            <center>Bulls and Cows was my first Unreal Engine game, and it was created to help me get into using the tools that the game engine provides. For instance, I had learned more in depth about a game loop,how to use the landscaping tools, learned about components and setting up a game, how to use assets, and the basic overview of Unreal. I used GIT for source control and Visual Studio 2019 as my IDE.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/tOWVS4LwDO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>

                <br />
                <br />
                <br />
            </main>
        </div>
    );
}