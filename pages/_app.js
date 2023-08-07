import React from 'react';
import NavBar from '/components/navbar.js'
import ScrollToTop from "react-scroll-to-top";
import Head from 'next/head';

/*<meta name="viewport" content="width=1024" /> add this above component*/

export default function App({ Component, pageProps }) {
    return (
        <>
            <meta name="viewport" content="width=500, initial-scale=1.0" />
            <Component {...pageProps} />
            <NavBar></NavBar>
            <ScrollToTop smooth color="#6f00ff"></ScrollToTop>
            <Head>
                <link rel="icon" href="/icon.ico" />
            </Head>
        </>
    );
}