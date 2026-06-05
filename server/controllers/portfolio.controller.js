import PortfolioModel from "#models/portfolio.model.js";

/**
 * @desc		Portfolio Creation
 * @route		POST   /api/v1/portfolio
 * @access	Private
 */
const createPortfolio = async (req, res) => {
  const portfolioExists = await PortfolioModel.findOne({ user: req.user._id });
  if (portfolioExists) {
    res.status(400);
    throw new Error("portfolio already exists");
  }
  const userId = req.user._id;
  const { role, description, image, skills, socials } = req.body;
  const portfolio = await PortfolioModel.create({
    user: userId,
    role,
    description,
    image,
    skills,
    socials,
  });
  if (portfolio) {
    res.status(200).json({
      user: portfolio.user,
      role: portfolio.role,
      description: portfolio.description,
      image: portfolio.image,
      skills: portfolio.skills,
      socials: portfolio.socials,
    });
  } else {
    res.status(400);
    throw new Error("Invalid portfolio data");
  }
};

/**
 * @desc		Get portfolio
 * @route		GET    /api/v1/portfolio/me
 * @access	Private
 */
const getMyPortfolio = async (req, res) => {
  const portfolio = await PortfolioModel.findOne({ user: req.user._id });
  if (portfolio) {
    res.status(200).json(portfolio);
  } else {
    res.status(404);
    throw new Error("Portfolio does not exist");
  }
};

/**
 * @desc		Update Portfolio
 * @route		PUT    /api/v1/portfolio
 * @access	Private
 */
const updatePortfolio = async (req, res) => {
  const portfolio = await PortfolioModel.findOne({ user: req.user._id });
  if (portfolio) {
    portfolio.role = req.body.role || portfolio.role;
    portfolio.description = req.body.description || portfolio.description;
    portfolio.image = req.body.image || portfolio.image;
    portfolio.skills = req.body.skills || portfolio.skills;
    portfolio.socials = req.body.socials || portfolio.socials;

    const updatedProfile = await portfolio.save();
    res.status(200).json({
      role: updatedProfile.role,
      description: updatedProfile.description,
      image: updatedProfile.image,
      skills: updatedProfile.skills,
      socials: updatedProfile.socials,
    });
  } else {
    res.status(404);
    throw new Error("Portfolio not found");
  }
};

/**
 * @desc		Create Project
 * @route		POST   /api/v1/portfolio/projects
 * @access	Private
 */
const createProject = async (req, res) => {
  const portfolio = await PortfolioModel.findOne({ user: req.user._id });
  if (portfolio) {
    if (portfolio.projects.length >= 6) {
      res.status(400);
      throw new Error("Cant store more than 6 project");
    }
    const project = {
      projectName: req.body.projectName,
      projectImage: req.body.projectImage,
      projectDescription: req.body.projectDescription,
      projectStack: req.body.projectStack,
      github: req.body.github,
      liveLink: req.body.liveLink,
    };
    portfolio.projects.push(project);
    await portfolio.save();
    const newProject = portfolio.projects[portfolio.projects.length - 1];
    res.status(201).json(newProject);
  } else {
    res.status(404);
    throw new Error("Portfolio not found");
  }
};

/**
 * @desc		Get all Projects
 * @route		GET    /api/v1/portfolio/projects
 * @access	Private
 */
const getProjects = async (req, res) => {
  const portfolio = await PortfolioModel.findOne({ user: req.user._id });
  if (!portfolio) {
    res.status(404).json("Portfolio not found");
  }
  const projects = portfolio.projects;
  // console.log(portfolio.projects);

  if (projects.length === 0) {
    res.status(404).json("No project created");
  }
  res.status(200).json(projects);
};

/**
 * @desc		Get project by Id
 * @route		GET    /api/v1/portfolio/projects/:projectId
 * @access	Private
 */
const getProjectById = async (req, res) => {
  const portfolio = await PortfolioModel.findOne({
    user: req.user._id,
  });

  if (!portfolio) {
    res.status(404);
    throw new Error("Portfolio not found");
  }

  const project = portfolio.projects.id(req.params.projectId);

  if (!project) {
    res.status(404);
    throw new Error("Project not found");
  }

  res.status(200).json(project);
};

/**
 * @desc		Update Project
 * @route		PUT    /api/v1/portfolio/projects/:projectId
 * @access	Private
 */
const updateProject = async (req, res) => {
  res.send("Update Project");
};

/**
 * @desc		Delete a project
 * @route		DELETE /api/v1/portfolio/projects/:projectId
 * @access	Private
 */
const deleteProject = async (req, res) => {
  res.send("Delete project");
};

/**
 * @desc	  Portfolio view for all
 * @route		GET    /api/v1/portfolio/:username
 * @access	Public
 */
const getPortfolioByUsername = async (req, res) => {
  res.send("Get portfolio for all");
};

export {
  createPortfolio,
  getMyPortfolio,
  updatePortfolio,
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getPortfolioByUsername,
};
