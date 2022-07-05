import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectPreview from "../components/ProjectPreview";
import Extra from "../components/Extra";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kevin Buhler</title>
        <meta name="description" content="Kevin Buhler's Personal Website" />
      </Head>
      <div>
        <NavBar />
        <Hero />
        <p className="font-semibold text-5xl my-10 text-center align-center justify-center">
          Projects
        </p>
        <div className="space-y-40">
          <ProjectPreview
            title="Cook Book"
            caption="A clean, minimal website to find the best recipes"
            link="https://github.com/kevbuh/cookbook/tree/main/v1"
            image="https://www.hush-uk.com/dw/image/v2/BDNS_PRD/on/demandware.static/-/Sites-hush-master-catalog/default/dw7699233b/large/007153-0001-02.jpg?q=90"
          />
          <ProjectPreview
            title="Bitcoin in Python"
            caption="Reimplementation of bitcoin from scratch, with no dependencies"
            link="https://github.com/kevbuh/bitcoin_reimplementation"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bitcoin_Cash.png/640px-Bitcoin_Cash.png"
          />
          <ProjectPreview
            title="Asteroid MCM"
            caption=" Mathematical model to predict asteroid mining’s impact on global equity using Pandas and scikit-learn."
            link="https://github.com/kevbuh/mcm_keviansud"
            image="https://sm.mashable.com/mashable_sea/feature/h/how-astero/how-asteroid-mining-will-save-the-earth-and-mint-trillionair_t3yp.jpg"
          />
          <ProjectPreview
            title="Jotalot"
            caption="Next level note taking"
            link="https://www.kevinbuhler.com/jotalot"
            image="https://www.kevinbuhler.com/_next/image?url=%2Fsim6.png&w=640&q=75"
          />
          <ProjectPreview
            title="Gravity Leds"
            caption="Custom made LED strips"
            link="http://www.gravityleds.com/"
            image="https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg"
          />
          <About />
          <Skills />
          <Extra />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
        </div>
      </div>
    </div>
  );
}

// <div>
//   <div>
//     <div>
//       <p>Kevin Buhler</p>
//     </div>

// <div>
//   <a
//     href="https://github.com/kevbuh"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       src="/GitHub-Mark/PNG/GitHub-Mark-64px.png"
//       alt="GitHub"
//       width={20}
//       height={20}
//     />
//   </a>
//   <a
//     href="https://twitter.com/kevinbuhler_"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       src="/twitter-logo-01282021/Twitter logo/PNG/2021 Twitter logo - black.png"
//       alt="Twitter"
//       width={20}
//       height={20}
//     />
//   </a>
//   <a
//     href="https://www.linkedin.com/in/kevin-buhler/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image src="/61109.png" alt="LinkedIn" width={20} height={20} />
//   </a>
// </div>
//     <div>
//       <p>
//         <p>
//           Computer Science Student at the University of Colorado Boulder
//         </p>
//       </p>
//     </div>
//   </div>

//   <div>
//     <h2>About</h2>
//   </div>
//   <div>
// <p>
//   Sophomore studying Computer Science at the University of Colorado
//   Boulder.
// </p>
// <p>GPA: 3.96 / 4.00 </p>
// <p>Boulder Esteemed Scholars Program, Be Boulder Scholarship</p>
// <br />
// <p>
//   I currently hold a 3.96 / 4.00 GPA and am involved in many software
//   development and mathematical modeling activities. I have experience
//   using a multitude of programming languages and frameworks. I’m most
//   comfortable with Python and C++, but have used others extensively. I
//   have experience with implementing payments in an e-commerce website
//   and working with a CFO to eliminate redundancies in a financial
//   database.
// </p>
// <p>
//   In Data Science, I have experience with data analysis using many
//   machine learning and statistical frameworks using Python, Pandas,
//   and scikit-learn. I also have experience using PyTorch and am
//   familiar with many aspects of the end-to-end development of Machine
//   Learning projects. Earlier this year I entered the COMAP
//   Mathematical Contest in Modeling where I successfully submitted a
//   paper on an Asteroid Mining Global Equity model to predict asteroid
//   mining’s impact on global equity using a TOPSIS model with weighted
//   parameters using PCA analysis and a least-squares linear regression
//   machine learning model.{" "}
// </p>
// <p>
//   I have developed my own projects, which include: Bitcoin
//   reimplementation from scratch in Python with the ability to create,
//   sign, and broadcast transactions onto Bitcoin’s test network
//   Full-stack Android and iOS mobile application built with React
//   Native, Redux, Python/Django, and PostgreSQL Custom-made LED strip
//   with an ESP-8266 internet-enabled microcontroller and C++ that
//   connects to the WLED app
// </p>
// <p>
//   In addition, I have work in mobile app development for both iOS and
//   Android. I have deployed multiple websites using React and am
//   working on a cross-platform mobile app using React Native, Django,
//   and PostgreSQL.
// </p>
// <p>
//   I look forward to connecting with the current and future leaders of
//   the world to create visionary and innovative products to better our
//   world.
// </p>
//   </div>

