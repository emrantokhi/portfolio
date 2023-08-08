import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import OpenGLTabs from '../components/opengltabs.js';

export default function OpenGL() {
    return (
        <div className={styles.container}>
            <Head>
                <title>OpenGL Projects</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <OpenGLTabs></OpenGLTabs>
            </main>
        </div>
    );
}