function ProjectPreview({ title, caption, link, image }) {
  return (
    <div className="w-3/4 mx-auto mt-20">
      <div className="flex flex-row flex-wrap justify-between lg:flex-row-reverse mx-auto mt-20">
        <div className="sm:h-1/2">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-xl mb-5 sm:h-1/2"
          />
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
