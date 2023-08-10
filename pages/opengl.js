import Head from 'next/head';
import styles from '../styles/Home.module.css';
import OpenGLTabs from '../components/opengltabs.js';
import CardMedia from '@mui/material/CardMedia';

export default function OpenGL() {
    return (
        <div className={styles.container}>
            <Head>
                <title>OpenGL Projects</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <OpenGLTabs></OpenGLTabs>
            <main>

                <div className={styles.newgrid}>
                    <div className={styles.maintext}>
                        <center>
                            This is a page that shows the current update of all the projects under this section! Feel free to click on the tabs above to see more specific info about the projects!
                        </center>
                    </div>
                    <h3 className={styles.description}>A Cold Winter Day</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/r_NJl1nQoh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                    <h3 className={styles.description}>Not the Golden Cow!</h3>
                    <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/io7jAWa-lkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                </div>
            </main>
        </div>
    );
}