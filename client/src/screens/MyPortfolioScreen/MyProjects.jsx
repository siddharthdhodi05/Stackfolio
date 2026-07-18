import ProjectCard from "@components/PublicPortfolio/ProjectCard";
import { useDeleteProjectMutation } from "@slices/portfolioApiSlice";
import { toast } from "react-toastify";

const MyProjects = ({ projects }) => {
  const [deleteProject, { isLoading: loadingDeleteProject }] =
    useDeleteProjectMutation();

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
  return (
    <div>
      <div className="text-4xl font-bold text-blue-900 text-center">
        My projects
      </div>
      <div className="flex justify-center my-10">
        {!(projects.length >= 6) && (
          <button className="w-full mx-40 py-1.5 bg-blue-500 text-white rounded-2xl">
            Add Project
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            onDelete={handleDelete}
            showActions
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
