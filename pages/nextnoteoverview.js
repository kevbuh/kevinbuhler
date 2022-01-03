import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NEXT NOTE</title>
        <meta name="description" content="Kevin Buhler's Website" />
        <link
          rel="icon"
          href="https://github.com/kevbuh/eyecandy/blob/main/public/pinkgradient.jpeg"
        />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          <h1 className={styles.apps}>NEXT NOTE</h1>
        </p>
        <div className={styles.apps2}>
          <Image src="/nnpink.png" alt="NEXT" width={100} height={100} />
        </div>
        <div className={styles.apps2}>
          <p>Intelligent Note Taking</p>
        </div>
        <div className={styles.apps2}>
          <div className={styles.innerapp}>
            <Image src="/sim3.png" alt="NEXT" width={210} height={450} />
          </div>
          <div className={styles.innerapp}>
            <Image src="/sim6.png" alt="NEXT" width={210} height={450} />
          </div>
          <div className={styles.innerapp}>
            <Image src="/sim8.png" alt="NEXT" width={210} height={450} />
          </div>
        </div>
        <div className={styles.apps2}>
          <div className={styles.innerapp}>
            <span>
              <Image src="/download-9.jpg" alt="NEXT" width={140} height={49} />
            </span>
          </div>
          <div>
            <span>
              <Image src="/download-3.png" alt="NEXT" width={130} height={46} />
            </span>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kevbuh/nextnoteapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <p>
          <a href="https://nextnote.io">Visit the test website version here.</a>
        </p>
      </footer>
    </div>
  );
}
