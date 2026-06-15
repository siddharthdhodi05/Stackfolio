import AboutMe from "@components/PublicPortfolio/AboutMe";
import ProjectCard from "@components/PublicPortfolio/ProjectCard";
import Social from "@components/PublicPortfolio/Social";

const PortfolioContent = () => {
  const projects = [
    {
      _id: "1",
      title: "E-Commerce Website",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB.",
      image:
        "https://storage-for-tutors.ams3.cdn.digitaloceanspaces.com/tenant/651456610067eba9d6188aac/page/heroImage/fed7418e-d336-48b1-ba9c-284ff4562b3f.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/ecommerce",
    },
    {
      _id: "2",
      title: "Portfolio Builder",
      description:
        "A platform where developers can create and showcase their portfolios online.",
      image:
        "https://whitescholars.com/wp-content/uploads/2026/06/MERN-Stack-Developers-Using-AI-in-2026.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/portfolio-builder",
    },
    {
      _id: "3",
      title: "Chat Application",
      description:
        "A real-time chat application with authentication and private messaging.",
      image:
        "https://www.skillvertex.com/blog/wp-content/uploads/2023/11/Data-Science-2024-01-03T114324.166-1.png",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/chat-app",
    },
    {
      _id: "4",
      title: "Task Manager",
      description:
        "A productivity app for managing projects, tasks, and deadlines efficiently.",
      image:
        "https://www.designveloper.com/wp-content/uploads/2020/09/best-project-management-platforms-featured-image-scaled-1-1024x578.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/task-manager",
    },
    {
      _id: "5",
      title: "Expense Tracker",
      description:
        "Track expenses, categorize spending, and visualize financial insights.",
      image:
        "https://i.ytimg.com/vi/stcihX2eavw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcPxy1CSGZK8LLK-SlqNPvKzYxRg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/expense-tracker",
    },
    {
      _id: "6",
      title: "Learning Management System",
      description:
        "An LMS platform for creating courses, enrolling students, and tracking progress.",
      image:
        "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example/lms-platform",
    },
  ];
  return (
    <div className="col-span-4 sm:col-span-9">
      <div className="bg-white shadow rounded-lg p-6">
        <AboutMe />
        <Social
          github={"https://github.com/siddharthdhodi05"}
          twitter={"https://github.com/siddharthdhodi05"}
          linkedin={"https://github.com/siddharthdhodi05"}
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
