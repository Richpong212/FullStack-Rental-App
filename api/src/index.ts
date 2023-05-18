import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import express, { Request, Response, NextFunction } from "express";
import { connectDb } from "./config/connectDb";
import userRouter from "./routes/user.route";
import dev from "./config/index";
import categoryRouter from "./routes/category.route";
import propertyRouter from "./routes/property.route";

config();

const app = express(); // app isntance of express
const port = dev.dev.port; // port number from config
// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// base route of the app
app.get("/", (_req: Request, res: Response) => {
  return res.json("Welcome to rental service API");
});

// routes
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/properties", propertyRouter);

// connect to database
const db = async () => {
  await connectDb();
};
db();

// start the server
app.listen(port, async () => {
  return console.log(`Server is listening on ${port}`);
});

// not found handler
app.use((_req: Request, res: Response) => {
  return res.status(404).json({ message: "Route Not found" });
});

// error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  return res.status(500).json({ message: err.message });
});
