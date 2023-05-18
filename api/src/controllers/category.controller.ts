import { Request, Response } from "express";
import slugify from "slugify";
import Category from "../models/category.model";

// Create a new category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    // Check if category already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists!" });
    }

    // Create new category
    const newCategory = new Category({
      name,
      description,
      slug: slugify(name),
    });
    await newCategory.save();

    return res.status(200).json({
      message: "Category created successfully!",
      category: newCategory,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Read all categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Read one category by ID
export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(category);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Update a category by ID
export const updateCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: "Category updated successfully!",
      category: updatedCategory,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete a category by ID
export const deleteCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({
      message: "Category deleted successfully!",
      category: deletedCategory,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
