import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.config.js";

dotenv.config();

const port = process.env.PORT || 5001;

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("API is running... ");
});

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${port}`,
  );
});
