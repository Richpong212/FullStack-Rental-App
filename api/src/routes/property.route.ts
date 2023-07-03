import { validate } from "./../validation/index";
import { propertyValidation } from "./../validation/property.validation";
import { isAdmin, isLoggedIn } from "./../middleware/user.middleware";
import {
  createProperty,
  deletePropertyById,
  readAllProperties,
  readPropertyBySlug,
  updatePropertyById,
} from "./../controllers/property.controller";
import { Router } from "express";

const propertyRouter = Router();

// create property
propertyRouter.post(
  "/",
  isLoggedIn,

  propertyValidation,
  validate,
  createProperty
);

// read all properties
propertyRouter.get("/", readAllProperties);

// read property by slug
propertyRouter.get("/:slug", readPropertyBySlug);

// update property by id
propertyRouter.put("/:id", isLoggedIn, isAdmin, updatePropertyById);

// delete property by id
propertyRouter.delete("/:id", isLoggedIn, isAdmin, deletePropertyById);

export default propertyRouter;