//   <div>
//     <h2>Projects:</h2>
//   </div>
//   <div>
//     <div>
//       <div>
//         <a href="https://github.com/kevbuh/bitcoin_reimplementation">
//           <h2>Python Bitcoin</h2>
//         </a>
//         <p>
//           Reimplementation of bitcoin from scratch, with no dependencies
//         </p>

//         <p>May 2022</p>
//         <div>
//           <div>
//             <a href="https://github.com/kevbuh/bitcoin_reimplementation">
//               <h3>More Info &rarr;</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div>
//         <a href="https://github.com/kevbuh/mcm_keviansud">
//           <h2>Asteroid MCM</h2>
//         </a>
//         <p>
//           Mathematical model to predict asteroid mining’s impact on global
//           equity using Pandas and scikit-learn.
//         </p>

//         <p>May 2022</p>
//         <div>
//           <div>
//             <a href="https://github.com/kevbuh/mcm_keviansud">
//               <h3>More Info &rarr;</h3>
//               {/* <p>High Quality LEDs</p> */}
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div>
//         <a href="https://nextnote.io">
//           <h2>Next Note</h2>
//         </a>
//         <p>Dec 2021 - Present</p>
//         <div>
//           <div>
//             <a href="https://nextnote.io">
//               <h3>More Info &rarr;</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div>
//         <a href="https://kevinbuhler.com/jotalot">
//           <h2>Jotalot</h2>
//         </a>
//         <p>Dec 2021 - Present</p>
//         <div>
//           <div>
//             <a href="https://kevinbuhler.com/jotalot">
//               <h3>More Info &rarr;</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div>
//         <a href="https://gravityleds.com">
//           <h2>Gravity LEDs</h2>
//         </a>
//         <p>Dec 2021 - Present</p>
//         <div>
//           <div>
//             <a href="https://gravityleds.com">
//               <h3>More Info &rarr;</h3>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>

//   <div>
//     <h2>Skills</h2>
//   </div>
// <div>
//   <h3>Primary Skills:</h3>
//   <li>Python</li>
//   <li>Pytorch</li>
//   <li>React Native</li>
//   <li>Redux</li>
//   <li>Django</li>
//   <li>PostgreSQL</li>

//   <h3>Technologies I have worked with:</h3>
//   <div>
//     <li>Pandas</li>
//     <li>Scikit-learn</li>
//     <li>React</li>
//     <li>TypeScript</li>
//     <li>GraphQL</li>
//     <li>Redis</li>
//     <li>NodeJS</li>
//     <li>MongoDB</li>
//     <li>Docker</li>
//     <li>Heroku</li>
//     <li>Many More</li>
//     <p>
//       I am skilled in JavaScript, TypeScript, HTML, CSS. I have also
//       used C++ and Java. I have utilized many web technologies including
//       React, React Native, MongoDB, Express.js, PostgreSQL, GraphQL,
//       Redis, NodeJS, and more. In addition, I use Docker and Digital
//       Ocean to build, run and operate my web applications in the cloud
//       and implement Stripe API for payment processing. I have been
//       actively studying Neural Networks and Deep Learning in my own
//       time. To do so, I have been using the machine learning platform
//       TensorFlow, with Keras API alongside the Scikit-Learn library.
//     </p>
//   </div>
//   </div>
// <div>
//   <h2>Extra</h2>
// </div>
// <div>
//   <div>
//     <a href="https://www.youtube.com/channel/UCuOz_PYAm55bt-1php4dZeQ/videos">
//       <h3>YouTube Channel</h3>
//     </a>
//     <p>
//       Some Lofi Songs I made using FL Studio 20 and community sounds:
//     </p>
//     <div>
//       <a href="https://www.youtube.com/watch?v=Swy1ebZ02ug">
//         <li>Rooftop Serenade</li>
//       </a>
//       <a href="https://www.youtube.com/watch?v=6B1oSFGVj7Y">
//         <li>Lavender Flow</li>
//       </a>
//       <a href="https://www.youtube.com/watch?v=5uLDa8pxdOw">
//         <li>Recollection</li>
//       </a>
//       <a href="https://www.youtube.com/watch?v=3m9SfmiR108">
//         <li>Mesa 1997</li>
//       </a>
//     </div>
//   </div>
//   <div>
//     <h3>Short Stories</h3>
//     <a href="https://github.com/kevbuh/husun/blob/main/Husun_Kevin_Buhler_May_2022.pdf">
//       <li>Husun</li>
//     </a>
//   </div>
// </div>
// </div>
