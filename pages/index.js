import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Buhler</title>
        <meta name="description" content="Kevin Buhler's Website" />
        <link
          rel="icon"
          href="https://github.com/kevbuh/eyecandy/blob/main/public/pinkgradient.jpeg"
        />
      </Head>

      <main className={styles.main2}>
        <div>
          <h1 className={styles.kevin}>KEVIN BUHLER</h1>
          <p className={styles.description}>
            <p>Accelerating the Future</p>
          </p>
        </div>
        <div>
          <a
            href="https://github.com/kevbuh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spacing}
          >
            <Image
              src="/GitHub-Mark/PNG/GitHub-Mark-64px.png"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://twitter.com/kevinbuhler_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spacing}
          >
            <Image
              src="/twitter-logo-01282021/Twitter logo/PNG/2021 Twitter logo - black.png"
              alt="Twitter"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-buhler/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.spacing}
          >
            <Image src="/61109.png" alt="LinkedIn" width={20} height={20} />
          </a>
        </div>
        <div className={styles.info}>
          <h2 className={styles.smallTitle}>About</h2>
          <p>Computer Science (BS) at the University of Colorado Boulder</p>
          <p>3.925 GPA &rarr; 4.0 GPA in Computer Science</p>
          <br />
          <p>
            Specializing in mobile app development for both iOS and Android.
          </p>
          <p>
            I look forward to connecting with the current and future leaders of
            the world to create visionary and innovative products to better our
            world.
          </p>
        </div>
        <div className={styles.info}>
          <h2 className={styles.smallTitle}>Projects:</h2>
          <div className={styles.apps3}>
            <div className={styles.smallcard}>
              <a href="https://kevinbuhler.com/nextnoteoverview">
                <h2>NextNote &rarr;</h2>
                <p>Intelligent Note Taking</p>
              </a>
            </div>
            <div className={styles.smallcard}>
              <a href="https://nextfind.vercel.app">
                <h2>NextFind &rarr;</h2>
                <p>Find The Next Big Thing</p>
              </a>
            </div>
            <div className={styles.smallcard}>
              <a href="https://eyecandy.vercel.app/">
                <h2>Eye Candy &rarr;</h2>
                <p>AI Powered Eye Candy</p>
              </a>
            </div>
            <div className={styles.smallcard}>
              <a href="https://gravityleds.com">
                <h2>Gravity LEDs &rarr;</h2>
                <p>High Quality LEDs</p>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.smallTitle}>Skills</h2>
          <div>
            <li>React Native</li>
            <li>Django</li>
            <li>Redux</li>
            <li>Postgres</li>
          </div>
          <div>
            <p>Also worked with:</p>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Redis</li>
            <li>NodeJS</li>
            <li>MongoDb</li>
          </div>
        </div>
      </main>
    </div>
  );
}
