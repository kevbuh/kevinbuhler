import Link from "next/link";

function ProjectPreview({ title, caption, link, image }) {
  return (
    // <div>
    //   <div className="hero h-96">
    //     <div className="hero-content flex-col lg:flex-row-reverse">
    //       <img src={image} className="max-w-md rounded-lg shadow-xl" />
    //       <div>
    //         <h1 className="text-5xl font-bold">{title}</h1>
    //         <p className="py-6">{caption}</p>
    //         <Link href={"/" + link}>
    //           <a className="btn btn-outline">More Info &rarr;</a>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-3/4 mx-auto">
      <div className="flex flex-row flex-wrap justify-between lg:flex-row-reverse mx-auto">
        <div>
          <img src={image} className="max-w-md rounded-lg shadow-xl mb-5" />
        </div>
        <div className="flex flex-col my-auto">
          <p className="text-5xl font-semibold">{title}</p>
          <p className="py-6 max-w-md">{caption}</p>

          <a className="btn btn-outline" href={link}>
            More Info &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
