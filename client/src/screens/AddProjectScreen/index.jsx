import ProjectForm from "@components/MyPortfolio/ProjectForm";
import { useCreateProjectMutation } from "@slices/portfolioApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProject = () => {
  const [createProject, { isLoading: loadingCreateProject }] =
    useCreateProjectMutation();
  const navigate = useNavigate();
  const submitHandler = async (formData) => {
    try {
      await createProject(formData).unwrap();
      toast.success("Project created");
      navigate("/MyPortfolio");
    } catch (error) {
      toast.error(error.data.message);
    }
  };
  return (
    <div className="bg-white">
      <div className=" mx-auto pt-10 max-w-3xl">
        <div className=" text-4xl font-bold text-blue-900">
          Add your Project
        </div>
        <ProjectForm
          onSubmit={submitHandler}
          loadingCreateProject={loadingCreateProject}
        />
      </div>
    </div>
  );
};

export default AddProject;
