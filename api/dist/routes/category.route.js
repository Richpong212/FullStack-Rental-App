"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_controller_1 = require("./../controllers/category.controller");
const category_validation_1 = require("./../validation/category.validation");
const validation_1 = require("../validation");
const user_middleware_1 = require("../middleware/user.middleware");
const express_1 = require("express");
const categoryRouter = (0, express_1.Router)();
// create a category
categoryRouter.post("/", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, category_validation_1.categoryValidation, validation_1.validate, category_controller_1.createCategory);
// read all categories
categoryRouter.get("/", category_controller_1.getCategories);
// read one category by slug
categoryRouter.get("/:slug", category_controller_1.getCategoryById);
// update a category by ID
categoryRouter.put("/:id", category_controller_1.updateCategoryById);
// delete a category by ID
categoryRouter.delete("/:id", category_controller_1.deleteCategoryById);
exports.default = categoryRouter;
