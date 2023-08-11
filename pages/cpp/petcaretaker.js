import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CppTabs from '../../components/cpptabs.js';
import PetAlbum from '/components/photoalbum/petcaretakerpics.js';
import Paper from '@mui/material/Paper';

export default function PetCaretaker() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pet Caretaker</title>
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
                    Pet Caretaker!
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Pet Caretaker is a game where you have a pet dog that you take care of. You can feed it, play fetch with it, walk it, or have it take a little nap! Make sure to keep all its stats above 0 or the dog might run away!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Pet Caretaker Explained</center></h3>
                        <div className={styles.maintext}>
                            <center>The purpose of this game was to test my own knowledge of the game loop and learn about both inheritance and polymorphism. Each loop allows you to choose an option, and based on the option the stats will be changed according to it. One other feature is that if the dog's mood gets worse, it will make it harder to bring the dog's mood up through the various actions.  Each loop also checks for a loss state, in which one of the stats hits 0. 
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <div className={styles.newgrid}>
                    <PetAlbum></PetAlbum>
                  
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}