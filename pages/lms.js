import Box from '@mui/material/Box';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';


export default function LMS() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Learning Management System</title>
            </Head>
            <main>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h3 className={styles.description}>Learning Management System</h3>
                <h1 className={styles.title}>
                    Learning Academy
                </h1>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} elevation={15}>
                        <div className={styles.maintext}>
                            <center>I had worked on an 8 person team to help develop a Learning Management System
                            for our client, a professor at CSU Sacramento. The basis of the project was to
                            create an interface for students, tutors, and professor to interact with. It
                            would also allow professors to share materials and allow students to get feedback from tutors.</center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <div className={styles.newgrid}>
                    <Box className={styles.textbox} sx={{flexGrow:1} }>
                        <CardMedia component="iframe" src="https://www.youtube-nocookie.com/embed/B-cLbAW6eBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" sx={{ aspectRatio: "16/9",}}></CardMedia>
                    </Box>
                    <Paper className={styles.paper} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>My Role on the Team</center></h3>
                        <div className={styles.maintext}>
                            <center>My role on the team was to work on both the front-end and testing. I worked on bringing functionality to the website through the backend, and connecting it to the front-end side using Express.js. For the front-end, I created webpages in JavaScript using the React library as shown in the video.
                                <br /><br />My other role on the team was to facilitate the automatic testing of our website, along with doing manual testing collectively with my team. I used Selenium along with TestNG  and its XML capabilities to create test cases and to run on multiple browsers, making sure that pages such as the login page worked correctly.
                            </center>
                        </div>
                    </Paper>
                </div>

                <Box className={styles.textbox}>
                    <Paper className={styles.paper} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>Technologies Used</center></h3>
                        <div className={styles.maintext}>
                            <center>As a base to build upon, we, as a team, decided to use the MERN stack, which includes MongoDB for the database, Express.js for the web framework, React.js for the client side, and Node.js for the web server. The team was also able to implement OCR (Optical Character Recognition) using the Tesseract.js API, where it could read words from an image, and allow the user to import tests/homework more easily. We used Postman for server testing. The product was deployed onto our client's Redhat Linux server.
                                <br /><br />For scrum software, we had used Flying Donut in order to organize and efficiently split up tasks. And for version control, we were using GIT. We used Visual Studio Code on our team as our IDE.
                                <br /><br />For testing, Selenium paired with TestNG was used with Java, using browser specific drivers that were linked on Seleniums website for Chrome, Firefox, Edge, Safari, and Internet Explorer.
                            </center>
                        </div>
                    </Paper>
                </Box>
                <br />
                <br />
                <br />
                <Box className={styles.textbox}>
                    <Paper className={styles.paper} elevation={15}>
                        <h3 className={styles.headerfordescription}><center>A Learning Experience</center></h3>
                        <div className={styles.maintext}>
                            <center>Throughout the project, I had learned a lot about managing time and making sure to stay organized. One part of staying organized that was very critical for our project was constantly communicating with the team, as well as communicating with our client. We made sure to communicate with our client every 2 weeks to update them where we were and keep them in the loop. As for the team, we would make sure to meet every week and make sure that we were all on task and able to get our parts done in a timely manner.
                                <br /><br />I also had to make sure to learn and understand a completely new language and framework in a very quick manner, and utilize that to create a product. I was able to learn JavaScript in a short period of time and use that knowledge to help contribute to the team. 
                                <br /><br />I also learned the importance of making sure to make everyone on the team feel included and working efficiently with people that I had just met. At least 3 of the 7 team members I had never spoken with before our project, but having clear and focused communication made it a lot more easy to work with them. Though one thing that I also learned from the experience is dealing with group members who may cause issues and being able to overcome those issues in order to finish the project.
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