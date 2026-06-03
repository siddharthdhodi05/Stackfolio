/**
 * @desc		Portfolio Creation
 * @route		POST   /api/v1/portfolio
 * @access	Private
 */
const createPortfolio = async (req, res) => {
  res.send("Portfolio");
};

/**
 * @desc		Get portfolio
 * @route		GET    /api/v1/portfolio/me
 * @access	Private
 */
const getMyPortfolio = async (req, res) => {
  res.send("Register user");
};

/**
 * @desc		Update Portfolio
 * @route		PUT    /api/v1/portfolio
 * @access	Private
 */
const updatePortfolio = async (req, res) => {
  res.send("updatePortfolio");
};

/**
 * @desc		Create Project
 * @route		POST   /api/v1/portfolio/projects
 * @access	Private
 */
const createProject = async (req, res) => {
  res.send("Get user profile");
};

/**
 * @desc		Get all Projects
 * @route		GET    /api/v1/portfolio/projects
 * @access	Private
 */
const getProjects = async (req, res) => {
  res.send("Update user profile");
};

/**
 * @desc		Get project by Id
 * @route		GET    /api/v1/portfolio/projects/:projectId
 * @access	Private
 */
const getProjectById = async (req, res) => {
  res.send("Update user profile");
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
