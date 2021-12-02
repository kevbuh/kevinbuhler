import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Buhler</title>
        <meta name="description" content="Kevin Buhler's Website" />
        <link rel="icon" href="/favicon.ico" />
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
          <a href="https://kevinbuhler.com">

            <h2>NextNote &rarr;</h2>
            <p>Intelligent Note Taking</p>

          </a>

          <a
            href="https://kevinbuhler.com"

          >


            <h2>NextFind &rarr;</h2>
            <p>Find the next big thing</p>


          </a>
          
          <a href="https://eyecandy.vercel.app/" >


            <h2>Eye Candy &rarr;</h2>
            <p>AI Powered Eye Candy</p>


          </a>


          <a
            href="https://gravityleds.com"

          >
            
            <h2>Gravity LEDs &rarr;</h2>
            <p>
              High Quality LEDs
            </p>
          </a>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
