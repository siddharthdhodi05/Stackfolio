import { useState } from "react";
import SkillBadge from "./SkillBadge";
import { useUploadImageMutation } from "@slices/portfolioApiSlice";

const ProjectForm = ({ onSubmit, loadingCreateProject }) => {
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation();

  // form Logic
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectStack, setProjectStack] = useState([]);
  const [github, setGitHub] = useState([]);
  const [liveLink, setLiveLink] = useState([]);
  const [projectImage, setProjectImage] = useState("");

  // upload logic

  const handleUploadImage = async (e) => {
    const formData = new FormData();

    const file = e.target.files[0];
    if (!file) return;

    formData.append("file", file);
    const result = await uploadImage(formData).unwrap();
    setProjectImage(result.image);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      projectName,
      projectDescription,
      projectImage,
      github,
      liveLink,
      projectStack,
    });
  };

  // skill adding logic

  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (projectStack.includes(skill)) return;

    setProjectStack([...projectStack, skill]);

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setProjectStack(projectStack.filter((skill) => skill != skillToRemove));
  };

  return (
    <form onSubmit={submitHandler} className="mx-auto max-w-3xl ">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            {/* Project Image */}
            <div className="sm:col-span-full">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                {projectImage ? (
                  <img
                    src={projectImage}
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    alt="Portfolio"
                  />
                ) : (
                  <div className="h-40 w-40 rounded-lg border flex items-center justify-center">
                    No Image
                  </div>
                )}
                <input
                  onChange={handleUploadImage}
                  disabled={uploading}
                  type="file"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Project Name */}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Project Name
              </label>
              <div>
                <input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Project Description*/}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="flex gap-2">
                <textarea
                  rows={5}
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  type="text"
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Project Stack */}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Project Stack
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add a skill"
                  className="flex-1 rounded-lg border px-3 py-2"
                />
                <button
                  type="button"
                  onClick={handleAddSkill}
                  className="rounded-lg text-lg bg-indigo-600 px-4 text-white"
                >
                  Add
                </button>
              </div>
            </div>
            <div className="sm:col-span-full border min-h-32 max-h-32 p-6 rounded-lg overflow-auto ">
              <div className="flex flex-wrap gap-2">
                {projectStack.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    onDelete={() => removeSkill(skill)}
                  />
                ))}
              </div>
            </div>
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                GitHub
              </label>
              <div>
                <input
                  value={github}
                  onChange={(e) => setGitHub(e.target.value)}
                  placeholder="Paste your gitHub link here"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                liveLink
              </label>
              <div>
                <input
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  placeholder="Paste your gitHub link here"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center  gap-x-6">
              <button
                disabled={null}
                type="submit"
                className="rounded-md bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {uploading
                  ? "Uploading"
                  : loadingCreateProject
                    ? "Creating..."
                    : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
