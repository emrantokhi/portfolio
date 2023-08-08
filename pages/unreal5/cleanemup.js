import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal5Tabs from '../../components/unreal5tabs';

export default function CleanEmUp() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Clean Em' Up Shooter</title>
            </Head>
            <main>
                <Unreal5Tabs></Unreal5Tabs>
            </main>
        </div>
    );
}