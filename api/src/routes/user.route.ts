import { registerUserValidation } from "./../validation/user.validation";
import {
  activateAccount,
  forgotPassword,
  getUser,
  getUsers,
  loginUser,
  registerUser,
  resetPassword,
  updateUser,
  deleteUser,
} from "./../controllers/userRouter.controller";
import { Router } from "express";
import { validate } from "../validation";
import { isLoggedIn, isAdmin } from "../middleware/user.middleware";

const userRouter = Router();

// register user
userRouter.post("/register", registerUserValidation, validate, registerUser);

// activate user
userRouter.get("/activate/:token", activateAccount);

// login user
userRouter.post("/login", loginUser);

//forgot password
userRouter.post("/forgot-password", forgotPassword);

// reset password
userRouter.post("/reset-password", resetPassword);

// get a user
userRouter.get("/:id", isLoggedIn, isAdmin, getUser);

// get all users
userRouter.get("/", isLoggedIn, isAdmin, getUsers);

// update a user
userRouter.put("/:id", isLoggedIn, updateUser);

// delete a user
userRouter.delete("/:id", isLoggedIn, deleteUser);

export default userRouter;
