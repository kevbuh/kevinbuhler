import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero h-96">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-7xl font-bold">Kevin Buhler</h1>
          <p className="py-6">
            Computer Science at the University of Colorado Boulder
            <div className="flex flex-row justify-evenly pt-6">
              <a
                href="https://github.com/kevbuh"
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <Image src="/61109.png" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </p>
        </div>
        {/* <button className="btn ">View Projects</button> */}
      </div>
    </div>
  );
}

export default Hero;
