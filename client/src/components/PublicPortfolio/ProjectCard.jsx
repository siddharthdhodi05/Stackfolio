import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link to={`/project/${project._id}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-5">
        <Link to={`/project/${project._id}`}>
          <h5 className="text-xl font-semibold">{project.title}</h5>
        </Link>

        <p className="mt-2 min-h-20 text-gray-600">{project.description}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-4 py-2"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
