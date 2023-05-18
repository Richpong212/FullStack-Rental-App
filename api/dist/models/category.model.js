"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const categorySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please provide your category name"],
        trim: true,
        unique: true,
    },
    description: {
        type: String,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, {
    timestamps: true,
});
const Category = mongoose_1.default.model("Category", categorySchema);
exports.default = Category;
