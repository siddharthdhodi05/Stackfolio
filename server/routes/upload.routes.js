// routes/upload.routes.js

import express from "express";
import { protect } from "#middleware/auth.middleware.js";
import { singleUpload } from "#middleware/upload.middleware.js";
import { uploadImage } from "#controllers/upload.controller.js";

const router = express.Router();

router.post("/", protect, singleUpload, uploadImage);

export default router;
