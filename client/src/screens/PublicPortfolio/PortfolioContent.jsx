import AboutMe from "@components/PublicPortfolio/AboutMe";
import ProjectCard from "@components/PublicPortfolio/ProjectCard";
import Social from "@components/PublicPortfolio/Social";

const PortfolioContent = ({ portfolio }) => {
  const projects = portfolio.projects;
  return (
    <div className="col-span-4 sm:col-span-9">
      <div className="bg-white shadow rounded-lg p-6">
        <AboutMe description={portfolio.description} />
        <Social
          github={portfolio.socials.github}
          twitter={portfolio.socials.linkedIn}
          linkedin={portfolio.socials.twitter}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
