import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Buhler</title>
        <meta name="description" content="Kevin Buhler's Website" />
        <link rel="icon" href="https://github.com/kevbuh/eyecandy/blob/main/public/pinkgradient.jpeg" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            <a href="https://kevinbuhler.com">
              {/* <code className={styles.codeBig}> */}
                Kevin Buhler
                {/* r</code> */}
              </a>
          </h1>
        </div>

        <p className={styles.description}>
          {/* Building the future{' '} */}
          <code className={styles.code}>accelerating the future.</code>
        </p>

        <div>
          <div className={styles.text}>
          <a href="https://nextnote.io">
            <h2 >NextNote &rarr;</h2>
            <p>Intelligent Note Taking</p>
          </a>
          </div>
          <div className={styles.text}>
          <a
            href="https://nextfind.vercel.app"
          >
            <h2>NextFind &rarr;</h2>
            <p>Find The Future</p>
            
          </a>
          </div>
          <div className={styles.text}>

          <a href="https://eyecandy.vercel.app/" >
            <h2>Eye Candy &rarr;</h2>
            <p>AI Powered Eye Candy</p>
          </a>
          </div>

          <div className={styles.text}>
          <a
            href="https://gravityleds.com"
          >
            <h2>Gravity LEDs &rarr;</h2>
            <p>
              High Quality LEDs
            </p>
          </a>
        </div>
        {/* <div>test</div> */}

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kevinbuhler.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Powered by{' '} */}
          <span className={styles.logo}>
            <Image src="/pinkgradient.jpeg" alt="NEXT" width={22} height={22} />
          </span>
        </a>
      </footer>
    </div>
  )
}
