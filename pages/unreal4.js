import Head from 'next/head';
import Unreal4Tabs from '../components/unreal4tabs.js';
import styles from '../styles/Home.module.css';
import CardMedia from '@mui/material/CardMedia';

export default function Unreal4() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unreal Engine 4 Projects</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal4Tabs></Unreal4Tabs>
            <main>

                <div className={styles.newgrid}>
                    <div className={styles.maintext}>
                        <center>
                            This is a page that shows the current update of all the projects under this section! Feel free to click on the tabs above to see more specific info about the projects!
                        </center>
                    </div>
                    <h3 className={styles.description}>Toon Tanks</h3>
                    <CardMedia component="iframe" src="https://www.youtube.com/embed/VGjgU8JOm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                    <h3 className={styles.description}>Escape Game</h3>
                    <CardMedia component="iframe" src="https://www.youtube.com/embed/TexDWc22aa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    <h3 className={styles.description}>Bulls and Cows</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/tOWVS4LwDO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                </div>
            </main>
        </div>
    );
}