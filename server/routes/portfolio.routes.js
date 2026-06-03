import express from "express";

import {
  createPortfolio,
  createProject,
  deleteProject,
  getMyPortfolio,
  getPortfolioByUsername,
  getProjectById,
  getProjects,
  updatePortfolio,
  updateProject,
} from "#controllers/portfolio.controller.js";
import { protect } from "#middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(protect, createPortfolio).put(protect, updatePortfolio);
router.route("/me").get(protect, getMyPortfolio);

router
  .route("/projects")
  .post(protect, createProject)
  .get(protect, getProjects);

router
  .route("/projects/:projectId")
  .get(protect, getProjectById)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

router.route("/:username").get(getPortfolioByUsername);

export default router;
