import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Unreal5Tabs from '../components/unreal5tabs.js';

export default function Unreal5() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unreal Engine 5 Projects</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <Unreal5Tabs></Unreal5Tabs>
            </main>
        </div>
    );
}