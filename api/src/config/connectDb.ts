import chalk from "chalk";
import mongoose from "mongoose";

// Connect to the database
export const connectDb = async () => {
  try {
    // Enable strict mode for queries
    mongoose.set("strictQuery", true);

    // Connect to the MongoDB server using the provided URI from the environment variables
    mongoose.connect(String(process.env.MONGO_URI));

    // Log a success message if the connection is established
    console.log(chalk.green("Database connected"));
  } catch (err: any) {
    // Log any errors that occur during the connection process
    console.error(err.message);
    console.log(chalk.red("Database connection failed"));

    // Terminate the process with a non-zero exit code to indicate failure
    process.exit(1);
  }
};
