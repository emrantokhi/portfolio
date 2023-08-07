import React from 'react';
import NavBar from '/components/navbar.js'
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <NavBar></NavBar>
            <Head>
                <link rel="icon" href="/icon.ico" />
            </Head>
        </>
    );
}