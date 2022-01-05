import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
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
          <h1 className={styles.kevin}>Next Note</h1>
          {/* <p className={styles.description}>
            <p>Accelerating the Future</p>
          </p> */}
        </div>
        <div>
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
        <br />
        <br />
        <br />

        <h3>Coming Soon To: </h3>
        <div className={styles.apps2}>
          <div>
            <span>
              <Image
                src="/Apple_logo_black.svg"
                alt="NEXT"
                width={100}
                height={50}
              />
            </span>
          </div>
          <div className={styles.innerapp}>
            <span>
              <Image
                src="/Android_symbol_green_RGB.png"
                alt="NEXT"
                width={90}
                height={50}
              />
            </span>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>

      <footer className={styles.footer}>
        <br />

        <a
          href="https://github.com/kevbuh/nextnoteapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        <p>
          <a href="https://nextnote.io">Visit the Deprecated Website Here.</a>
        </p>
      </footer>
    </div>
  );
}
