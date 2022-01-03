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
        <div>
          {/* <h1 className={styles.code}>
            <a href="https://kevinbuhler.com">NEXT NOTE</a>
          </h1> */}
        </div>

        <Image src="/nnpink.png" alt="NEXT" width={100} height={100} />

        <p className={styles.description}>
          <p className={styles.code}>NEXT NOTE</p>
        </p>

        {/* <div>
          <div className={styles.text}>
            <a href="https://nextnote.io">
              <h2>NextNote &rarr;</h2>
              <p>Intelligent Note Taking</p>
            </a>
          </div>
        </div> */}
        <div>
          <p className={styles.code}>
            <a href="https://nextnote.io">
              Visit the test website version here.
            </a>
          </p>
        </div>
        <div>
          <span className={styles.logo}>
            <Image src="/download-9.jpg" alt="NEXT" width={210} height={70} />
          </span>
        </div>
        <div>
          <span className={styles.logo}>
            <Image src="/download-3.png" alt="NEXT" width={200} height={60} />
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kevbuh/nextnoteapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '} */}
          {/* <span className={styles.logo}>
            <Image src="/nnpink.png" alt="NEXT" width={22} height={22} />
          </span> */}
          GitHub
        </a>
      </footer>
    </div>
  );
}
