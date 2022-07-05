function ProjectPreview({ title, caption, link, image }) {
  return (
    <div className="w-3/4 mx-auto mt-20">
      <div className="flex flex-row flex-wrap justify-evenly lg:flex-row-reverse mx-auto mt-20">
        <div className="sm:h-1/2 max-w-xs">
          <img src={image} className="max-w-xs rounded-lg shadow-xl mb-5 " />
        </div>
        <div className="flex flex-col my-auto max-w-xs">
          <p className="text-5xl font-semibold max-w-sm">{title}</p>
          <p className="py-6 max-w-sm">{caption}</p>

          <a className="btn btn-outline" href={link}>
            More Info &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
