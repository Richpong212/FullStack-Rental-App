"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: [true, "Please provide your fullname"],
        trim: true,
        minlength: [3, "Fullname must be at least 3 characters"],
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        trim: true,
        minlength: [10, "Phone number must be at least 10 characters"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide your password"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters"],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    resetPasswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Number,
    },
}, { timestamps: true });
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
