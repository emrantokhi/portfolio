import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal5Tabs from '../../components/unreal5tabs';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function CryptRaider() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Crypt Raider</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal5Tabs></Unreal5Tabs>
            <main>
                <h3 className={styles.description}>Unreal Engine 5</h3>
                <h1 className={styles.title}>
                    Crypt Raider
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>A short puzzle game made in Unreal Engine 5! Get the Golden Statue and escape with your life and the riches!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Current Update: Gameplay</center></h3>
                        <div className={styles.maintext}>
                            <center>For this update, I had implemented game play features. This includes adding triggers that open and closes doors, two short puzzles, an escape sequence and a win condition. I also added background music for both levels. You can download and try the game in the link below! Credits for the music are in the download link as well! Video of game play will also be below.
                                <br /><br />Link to demo: <Link className={styles.link} href="https://drive.google.com/drive/folders/1YpaBh4rRKBqCSVPPcdM6g1zACyqM01nX?usp=sharing">Google Drive</Link>
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/KnQo0XyA_0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 1: Level Design</center></h3>
                        <div className={styles.maintext}>
                            <center>For the first update, I had created two levels, one a city, and the other a crypt where the statue you are going to steal will be! I used asset packs from Unreal Market place. I had made a concept map and implemented it based off of the objects that were available from the asset packs, and polished it with props that were in the packs as well.
                                <br /><br />Uppercut Games - City of Brass 
                                <br /><br />Infuse Studio - Medieval Dungeon
                            </center>
                        </div>
                    </Paper>
                </Box>

                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/53x13wPIC6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}