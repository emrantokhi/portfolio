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
                            <center>Working as a solo indie developer, I am using Unreal Engine 5 to create a single player, story based game based on the animal known as a capybara! I'm using this site as a retrospective for each update, so feel free to read on or watch the included videos!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 7: First Boss</center></h3>
                        <div className={styles.maintext}>
                            <center>Hey everyone, today's a special day, today we have refactored a good amount of combat, and finished setting up the first basic enemies and the first boss. All through C++ coding and the Unreal Engine behavior tree (which I have found to be quite versatile, kind of hard to try and debug I have found though). I planned out a full boss sequence, just in combat, without the cutscenes and the updated models, and I think it came out pretty fun! I had some play testers play it, and I came to teh realization that I have had about 1000+ hours playing my game at that point, and I had made it a bit hard! 
                            <br /><br />What you see below is my 1000+ hours of gameplay, but even so, when I had them playtest it, they had done things that I would have never expected anyone to do! That was one of the most satisfying things watching the playtesters play through my game. But, you can watch through and see the boss AI! I kept the first boss quite simple, especially since it is the first boss in the entire game, I wanted to make sure it was a we're going to get used to things kinda boss.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube.com/embed/cZH6ZTDc04w?si=bmvXkeRgfspMhMhV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 6: Combat Refactor, Enemy AI, Visual, Sounds, UI, Maps, Save System, Quests, Animation Refactor, Cutscene System, Player Feedback</center></h3>
                        <div className={styles.maintext}>
                            <center>Hey everyone, been a minute since I've done an update here, so I thought it was about time to bring up what I've been doing. To start off with, I've been working on this game almost 3 years now, and it's a big project that I overestimated, but I'm still determined and full of energy for completing this game. However, working for 3 years on something means that the older stuff that you first started doing, might not be the most optimized way to do it. So, I went back and refactor A LOT of things, including bringing my animation blueprints to C++, saw some performance gains from the debugger in terms of cpu thread (small but everything helps, right?), and I weeded out a lot of bugs with it.
                            <br /><br />Not only did I refactor the animation blueprints, but I've adjusted combat to something I feel is much more approachable, with left click being your main combo attack, and your right clicks costing 'tokens', but being more powerful along with it. I've also added sounds, UI, player feedback in the form of camera shakes and controller vibrations. The UI can be seen in the video below, and a lot of material work went into that one. Sound took about a week to find good sounds, credit the creators, mix them, and put them in. There's also a bunch of visual updates for the abilities, and I also added a fire sword mode! So not only does it change your stance and everything, but it gives you a real sword to slash with.
                            <br /><br />I'm currently working on the Enemy AI now, and I'm going to add a bunch of types of enemies, and the most important touch, bosses. Quests are set up now on the backend, and I created a whole cutscene system, with text bubbles since I probably won't be able to hire voice actors (working on a small budget!).
                            <br /><br />The video below shows all the visual updates, but didn't capture things with the enemy AI as it's deep in progress, and some of the abilities weren't shown, but you'll get the basic gist of what's been worked on here! Current code count has gone up to around 6000+ lines too, so learning to manage that is also turning into a treat. Stay tuned for more updates!
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube.com/embed/odhrKVe6qb8?si=ZpfCsp0u9VKEyqpF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 5: New Beam Visuals, Combat System, Bone IK</center></h3>
                        <div className={styles.maintext}>
                            <center>Hey everyone, today I'm showing off a current update of the things that I've been working on. This particular update was a bit of a hassle and a headache and a half, but we got through it and I had a ton of fun doing it. The things that I was able to include are in the video down below, but if you want a text description, this will be it.
                            <br /><br />To start off with, I created a combo system, where there is a TArray that acts as a FIFO stack, and it keeps track of the recent input. So there are two attack buttons, left and right arm attack, and when you use a certain combination, such as left left right right, the mapped combo will trigger for it. It also gets reset when you're hit, and also when there has been a significant amount of time between inputs. I enjoyed implementing this one froms scratch and I think it's going to really help put the game together in terms of having a skill ceiling. I am going to make it so that each combo (there are three of them) has a need. For instance, a double arm stun will help break blocks.
                            <br /><br />The next thing that I worked on that took the most time was the Bone Inverse Kinematics. So I have created the actual model and skeleton myself in Blender 3.4, and it took a while to figure out that I had to rearrange some bones. And once I figured that out, I had to actually adjust the bone structure without losing the animations that I had currently already made (which was a lot of them). In the end, I was able to keep the animations that I had made, while also allowing IK to work on the leg bones. In the video, you can see when he goes up a hill, his feet adjust to it as well, they work on stairs too, but they're still a bit finicky so it needs a bit more work, but a lot less now.
                            <br /><br />The last major thing that I worked on was pretty much learning the entire Niagara particle system that comes in Unreal Engine. It took me about a week to really understand what I was doing with it, and because I put in the time to do so, I was able to reacreate the beam attack in the way that I actually wanted it, rather than having to rely on the Unreal Marketplace ones for it. Overall, I'm pretty happy with how the beam turned out! And you can take a look yourself in the video!
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/LcNZ_66XFiE?si=UtMUQaYn2sJ5DFC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 4: UI, Combat, Tools (with demo)</center></h3>
                        <div className={styles.maintext}>
                            <center>In this update, I've changed the combat system a bit. I've made it so that you have elemental modes that you can switch between. The modes are normal, fire, earth, and water. Each respective element has an ability attached to it on the 1 key (which will be allowed to be changed later). They also have their own spin moves and their own ground-smashes. So in order to play, you will need to use a combination of all of your abilities.
                                <br /><br />I may add in a combo system where your basic attacks (left and right click) gain more energy as you continue a combo. For the most part, I feel that I have combat about where I want it, minus some tweaks and balancing that will be applied later. Below will be a link to a demo that you can explore and a video that shows me playing that demo. Sound effects will be coming soon! As well as some more response to attack particles. Also keep in mind that this map is just a test map and will most likely be scrapped!
                                <br /><br />As for tools, I created some basic time saving tools for myself in engine. Unreal Engine has a great feature where you can use its UMG to create your own tools and set them where you want. I currently have two tools, one to easily mass enable Nanite on the selected items, with a right click. The other tool is to easily do a blueprint compile of all the blueprints that I want to add to the tool, essentially pressing compile on each of them. This is a big time saver especially when I have to edit a header file in C++.
                                <br /><br />Link to demo: <Link className={styles.link} href="https://drive.google.com/file/d/1MnBqDYVofWznkzYPDKN6ytSDyPw_rwmf/view?usp=sharing">Google Drive</Link>
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