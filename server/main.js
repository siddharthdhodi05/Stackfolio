import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "#config/db.config.js";
import { errorHandler } from "#middleware/error.middleware.js";
import userRoutes from "#routes/user.routes.js";
import portfolioRoutes from "#routes/portfolio.routes.js";
import uploadRoutes from "#routes/upload.routes.js";

import cloudinary from "#utils/cloudinary.utils.js";

dotenv.config();
const port = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));

connectDB();

// console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("API Key:", process.env.CLOUDINARY_API_KEY);
// console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://stackfolio-five.vercel.app"],
    credentials: true,
  }),
);

app.use(express.json()); //Request body parsing
app.use(cookieParser());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);
app.use("/api/v1/upload", uploadRoutes);

app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("API is running... ");
});

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`.yellow
      .bold,
  );
});
