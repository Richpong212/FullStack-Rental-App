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
exports.isAdmin = exports.isLoggedIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
//middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    try {
        if (!req.headers.authorization)
            return res.status(401).json({ message: "Unauthorized no token" });
        const token = req.headers.authorization;
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!decoded)
            return res
                .status(401)
                .json({ message: "Unauthorized no token is not valid" });
        req.user = decoded.user;
        next();
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.isLoggedIn = isLoggedIn;
//middleware to check if user is admin
const isAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield user_model_1.default.findById({ _id: req.user });
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
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.isAdmin = isAdmin;
