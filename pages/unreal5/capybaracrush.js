import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal5Tabs from '../../components/unreal5tabs';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function CapybaraCrush() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Capybara Crush</title>
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
                    Capybara Crush
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Working as a solo indie developer, I am using Unreal Engine 5 to create a single player, story based game based on the animal known as a capybara!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Current Update: UI, Combat, Tools (with demo)</center></h3>
                        <div className={styles.maintext}>
                            <center>In this update, I've changed the combat system a bit. I've made it so that you have elemental modes that you can switch between. The modes are normal, fire, earth, and water. Each respective element has an ability attached to it on the 1 key (which will be allowed to be changed later). They also have their own spin moves and their own ground-smashes. So in order to play, you will need to use a combination of all of your abilities.
                                <br /><br />I may add in a combo system where your basic attacks (left and right click) gain more energy as you continue a combo. For the most part, I feel that I have combat about where I want it, minus some tweaks and balancing that will be applied later. Below will be a link to a demo that you can explore and a video that shows me playing that demo. Sound effects will be coming soon! As well as some more response to attack particles. Also keep in mind that this map is just a test map and will most likely be scrapped!
                                <br /><br />As for tools, I created some basic time saving tools for myself in engine. Unreal Engine has a great feature where you can use its UMG to create your own tools and set them where you want. I currently have two tools, one to easily mass enable Nanite on the selected items, with a right click. The other tool is to easily do a blueprint compile of all the blueprints that I want to add to the tool, essentially pressing compile on each of them. This is a big time saver especially when I have to edit a header file in C++.
                                <br /><br />Link to demo: <Link href="https://drive.google.com/file/d/1MnBqDYVofWznkzYPDKN6ytSDyPw_rwmf/view?usp=sharing">Google Drive</Link>
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/sj-xW4pRhhc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 3: UI, Combat, AI</center></h3>
                        <div className={styles.maintext}>
                            <center>In this update, I've been working on polishing up the combat, and I'm planning on changing the basic attack animations. I've decided to go with an energy based system, where your basic attacks generate energy, and in turn you can use energy to dish out more powerful attacks. I'm planning on changing how the basic attacks work, maybe have the character lunge towards an enemy if they are in range but I'll have to experiment with it.
                                <br /><br />I've also made a bunch of Behavior Tree services and decorators to help make a more flushed out enemy AI system. Now that I have those, I'll be able to make more intricate AI's to have battles against! I'm still in the process of figuring out how to make the enemy capybara's different, but to supplement the main story, there are definitely going to be elemental capybara: fire, water, and earth, and the main character will be gaining those abilities in the story as it plays out.
                                <br /><br />I've also added in a very basic UI just to give myself something to look at and make sure that the stuff that's attached to the main character is working properly. I've made it so that now that there's enemies, the C++ class CapybaraCrushCharacter has two children, CapybaraCrushEnemy and CapybaraCrushPlayer, in which the enemies and the player inherit respectively.
                                <br /><br />The fences, textures, other static meshes, and effects were obtained from the Unreal Marketplace, credits and links will be placed in the game properly shown off!
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