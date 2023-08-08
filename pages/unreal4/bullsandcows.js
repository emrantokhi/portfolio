import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal4Tabs from '../../components/unreal4tabs.js';

export default function BullsAndCows() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bulls and Cows</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <Unreal4Tabs></Unreal4Tabs>
            </main>
        </div>
    );
}