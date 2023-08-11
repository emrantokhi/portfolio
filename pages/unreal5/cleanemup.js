import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal5Tabs from '../../components/unreal5tabs';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function CleanEmUp() {
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
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/53x13wPIC6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/3rOcuvCB3A8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                </div>
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 2: Basic Enviroments and Characters</center></h3>
                        <div className={styles.maintext}>
                            <center>After making the character and the animations, I had gone in and created the animation blueprint along with the character blueprints. For the animation blueprint, I'm using a State Machine which will transition to other animations based on values produced by the character. The character is C++ based, with a parent class CapybaraCrushCharacter that all characters will inherit. I also made some basic environments to test some things with and to get a feel of how I want the environments to be based on the locations I've set in the story.
                                <br /><br />Had to remake the skeleton here for easier animation making after viewing another tutorial for it!
                                <br />NOTE: Most objects like the rocks were obtained from the Unreal Marketplace, the lava texture I had made myself.
                            </center>
                        </div>
                    </Paper>
                </Box>

                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/yVjAYPbn1WM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/DZhCbAtR868" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                </div>

                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/N-SD6GAGPk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/Vx0Xk_T7lwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                </div>
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Start: Creating the character</center></h3>
                        <div className={styles.maintext}>
                            <center>To start, I wanted to make a main character for players to control. I went with the idea of a capybara and the story will be based around a group of 3 capybara, 2 fighting for the love of another, in a bit of a comedic, but heartfelt manner. There are other things planned to supplement the story like combat, minigames, and side missions. But to start, I have had a little bit of experience with making things in Blender, so I started there. I used a reference to shape the model around and a followed a video tutorial with my character model. I think rigged it with a skeleton (which I had to redo after a while) and created some animations for it. I'm still not done with all the animations, and I'm creating them as I need them.
                                <br /><br />**An important thing to note is that I am not much of an artist, more of a programmer/engineer! But it's really fun to learn about other parts of creating a game!**
                            </center>
                        </div>
                    </Paper>
                </Box>
                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/lOQ-EGr24mc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px", paddingRight: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/H-oJGLWP9iI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                    <Box className={styles.textbox} sx={{ flexGrow: 1, paddingLeft: "10px" }}>
                        <CardMedia component="iframe" src="https://www.youtube.com/embed/Ug9AMIB3Drk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9", }}></CardMedia>
                    </Box>
                </div>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}