import colors from "colors";
import dotenv from "dotenv";

import connectDB from "#config/db.config.js";
import UserModel from "#models/user.model.js";
import PortfolioModel from "#models/portfolio.model.js";
import users from "#data/user.data.js";
import portfolios from "#data/portfolio.data.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await UserModel.deleteMany();
    await PortfolioModel.deleteMany();

    const createdUsers = await UserModel.insertMany(users);
    const sampleportfolios = portfolios.map((portfolio, index) => {
      return {
        ...portfolio,
        user: createdUsers[index]._id,
      };
    });
    await PortfolioModel.insertMany(sampleportfolios);
    console.log(`Portfolio data imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error.message}`.red.underline);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await UserModel.deleteMany();
    await PortfolioModel.deleteMany();
    console.log(`Portflio data deleted`.red.inverse);
    process.exit();
  } catch (error) {
    cosole.log(`error:${error}`.red.underline);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
