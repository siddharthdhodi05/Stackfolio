import { useEffect, useState } from "react";
import SkillBadge from "./SkillBadge";
import { useUploadImageMutation } from "@slices/portfolioApiSlice";

const PortfolioForm = ({ portfolio, onSubmit, loadingUpdatePortfolio }) => {
  // upload logic
  const [uploadImage, { isLoading: uploading }] = useUploadImageMutation();
  const [image, setImage] = useState("");

  const handleUploadImage = async (e) => {
    const formData = new FormData();

    const file = e.target.files[0];

    if (!file) return;

    formData.append("file", file);

    const result = await uploadImage(formData).unwrap();

    setImage(result.image);
  };

  // form logic
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState([]);
  const [description, setDescription] = useState("");
  const [github, setGitHub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");

  useEffect(() => {
    if (portfolio) {
      setRole(portfolio.role);
      setSkills(portfolio.skills);
      setDescription(portfolio.description);
      setGitHub(portfolio.socials.github);
      setLinkedIn(portfolio.socials.linkedIn);
      setTwitter(portfolio.socials.twitter);
      setImage(portfolio.image);
    }
  }, [portfolio]);

  const [skillInput, setSkillInput] = useState("");

  const handleAddSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (skills.includes(skill)) return;

    setSkills([...skills, skill]);

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill != skillToRemove));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      role,
      description,
      skills,
      image,
      socials: {
        github,
        linkedIn,
        twitter,
      },
    });
  };
  return (
    <form className="mx-auto mt-10 max-w-3xl" onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            {/* Image */}
            <div className="sm:col-span-full">
              <label
                htmlFor="image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2">
                {image ? (
                  <img
                    src={image}
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
            {/* titile */}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Role
              </label>
              <div>
                <input
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* About me*/}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                About Me
              </label>
              <div className="flex gap-2">
                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Skills */}
            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Skills
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
                {skills.map((skill) => (
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
                LinkedIn
              </label>
              <div>
                <input
                  value={linkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                  placeholder="Place your LinkedIn link here"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Twitter
              </label>
              <div>
                <input
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  type="text"
                  placeholder="Paste your twitter here"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-6 flex items-center  gap-x-6">
              <button
                disabled={uploading}
                type="submit"
                className="rounded-md bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {uploading
                  ? "Uploading"
                  : loadingUpdatePortfolio
                    ? "Updating..."
                    : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PortfolioForm;
