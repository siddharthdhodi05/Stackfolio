import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import cookieParser from "cookie-parser";

import connectDB from "#config/db.config.js";
import { errorHandler } from "#middleware/error.middleware.js";
import userRoutes from "#routes/user.routes.js";
import portfolioRoutes from "#routes/portfolio.routes.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();

app.use(morgan("dev"));

connectDB();

app.use(express.json()); //Request body parsing
app.use(cookieParser());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/portfolio", portfolioRoutes);

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
