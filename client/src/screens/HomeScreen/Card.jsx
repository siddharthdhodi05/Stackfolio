import { useState } from "react";
import ProjectForCard from "./ProjectForCard";
import SkillForCard from "./SkillForCard";
import SharingForCard from "./SharingForCard";

const Card = () => {
  const [section, setSection] = useState("project");
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">
          Everything You Need To Build Your Developer Portfolio
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Showcase your project, highlight your skills, and share your Portfolio
          with recruiters through a single professional link.
        </p>
      </div>
      <div className="border rounded-2xl overflow-hidden shadow-sm">
        {/* Tabs */}
        <div className="grid grid-cols-3 border-b">
          <button
            onClick={() => {
              setSection("project");
            }}
            className="p-4 font-medium bg-indigo-600 text-white"
          >
            Projects
          </button>
          <button
            onClick={() => {
              setSection("skills");
            }}
            className="p-4 font-medium bg-indigo-600 text-white"
          >
            Skills
          </button>
          <button
            onClick={() => {
              setSection("Sharing");
            }}
            className="p-4 font-medium bg-indigo-600 text-white"
          >
            Sharing
          </button>
        </div>
      </div>
      {section === "project" ? (
        <ProjectForCard />
      ) : section === "skills" ? (
        <SkillForCard />
      ) : (
        <SharingForCard />
      )}
    </section>
  );
};

export default Card;
