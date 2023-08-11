import Head from 'next/head';
import React, { useState, useCallback } from 'react';
import styles from '../styles/Home.module.css';
import CppTabs from '../components/cpptabs.js';
import PetAlbum from '../components/photoalbum/petcaretakerpics.js';
import TicAlbum from '../components/photoalbum/tictactoepics.js';
import BlackjackAlbum from '../components/photoalbum/blackjackpics.js';


export default function CPP() {

    return (
        <div className={styles.container}>
            <Head>
                <title>C++ CLI</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <CppTabs></CppTabs>
            <main>
               
                <div className={styles.newgrid}>
                    <div className={styles.maintext}>
                        <center>
                            This is a page that shows the current update of all the projects under this section! Feel free to click on the tabs above to see more specific info about the projects!
                        </center>
                    </div>


                    <h3 className={styles.description}>Pet Caretaker</h3>
                    <PetAlbum></PetAlbum>


                    <h3 className={styles.description}>Tic-Tac-Toe</h3>
                    <TicAlbum></TicAlbum>

                    <h3 className={styles.description}>Blackjack</h3>
                    <BlackjackAlbum></BlackjackAlbum>


                </div>
            </main>
        </div>
    );
}