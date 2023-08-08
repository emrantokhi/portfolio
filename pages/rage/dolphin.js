import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import RageTabs from '../../components/ragetabs.js';

export default function Dolphin() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Dolphin Conqueror</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <RageTabs></RageTabs>
            </main>
        </div>
    );
}