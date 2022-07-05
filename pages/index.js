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
        <div className="space-y-20 divide-y">
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
