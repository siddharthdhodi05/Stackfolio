import ProfileCard from "@components/PublicPortfolio/ProfileCard";
import SkillBadge from "@components/PublicPortfolio/SkillBadge";

const PortfolioSidebar = () => {
  const arr = [
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "PostGrege",
    "Python",
    "SQL",
    "Rust",
    "C++",
    "React-Redux",
    "Data Structure",
    "System Design",
  ];
  return (
    <div className="col-span-4 md:col-span-3  sm:sticky sm:top-24 self-start ">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col items-center">
          <ProfileCard />
          <hr className="my-6 border-t border-gray-300" />
          <div className="flex flex-col">
            <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
              Skills
            </span>
            <div className="flex flex-wrap gap-2">
              {arr.map((skill) => {
                return <SkillBadge key={skill} skill={skill} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSidebar;
