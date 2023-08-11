import Link from 'next/link';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Unreal4Tabs from '../../components/unreal4tabs.js';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';

export default function ToonTanks() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Toon Tanks</title>
            </Head>
            <p />
            <p />
            <p />
            <p />
            <p />
            <Unreal4Tabs></Unreal4Tabs>
            <main>
                <h3 className={styles.description}>Unreal Engine 4</h3>
                <h1 className={styles.title}>
                    Toon Tanks
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <div className={styles.maintext}>
                            <center>Toon Tanks is a basic game where you play as a tank and shoot down enemy turrets in a winter base!</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Final Product: Sound, Particles, HUD, Level Creation</center></h3>
                        <div className={styles.maintext}>
                            <center>For this update, I had added firing and death particles and sounds. This was done using Unreal Engine's sound and particle system, implemented in code, and then assigned the actual sound and particle in blueprints. 
                                <br /><br />The HUD was created using Blueprint Implementable Events, where a function with the UFUNCTION property BlueImplementableEvent is called in code, and the body of the code is done in Blueprints. The HUD consists of the player's health, and the number of enemies left.
                                <br /><br />Another part of the HUD and the game that was added were winning and losing conditions, in which the screen would display if you had won by defeating all the enemy towers, or lost because of the players health hitting 0. To also add to more immersion, Camera Shake was added when firing to give a more intense feeling to the game.
                                <br /><br />The environment was created with assets from the free Unreal Marketplace environment pack created by Julio Juarez found in the link below. Below that link, you can find a download link to play the game yourself!
                                <br /><br />Julio Juarez's Polar Sci-Fi Facility Environment Pack: <Link className={styles.link} href="https://marketplace-website-node-launcher-prod.ol.epicgames.com/ue/marketplace/en-US/product/polar-sci-fi-facility?sessionInvalidated=true">Unreal Marketplace</Link>
                                <br /><br />Game Link Download: <Link className={styles.link} href="https://drive.google.com/drive/folders/17opCC1nWDVrR203Lnf1x6zKs7juyVTQs?usp=sharing">Google Drive</Link>
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />

                <CardMedia component="iframe" src="https://www.youtube.com/embed/VGjgU8JOm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 3: Firing and Health</center></h3>
                        <div className={styles.maintext}>
                            <center>To get firing to work, I first created a projectile class, found on GitHub, and assigned it a mesh in code. To allow it to move, I added a movement component onto it as well, which would handle the movement of the projectile. To get the projectile to actually deal damage was a multi-step process.
                                <br /><br />The first was to get the projectile to detect when a hit would occur. This would be done using a multicast delegate variable that an actor inherits, called OnComponentHit. This was done by assigning a callback function with the proper parameters and binding it to the delegate.
                                <br /><br />The second step would be to actually have a health component so that damage would come through. This was also done with a multicast delegate. But first, I had created an actor component in C++ called HealthComponent. The delegate that was used was a variable called OnTakeAnyDamage, and a callback function was assigned to it to apply the damage. The place where the delegate would be told to broadcast, however, was done in the projectile class, whenever OnHit occurred.
                                <br /><br />Below is the current culmination of the project so far in video form. If you look at the console, you can see where the health is actually being subtracted whenever a projectile lands on either a tower or the tank.
                            </center>
                        </div>
                    </Paper>
                </Box>

                <CardMedia component="iframe" src="https://www.youtube.com/embed/VGjgU8JOm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen={"true"} sx={{ aspectRatio: "16/9", }} ></CardMedia>
                <br />
                <br />
                <Box className={styles.seperatorline}></Box>
                <br />


                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Update 2: Character Movement</center></h3>
                        <div className={styles.maintext}>
                            <center>To start with, I needed to get my player tank to move and rotate, and for the enemy tower's to rotate and follow the player. I started with the tank's movement since it was more simple, I simply added two functions that would be binded to two different axis mappings in the tank class. For moving, I simply added a certain amount (a editable variable known as TankSpeed) to the tank's local X value, and for turning, I added a value to its local yaw. It was also crucial to take into account the delta time between each tick, so that movement was not frame rate dependent.
                                <br /><br />For the turret to rotate itself towards the player tank, I simply enabled ticking on the enemy tower, and it would check each tick if the player tank was in its range (an editable variable). If it was, it would call a function that would rotate the turret.
                                <br /><br />Though, I noticed that there was a commonality there as well, so I moved the RotateTurret function into BasePawn so both tank and tower would have access to it. The way the function would work, is that it would get a LookAtTarget (simply a vector in the world), get the turret mesh's location, subtract the two to get a vector with the correct direction and magnitude, and apply that to the turrets rotation.
                                <br /><br />For moving the tank's turret, it would get the mouse cursors position based off a HitResult returned by the player controller.
                            </center>
                        </div>
                    </Paper>
                </Box>
                

                <br />
                <Box className={styles.seperatorline}></Box>
                <br />

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} sx={{ backgroundColor: "#131518" }} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Start: Character Creation in C++</center></h3>
                        <div className={styles.maintext}>
                            <center>To begin with this game, the basic concept that is being done here is to have a player controlled tank, and a couple of enemy turrets that the player needs to destroy. And to do that, it was essential to create a class that both the tank and the turret would share. In Unreal Engine, I decided to make them Pawns, as they require movement and at least one of them will be player possessed. 
                                <br /><br />The commonalities between the two are that they will need a capsule for collision detection, a base, a turret, and a position where the projectile being shot would spawn in. I made gave these all the UPROPERTY's of being only visible, so that the pointers themselves could not be changed in the Unreal Editor.
                                <br /><br />After doing so, my focus moved to creating the Tank class, a child of the BasePawn. For this class, I also needed a camera component that would be used for the player's view. With that came a spring arm that the camera is always attached to. There was also an enemy tower class that was created. (The rest of the code can be found on my GitHub.)
                                <br /><br />After creating the classes, I was ready to create blueprints for the tank and the turret. I made blueprints for both and based both on their respective parent classes. Once that was done, I was able to assign each component that was required in the blueprint as shown.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}