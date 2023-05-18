import {
  createCategory,
  deleteCategoryById,
  getCategories,
  getCategoryById,
  updateCategoryById,
} from "./../controllers/category.controller";
import { categoryValidation } from "./../validation/category.validation";
import { validate } from "../validation";
import { isLoggedIn, isAdmin } from "../middleware/user.middleware";
import { Router } from "express";

const categoryRouter = Router();

// create a category
categoryRouter.post(
  "/",
  isLoggedIn,
  isAdmin,
  categoryValidation,
  validate,
  createCategory
);

// read all categories
categoryRouter.get("/", getCategories);

// read one category by slug
categoryRouter.get("/:slug", getCategoryById);

// update a category by ID
categoryRouter.put("/:id", updateCategoryById);

// delete a category by ID
categoryRouter.delete("/:id", deleteCategoryById);

export default categoryRouter;
