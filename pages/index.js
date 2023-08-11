import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HeadShot from '/public/headshot.webp';

var classes = {
    photo: {
        margin: "auto",
        textAlign: "center",
        display:"flex",
        flexWrap:"wrap",
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "cover",
    }
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Emran Tokhi</title>
            </Head>
            <main>
                <p></p>
                <p></p>
                <h3><p className={styles.description}>
                    Feel free to click on any page to see more information about each project!
                    <br />Currently Working on: <Link className={styles.link} href="/unreal5/capybaracrush">Capybara Crush</Link>
                </p></h3>
 
                <Image
                    src={HeadShot}
                    alt="Headshot"
                    style={classes.photo}
                />

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3><center>About Me</center></h3>
                        <p>Lives in Sacramento, California
                            <br /><br />Hobbies: Building/Helping build PCs for friends, gaming, collecting Yu-Gi-Oh! Cards, watching all kinds of movies and shows (including but not limited to the superhero genre)
                            <br /><br />Bilingual in English and Pashto!
                            <br />Top 5 games (not in any order): Final Fantasy 7 Remake, Deus Ex: Human Revolution, Yakuza 0, The Outer Worlds, Ghost of Tsushima
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3><center>Education</center></h3>
                        <p>2017-2021 California State University - Sacramento.
                           <br />Bachelor of Science in Computer Science, Cum Laude
                           <br /><br />Languages: C++, Java, C.
                           <br /><br />IDE: Visual Studio Code, Visual Studio, Eclipse, Notepad++
                           <br /><br />Soft Skills: Great Teamwork Skills, Great Communicator, Leader, Problem Solver, Adaptive, Can Take Criticism and turn that into a way to become better, Quick Learner, Critical Thinker, Accountable
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3><center>Interests</center></h3>
                        <p>I have a deep interest in Video Game development, and believe that I would be a great fit in any team that would have me. I strive to continue my learning journey, and want to help create new ways of looking at the world through video games.
                            <br /><br />I feel that I work very well on a team, and I try to make sure that I stay on top of my work especially when working with a team. I am able to work alone efficiently as well, and can learn new things quickly if necessary.
                            <br /><br />GitHub: <Link className={styles.link} href="https://github.com/emrantokhi">https://github.com/emrantokhi</Link>
                        </p>
                    </div>

                </div>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
                </a>
            </footer>

            <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 25px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
    
}