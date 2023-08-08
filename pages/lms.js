import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Iframe from 'react-iframe';

export default function LMS() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Learning Management System</title>
            </Head>
            <main>
                <h3 className={styles.description}>Learning Management System</h3>
                <h1 className={styles.title}>
                    Learning Academy
                </h1>
                <h2 className={styles.maintext}>
                    <center>I had worked on an 8 person team to help develop a Learning Management System
                    <br/>for our client, a professor at CSU Sacramento. The basis of the project was to
                    <br />create an interface for students, tutors, and professor to interact with. It
                    <br />would also allow professors to share materials and allow students to get feedback
                    <br /> from tutors.</center>
                </h2>
                <br />
                <br />
                <div className={styles.newgrid}>
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/B-cLbAW6eBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className={styles.basictext}>
                        <h3 className={styles.headerfordescription}><center>My Role on the Team</center></h3>
                        <h2 className={styles.maintext}>
                            <center>My role on the team was to work on both the front-end and testing. I worked on bringing functionality to the website through the backend, and connecting it to the front-end side using Express.js. For the front-end, I created webpages in JavaScript using the React library as shown in the video.</center>
                        </h2>
                    </div>
                </div>


            </main>
        </div>
    );
}