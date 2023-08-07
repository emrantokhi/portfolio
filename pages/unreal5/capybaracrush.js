import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';

export default function CapybaraCrush() {
    return (
        <>
        <Head>
            <title>Crush</title>
        </Head>
        <h1>First Post He</h1>
        <h2>
            <Link href="/">Back To Home!</Link>
        </h2>
      </>
    );
}