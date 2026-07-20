import ProjectForm from "@components/MyPortfolio/ProjectForm";
import {
  useGetPortfolioQuery,
  useUpdateProjectMutation,
} from "@slices/portfolioApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProject = () => {
  const { projectId } = useParams();
  const { data: portfolio } = useGetPortfolioQuery();

  const projects = portfolio?.projects || [];

  const projectToEdit = projects.find((project) => project._id === projectId);

  const [updateProject, { isLoading: loadingEditProject }] =
    useUpdateProjectMutation();

  const navigate = useNavigate();

  const submitHandler = async (formData) => {
    try {
      await updateProject({ projectId, formData }).unwrap();
      toast.success("Project Updated");
      navigate("/MyPortfolio");
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <div className="bg-white">
      <div className=" mx-auto pt-10 max-w-3xl">
        <div className=" text-4xl font-bold text-blue-900">
          Update Your Portfolio
        </div>
        <ProjectForm
          project={projectToEdit}
          onSubmit={submitHandler}
          loading={loadingEditProject}
        />
      </div>
    </div>
  );
};

export default EditProject;
