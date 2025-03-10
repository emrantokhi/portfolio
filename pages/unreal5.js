import CardMedia from '@mui/material/CardMedia';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Unreal5Tabs from '../components/unreal5tabs.js';


export default function Unreal5() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unreal Engine 5 Projects</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal5Tabs></Unreal5Tabs>
            <main>
                
                <div className={styles.newgrid}>
                    <div className={styles.maintext}>
                        <center>
                            This is a page that shows the current update of all the projects under this section! Feel free to click on the tabs above to see more specific info about the projects!
                        </center>
                    </div>
                    <h3 className={styles.description}>Capybara Crush (Latest Update)</h3>
                    <CardMedia component="iframe" src="https://www.youtube.com/embed/cZH6ZTDc04w?si=bmvXkeRgfspMhMhV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"}  sx={{ aspectRatio: "16/9", }} ></CardMedia>
                    <h3 className={styles.description}>Clean Em' Up Shooter</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/du4ClUzqvpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    <h3 className={styles.description}>Crypt Raider</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/KnQo0XyA_0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                </div>
            </main>
        </div>
    );
}