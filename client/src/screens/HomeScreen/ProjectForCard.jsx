const ProjectForCard = () => {
  return (
    <div className="p-8">
      <h3 className=" text-2xl font-bold mb-4">Showcase Your Best Projects</h3>
      <p className="text-slate-600 mb-8">
        Display your projects with descriptions, GitHub repositories,
        technologies used, and live demos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-50 block max-w-sm p-6 border rounded-2xl shadow-xs hover:bg-neutral-100">
          <h4 className="mb-3 text-2xl font-semibold tracking-tight leading-8">
            Full Stack Projects
          </h4>
          <p className="text-slate-600">
            Highlight complete applications built with modern technologies.
          </p>
        </div>
        <div className="bg-neutral-50 block max-w-sm p-6 border rounded-2xl shadow-xs hover:bg-neutral-100">
          <h4 className="mb-3 text-2xl font-semibold tracking-tight leading-8">
            Frontend Applications
          </h4>
          <p className="text-slate-600">
            Showcase responsive user interfaces and interview experience
          </p>
        </div>
        <div className="bg-neutral-50 block max-w-sm p-6 border rounded-2xl shadow-xs hover:bg-neutral-100">
          <h4 className="mb-3 text-2xl font-semibold tracking-tight leading-8">
            Backend Services
          </h4>
          <p className="text-slate-600">
            Present APIs, authentication systems, and scalable architectures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectForCard;
