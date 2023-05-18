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
exports.deleteCategoryById = exports.updateCategoryById = exports.getCategoryById = exports.getCategories = exports.createCategory = void 0;
const slugify_1 = __importDefault(require("slugify"));
const category_model_1 = __importDefault(require("../models/category.model"));
// Create a new category
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        // Check if category already exists
        const existingCategory = yield category_model_1.default.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exists!" });
        }
        // Create new category
        const newCategory = new category_model_1.default({
            name,
            description,
            slug: (0, slugify_1.default)(name),
        });
        yield newCategory.save();
        return res.status(200).json({
            message: "Category created successfully!",
            category: newCategory,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createCategory = createCategory;
// Read all categories
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.default.find();
        return res.status(200).json(categories);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getCategories = getCategories;
// Read one category by ID
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { slug } = req.params;
        const category = yield category_model_1.default.findOne({ slug });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json(category);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getCategoryById = getCategoryById;
// Update a category by ID
const updateCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedCategory = yield category_model_1.default.findByIdAndUpdate(id, { name, description }, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json({
            message: "Category updated successfully!",
            category: updatedCategory,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updateCategoryById = updateCategoryById;
// Delete a category by ID
const deleteCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCategory = yield category_model_1.default.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        return res.status(200).json({
            message: "Category deleted successfully!",
            category: deletedCategory,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deleteCategoryById = deleteCategoryById;
