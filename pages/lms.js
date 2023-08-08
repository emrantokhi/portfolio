import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const PaperBG = styled(Paper)(() => ({
    textAlign: 'center',
    backgroundColor: "#131518",
    paddingBottom: "5px",
    flexWrap: "wrap",
    display: "wrap",
    borderRadius: "10px",
}));


export default function LMS() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Learning Management System</title>
            </Head>
            <main>
                <br />
                <br />
                <br />
                <br />
                <h3 className={styles.description}>Learning Management System</h3>
                <h1 className={styles.title}>
                    Learning Academy
                </h1>

                <Box
                    centered
                    sx={{
                        width: "720px",
                        textAlign: "center",
                        margin: "auto",
                        paddingTop: "10px",
                        display: "wrap",
                        flexWrap: "wrap",
                    }}
                >
                    <PaperBG elevation={15}>
                        <div className={styles.maintext}>
                            <center>I had worked on an 8 person team to help develop a Learning Management System
                            for our client, a professor at CSU Sacramento. The basis of the project was to
                            create an interface for students, tutors, and professor to interact with. It
                            would also allow professors to share materials and allow students to get feedback from tutors.</center>
                        </div>
                    </PaperBG>
                </Box>
                <br />
                <br />
                <div className={styles.newgrid}>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/B-cLbAW6eBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.basictext}>
                        <PaperBG elevation={15}>
                            <h3 className={styles.headerfordescription}><center>My Role on the Team</center></h3>
                            <div className={styles.maintext}>
                                <center>My role on the team was to work on both the front-end and testing. I worked on bringing functionality to the website through the backend, and connecting it to the front-end side using Express.js. For the front-end, I created webpages in JavaScript using the React library as shown in the video.</center>
                            </div>
                        </PaperBG>
                    </div>
                </div>


            </main>
        </div>
    );
}