"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.deleteUser = exports.updateUser = exports.getUsers = exports.getUser = exports.loginUser = exports.activateAccount = exports.registerUser = void 0;
const genToken_1 = require("./../helpers/genToken");
const sendEmail_1 = require("./../helpers/sendEmail");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const securePassword_1 = require("./../helpers/securePassword");
const user_model_1 = __importDefault(require("../models/user.model"));
// register User
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, email, password, phone } = req.body;
        // check if user already exists
        const user = yield user_model_1.default.findOne({ email });
        if (user)
            return res.status(400).json({ message: "User already exists" });
        // hash password
        const hasedPassword = yield (0, securePassword_1.hashPassword)(password);
        // save user temporarily in a token
        const token = jsonwebtoken_1.default.sign({ fullName, email, password: hasedPassword, phone }, String(process.env.JWT_SECRET), { expiresIn: "10m" });
        // prepare email
        const emailData = {
            email,
            subject: "Account activation link",
            html: `
        <h1>Please use the following link to activate your account</h1>
        <p>${process.env.CLIENT_URL}/activate/${token}</p>
        `,
        };
        // send email
        yield (0, sendEmail_1.sendEmail)(emailData);
        return res
            .status(200)
            .json({ message: "Check your email and activate your account" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
// activate Account
const activateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        // check if token exists
        if (!token)
            return res.status(400).json({ message: "Invalid token" });
        // verify token
        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.JWT_SECRET));
        // check if token is expired
        if (!decoded)
            return res.status(400).json({ message: "Expired token. Try again" });
        // check if user already exists
        const user = yield user_model_1.default.findOne({ email: decoded.email });
        if (user)
            return res.status(400).json({ message: "User already exists" });
        // create new user
        const newUser = new user_model_1.default(Object.assign(Object.assign({}, decoded), { isVerified: true }));
        // save user
        yield newUser.save();
        return res.status(200).json({ message: "Account activated successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.activateAccount = activateAccount;
// login User
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // check if user exists
        const user = yield user_model_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid email or password" });
        // check if password is correct
        const isMatch = yield (0, securePassword_1.comparePassword)(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid email or password" });
        // generate token
        const token = (0, genToken_1.genToken)(user._id);
        return res.status(200).json({
            message: "Login successful",
            user: {
                fullName: user.fullName,
                email: user.email,
                isVerified: user.isAdmin,
                isAdmin: user.isVerified,
            },
            token,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
// Get a single user
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //console.log(req.user); // this is the user object from the token
        const user = yield user_model_1.default.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            message: "User fetched successfully",
            user,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUser = getUser;
// Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find({});
        res.status(200).json(Object.assign({ message: "Users fetched successfully" }, users));
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
// update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { fullName, email } = req.body;
        // check if user exists
        // check if the user exists
        const existingUser = yield user_model_1.default.findById(id);
        if (!existingUser) {
            return res.status(401).json({
                message: "User does not exist",
            });
        }
        const updatedUser = yield user_model_1.default.findByIdAndUpdate(id, { fullName, email }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User updated successfully",
            user: updatedUser,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateUser = updateUser;
// Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield user_model_1.default.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteUser = deleteUser;
// forgot password
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // check if user exists
        const user = yield user_model_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "User not found" });
        // generate token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, String(process.env.JWT_SECRET), { expiresIn: "10m" });
        // hash token
        const hashedToken = yield (0, securePassword_1.hashPassword)(token);
        // save hashed token to user document
        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpires = Date.now() + 600000; // 10 minutes
        yield user.save();
        // prepare email
        const emailData = {
            email,
            subject: "Password reset link",
            html: `
        <h1>Please use the following link to reset your password</h1>
        <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
        `,
        };
        // send email
        yield (0, sendEmail_1.sendEmail)(emailData);
        return res
            .status(200)
            .json({ message: "Reset password link sent to email" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.params;
        const { password } = req.body;
        // check if token is valid
        const user = yield user_model_1.default.findOne({
            resetPasswordToken: yield (0, securePassword_1.hashPassword)(token),
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!user)
            return res.status(400).json({ message: "Invalid or expired token" });
        // hash new password
        const hashedPassword = yield (0, securePassword_1.hashPassword)(password);
        // update user password
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        yield user.save();
        return res.status(200).json({ message: "Password reset successful" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.resetPassword = resetPassword;
