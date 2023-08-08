import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import CppTabs from '../../components/cpptabs.js';

export default function Blackjack() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blackjack</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <CppTabs></CppTabs>
            </main>
        </div>
    );
}