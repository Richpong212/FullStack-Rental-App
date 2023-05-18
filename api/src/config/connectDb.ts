import chalk from "chalk";
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(String(process.env.MONGO_URI));
    console.log(chalk.green("Database connected"));
  } catch (err: any) {
    console.error(err.message);
    console.log(chalk.red("Database connection failed"));
    process.exit(1);
  }
};
