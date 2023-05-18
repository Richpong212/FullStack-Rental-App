"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.genToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const genToken = (user) => {
    return jsonwebtoken_1.default.sign({ user }, String(process.env.JWT_SECRET), {
        expiresIn: "3d",
    });
};
exports.genToken = genToken;
const verifyToken = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(401).send("Access Denied");
    try {
        const verified = jsonwebtoken_1.default.verify(token, String(process.env.JWT_SECRET));
        req.user = verified;
        next();
    }
    catch (error) {
        res.status(400).send("Invalid Token");
    }
};
exports.verifyToken = verifyToken;
