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
          <h1 className={styles.kevin}>Kevin Buhler</h1>
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
            Specializing in mobile app development for both iOS and Android. I
            have deployed multiple websites using React and am working on a
            cross-platform mobile app using React Native, Django, and
            PostgreSQL.
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
              <a href="https://kevinbuhler.com/nextnote">
                <h2>NextNote &rarr;</h2>
                <p>Intelligent Note Taking</p>
              </a>
            </div>
            <div className={styles.smallcard}>
              <a href="https://eyecandy.vercel.app/">
                <h2>Eye Candy &rarr;</h2>
                <p>AI Powered Eye Candy</p>
              </a>
            </div>
            <div className={styles.smallcard}>
              <a href="https://nextfind.vercel.app">
                <h2>NextFind &rarr;</h2>
                <p>Find The Next Big Thing</p>
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
          <p>Primary Skills:</p>
          <li>React Native</li>
          <li>Redux</li>
          <li>Django</li>
          <li>PostgreSQL</li>

          <p>Technologies I have worked with:</p>
          <div>
            <li>React</li>
            <li>TypeScript</li>
            <li>GraphQL</li>
            <li>Redis</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
            <li>Docker</li>
            <li>Heroku</li>
            <li>Many More</li>
            <p>
              I am skilled in JavaScript, TypeScript, HTML, CSS. I have also
              used C++ and Java. I have utilized many web technologies including
              React, React Native, MongoDB, Express.js, PostgreSQL, GraphQL,
              Redis, NodeJS, and more. In addition, I use Docker and Digital
              Ocean to build, run and operate my web applications in the cloud
              and implement Stripe API for payment processing. I have been
              actively studying Neural Networks and Deep Learning in my own
              time. To do so, I have been using the machine learning platform
              TensorFlow, with Keras API alongside the Scikit-Learn library.
            </p>
          </div>
        </div>
        <div className={styles.info}>
          <h2 className={styles.smallTitle}>Other Skills & Interests</h2>
          <div>
            <a
              className={styles.underline}
              href="https://www.youtube.com/channel/UCuOz_PYAm55bt-1php4dZeQ/videos"
            >
              <h3>YouTube Channel</h3>
            </a>
            <p>
              Some Lofi Songs I made using FL Studio 20 and community sounds:
            </p>
            <div className={styles.smallcard}>
              <a
                className={styles.underline}
                href="https://www.youtube.com/watch?v=Swy1ebZ02ug"
              >
                <li>Rooftop Serenade</li>
              </a>
              <a
                className={styles.underline}
                href="https://www.youtube.com/watch?v=6B1oSFGVj7Y"
              >
                <li>Lavender Flow</li>
              </a>
              <a
                className={styles.underline}
                href="https://www.youtube.com/watch?v=5uLDa8pxdOw"
              >
                <li>Recollection</li>
              </a>
              <a
                className={styles.underline}
                href="https://www.youtube.com/watch?v=3m9SfmiR108"
              >
                <li>Mesa 1997</li>
              </a>
            </div>
          </div>
          <div className={styles.smallcard}>
            <h3>Short Stories</h3>
            <li>Husun</li>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        {/* <a
          href="https://github.com/kevbuh/nextnoteapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a> */}

        {/* <p>
          <a href="https://nextnote.io">Visit the Deprecated Website Here.</a>
        </p> */}
      </footer>
    </div>
  );
}
