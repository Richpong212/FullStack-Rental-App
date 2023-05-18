"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./../validation/index");
const property_validation_1 = require("./../validation/property.validation");
const user_middleware_1 = require("./../middleware/user.middleware");
const property_controller_1 = require("./../controllers/property.controller");
const express_1 = require("express");
const propertyRouter = (0, express_1.Router)();
// create property
propertyRouter.post("/", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, property_validation_1.propertyValidation, index_1.validate, property_controller_1.createProperty);
// read all properties
propertyRouter.get("/", property_controller_1.readAllProperties);
// read property by slug
propertyRouter.get("/:slug", property_controller_1.readPropertyBySlug);
// update property by id
propertyRouter.put("/:id", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, property_controller_1.updatePropertyById);
// delete property by id
propertyRouter.delete("/:id", user_middleware_1.isLoggedIn, user_middleware_1.isAdmin, property_controller_1.deletePropertyById);
exports.default = propertyRouter;
