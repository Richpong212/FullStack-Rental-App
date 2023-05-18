"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_validation_1 = require("./../validation/user.validation");
const userRouter_controller_1 = require("./../controllers/userRouter.controller");
const express_1 = require("express");
const validation_1 = require("../validation");
const user_middleware_1 = require("../middleware/user.middleware");
const userRouter = (0, express_1.Router)();
// register user
userRouter.post("/register", user_validation_1.registerUserValidation, validation_1.validate, userRouter_controller_1.registerUser);
// activate user
userRouter.get("/activate/:token", userRouter_controller_1.activateAccount);
// login user
userRouter.post("/login", userRouter_controller_1.loginUser);
//forgot password
userRouter.post("/forgot-password", userRouter_controller_1.forgotPassword);
// reset password
userRouter.post("/reset-password", userRouter_controller_1.resetPassword);
// get a user
userRouter.get("/:id", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, userRouter_controller_1.getUser);
// get all users
userRouter.get("/", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, userRouter_controller_1.getUsers);
// update a user
userRouter.put("/:id", user_middleware_1.isLoggedIn, userRouter_controller_1.updateUser);
// delete a user
userRouter.delete("/:id", user_middleware_1.isLoggedIn, userRouter_controller_1.deleteUser);
exports.default = userRouter;
