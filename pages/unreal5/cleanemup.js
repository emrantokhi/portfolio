import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal5Tabs from '../../components/unreal5tabs';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import ImageViewer from 'react-simple-image-viewer';



var classes = {
    photo: {
        margin: "2px auto",
        paddingLeft: "6px",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
        alignItems: "center",
        cursor: "pointer",
    }
};

export default function CleanEmUp() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const cleanemupImages = [
        'https://i.imgur.com/iMyLqW8.png',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Clean Em' Up Shooter</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal5Tabs></Unreal5Tabs>
            <main>
                <h3 className={styles.description}>Unreal Engine 5</h3>
                <h1 className={styles.title}>
                    Clean Em' Up Shooter
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>A quick third person shooter game where you clear out the enemies in the middle of their base!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Current Build: UI, Balancing, Gameplay</center></h3>
                        <div className={styles.maintext}>
                            <center>For the current build, there were multiple things added in order to make it a playable game. The first thing was actually adding in a challenge, and the challenge is simple, to kill off all of the enemies. I balanced the gameplay by giving the player a good amount of health, and the guns doing enough damage to keep it a challenge. 
                                <br /><br />I added in UI, such as a main menu, pause menu, which allow you to quit the game as needed. Not only that, but I added in a heads up display (HUD) on the screen that shows a crosshair, health, and the enemies that are left to beat. After beating or losing the game, there is a win screen and lose screen that comes up respectively, that also allows you to restart the game or replay it, as well as quit.
                                <br /><br />I also fixed some animation issues using animation state machines, adding in sound effects, such as background music, and also worked with Aim Offsets in order to get the player mesh to move correctly when moving the camera. For the sound effects, I also became familiar with sound cues in order to randomize the weapon sounds, and sound spatialization in order to give the feeling that the sounds are coming from a specific direction.
                                <br /><br />In the video, you'll notice the camera looks like it is skipping. It isn't skipping, but that is something I implemented in order to see angles better, where if you press E or the left trigger button on a controller, the camera will switch to your other shoulder, giving you a wider peeking advantage.
                                <br /><br />Below you can find a video of the gameplay, and a link to download and try it if you wish!
                                <br /><br />Link: <Link className={styles.link} href="https://drive.google.com/drive/folders/1jFA6LDY3yI8gjdlq5wIiq3qVGrP98MrR?usp=sharing" color="#ffffff">Google Drive</Link>
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/du4ClUzqvpo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 2: AI and Quality of Life</center></h3>
                        <div className={styles.maintext}>
                            <center>For the second update, I was able to work on learning more about Behavior Trees and how Blackboards are used in those Behavior Trees. For quality of life, I also added in a function that allows the camera to move to the other shoulder.
                                <br /><br />I created specific Behavior Tree tasks and services in C++, so now the AI will follow the player if it is in its line of sight, and if it loses the player, it'll investigate the last known location, and if it cannot find anyone there, it'll return back to its original position. If the character is in its line of sight, it will follow the character to an appropriate distance, and begin to fire at the player. 
                                <br /><br />Below is a video example of the behavior tree at work, as well as a picture of the implemented behavior tree.
                            </center>
                        </div>
                    </Paper>
                </Box>

                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/MACOQMv-uGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <div>
                        {cleanemupImages.map((src, index) => (
                            <img
                                src={src}
                                onClick={() => openImageViewer(index)}
                                width="400"
                                height="320"
                                key={index}
                                style={classes.photo}
                                alt=""
                            />
                        ))}

                        {isViewerOpen && (
                            <ImageViewer
                                src={blackjackImages}
                                currentIndex={currentImage}
                                disableScroll={false}
                                closeOnClickOutside={true}
                                onClose={closeImageViewer}
                            />
                        )}
                    </div>

                </div>
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 1: Characters, Animation, and Guns</center></h3>
                        <div className={styles.maintext}>
                            <center>For my first update, I have added in animations for walking and running using a blend space, where the animation will change from idle, to walking, to running in a smooth action. These were done in Unreal Engine's Blueprints. I was also able to add in a player death animation, that plays when a character's HP, whether an enemy or the player character, hits 0. 
                                <br /><br />I was able to add player input, to allow for the player to move, jump, shoot, and turn the camera and the character with the mouse, as well as gamepad support.
                                <br /><br />And finally, I was able to add in a gun, which uses a line trace starting from the player's camera to determine what object was hit by the bullet when the gun shoots. The gun was put into the characters hands via a socket on the character model's skeleton. I was also able to add particle effects for the gun's muzzle, and for where the bullet lands. The next update will include AI handling. 
                                <br /><br />The maps, models, and particles are from Epic Games' canceled Paragon game, not created by me, just being used for the purposes of learning and making a game.
                            </center>
                        </div>
                    </Paper>
                </Box>

                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/PgTTX-4cRfg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>   
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}