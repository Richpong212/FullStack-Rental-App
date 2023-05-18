"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const propertySchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Please provide your fullname"],
        trim: true,
        minlength: [3, "Fullname must be at least 3 characters"],
    },
    description: {
        type: String,
        required: [true, "Please provide your description"],
        trim: true,
        minlength: [3, "Description must be at least 3 characters"],
        maxlength: [250, "Description must be at most 200 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please provide your price"],
        trim: true,
    },
    deposit: {
        type: Number,
        trim: true,
    },
    region: {
        type: String,
        required: [true, "Please provide your region"],
        trim: true,
    },
    area: {
        type: String,
        required: [true, "Please provide your area"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Please provide your location"],
        trim: true,
    },
    images: {
        //type Array of String
        type: [String],
        required: [true, "Please provide your image"],
        trim: true,
    },
    category: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category",
        trim: true,
        //required: [true, "Please provide your category"],
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        // required: true,
        trim: true,
    },
    rating: {
        type: Number,
        default: 0,
        trim: true,
    },
    size: {
        type: Number,
        trim: true,
    },
    bedroom: {
        type: Number,
        default: 1,
        trim: true,
    },
    bathroom: {
        type: Number,
        default: 1,
        trim: true,
    },
    parking: {
        type: Boolean,
        default: false,
    },
    pet: {
        type: Boolean,
        default: false,
    },
    smoking: {
        type: Boolean,
        default: false,
    },
    balcony: {
        type: Boolean,
        default: false,
    },
    furnished: {
        type: Boolean,
        default: false,
    },
    slug: {
        type: String,
        lowercase: true,
    },
}, { timestamps: true });
const User = mongoose_1.default.model("Property", propertySchema);
exports.default = User;
