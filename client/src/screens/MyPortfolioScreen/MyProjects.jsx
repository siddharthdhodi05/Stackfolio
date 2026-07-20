import ProjectCard from "@components/PublicPortfolio/ProjectCard";
import { useDeleteProjectMutation } from "@slices/portfolioApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyProjects = ({ projects }) => {
  const [deleteProject, { isLoading: loadingDeleteProject }] =
    useDeleteProjectMutation();

  const navigate = useNavigate();

  const handleDelete = async (projectId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmed) return;
    try {
      await deleteProject(projectId).unwrap();
      toast.success("Project Deleted");
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  const handleEdit = async (projectId) => {
    try {
      await navigate(`/MyPortfolio/project/${projectId}`);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <div className="text-4xl font-bold text-blue-900 text-center">
        My projects
      </div>
      <div className="flex justify-center my-10">
        {projects.length < 6 && (
          <Link
            to={"/project/new"}
            className="mx-40 flex w-full justify-center rounded-2xl bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            Add Project
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            loadingDeleteProject={loadingDeleteProject}
            key={project._id}
            onDelete={handleDelete}
            showActions
            project={project}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
