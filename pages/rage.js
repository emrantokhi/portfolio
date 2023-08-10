import Head from 'next/head';
import styles from '../styles/Home.module.css';
import RageTabs from '../components/ragetabs.js';
import CardMedia from '@mui/material/CardMedia';

export default function Rage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>RAGE (CSUS) Projects</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <RageTabs></RageTabs>
            <main>

                <div className={styles.newgrid}>
                    <div className={styles.maintext}>
                        <center>
                            This is a page that shows the current update of all the projects under this section! Feel free to click on the tabs above to see more specific info about the projects!
                        </center>
                    </div>
                    <h3 className={styles.description}>Dolphin Conqueror</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/LXdyThUnP90" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                    <h3 className={styles.description}>Warrior's End</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/npZwhB3PdLg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                </div>
            </main>
        </div>
    );
}