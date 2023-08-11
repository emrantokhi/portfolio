import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CppTabs from '../../components/cpptabs.js';
import TicAlbum from '/components/photoalbum/tictactoepics.js';
import Paper from '@mui/material/Paper';

export default function TicTacToe() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tic-Tac-Toe</title>
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
                    Tic-Tac-Toe!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>In order to solidify my knowledge of pointers and some light AI mechanics using C++, I created a Tic-Tac-Toe! game on the command line. It is a 1 player game that consists of the basic 9 slot board.</center>
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
                            <center>To make this program work, I had to efficiently pass the board to a function that would both check for win conditions, as well as a function to figure out the AI's next move. To do that, I was able to use pointers to pass the board through the functions and access them when necessary.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <div className={styles.newgrid}>
                    <TicAlbum></TicAlbum>
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>

    );
}