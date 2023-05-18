import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

//middleware to check if user is logged in
export const isLoggedIn = (req: any, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization)
      return res.status(401).json({ message: "Unauthorized no token" });

    const token = req.headers.authorization;
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

    if (!decoded)
      return res
        .status(401)
        .json({ message: "Unauthorized no token is not valid" });

    req.user = decoded.user;

    next();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

//middleware to check if user is admin
export const isAdmin = async (req: any, res: Response, next: NextFunction) => {
  try {
    const existingUser = await User.findById({ _id: req.user });
    // check if user exists
    if (!existingUser)
      return res.status(400).json({ message: "User not found" });

    // check if user is admin
    if (!existingUser.isAdmin) {
      return res
        .status(401)
        .json({ message: "Unauthorized user is not admin" });
    }

    next();
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
