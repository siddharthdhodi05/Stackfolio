import { Link } from "react-router-dom";

const ProjectCard = ({
  project,
  showActions = false,
  onDelete,
  onEdit,
  loadingDeleteProject,
}) => {
  return (
    <div className="relative bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {showActions && (
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white shadow hover:bg-blue-700"
            onClick={() => onEdit(project._id)}
          >
            Edit
          </button>

          <button
            disabled={loadingDeleteProject}
            className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white shadow hover:bg-blue-700"
            onClick={() => onDelete(project._id)}
          >
            Delete
          </button>
        </div>
      )}
      <Link to={`/project/${project._id}`}>
        <img
          src={project.projectImage}
          alt={project.projectName}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-5">
        <Link to={`/project/${project._id}`}>
          <h5 className="text-xl font-semibold">{project.projectName}</h5>
        </Link>

        <p className="mt-2 min-h-20 text-gray-600">
          {project.projectDescription}
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
          >
            Live Demo
          </a>

          <a
            href={project.github}
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
