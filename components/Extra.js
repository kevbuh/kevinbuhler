import Link from "next/link";

function Extra() {
  return (
    <div className="hero">
      <div className="hero-content ">
        <div className="">
          <h1 className="text-5xl font-bold text-center mb-8">Extra</h1>
          <div>
            <div>
              <div>
                <p className="text-lg font-semibold">
                  Some Lofi Songs I made using FL Studio 20 and community
                  sounds:
                </p>
                <div>
                  <a href="https://www.youtube.com/watch?v=Swy1ebZ02ug">
                    <li>Rooftop Serenade</li>
                  </a>
                  <a href="https://www.youtube.com/watch?v=6B1oSFGVj7Y">
                    <li>Lavender Flow</li>
                  </a>
                  <a href="https://www.youtube.com/watch?v=5uLDa8pxdOw">
                    <li>Recollection</li>
                  </a>
                  <a href="https://www.youtube.com/watch?v=3m9SfmiR108">
                    <li>Mesa 1997</li>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-lg font-semibold">Short Stories</p>
                <a href="https://github.com/kevbuh/husun/blob/main/Husun_Kevin_Buhler_May_2022.pdf">
                  <li>Husun</li>
                </a>
              </div>
              <a
                href="https://www.youtube.com/channel/UCuOz_PYAm55bt-1php4dZeQ/videos"
                className="underline py-1 font-semibold"
              >
                YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
