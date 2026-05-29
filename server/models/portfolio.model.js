import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, "Project's name is required"],
    trim: true,
  },
  projectImage: {
    type: String,
    required: [true, "Project image is required"],
  },
  projectDescription: {
    type: String,
    required: [true, "Project description is required"],
  },
  projectStack: [
    {
      type: String,
      required: [true, "Please mention the stack used"],
    },
  ],
  github: {
    type: String,
    match: /^https?:\/\/.+/,
  },
  liveLink: {
    type: String,
  },
});

const portfolioSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    skills: [{ type: String }],
    socials: {
      github: { type: String, match: /^https?:\/\/.+/ },
      linkedIn: { type: String, match: /^https?:\/\/.+/ },
      twitter: { type: String, match: /^https?:\/\/.+/ },
    },
    projects: [projectSchema],
  },
  {
    timestamps: true,
    collection: "portfolios",
  },
);

const PortfolioModel = mongoose.model("PortfolioModel", portfolioSchema);

export default PortfolioModel;
