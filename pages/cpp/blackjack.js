import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CppTabs from '../../components/cpptabs.js';
import Paper from '@mui/material/Paper';
import BlackjackAlbum from '/components/photoalbum/blackjackpics.js';

export default function Blackjack() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blackjack</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <CppTabs></CppTabs>
            <main>
                <h3 className={styles.description}>C++ CLI</h3>
                <h1 className={styles.title}>
                    Blackjack
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>In order to solidify my knowledge of C++, I created a blackjack game on the command line. It consists of a standard 52 card deck, a house, and allows up to 7 players to play at once. The rules of blackjack are simply to hit a score of 21, or get higher than what the house has.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Concepts Used</center></h3>
                        <div className={styles.maintext}>
                            <center>In order to create this game, I had to utilize my knowledge of pointers, addresses, the stack and the heap, enumerators, vectors, abstraction, polymorphism, inheritance, and encapsulation. I was also able to learn the importance of planning before even touching code as well. 
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>How I Used Those Concepts</center></h3>
                        <div className={styles.maintext}>
                            <center>As seen in the planning stage, I had to first start off by creating a deck, which I started off with making a "Card" class. The card class would randomly assign itself a value when it is initialized in the "Hand" class. The hand class holds a hand of cards, and this object will also be initialized with each "Player" class. Then I also had to deal with the house, which is simply another "Player" but is controlled by the computer.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <div className={styles.newgrid}>
                    <BlackjackAlbum></BlackjackAlbum>

                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}