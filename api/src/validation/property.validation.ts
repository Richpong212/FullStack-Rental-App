import { check } from "express-validator";

// register user validation
export const propertyValidation = [
  check("title")
    .trim()
    .notEmpty()
    .withMessage("Please provide your property title")
    .isLength({ min: 2 }),

  check("description")
    .trim()
    .notEmpty()
    .withMessage("Please provide your propety description")
    .isLength({ min: 2 }),

  check("price")
    .trim()
    .notEmpty()
    .withMessage("Please provide your property price"),

  check("images").trim().notEmpty().withMessage("Please provide an image"),

  check("location")
    .trim()
    .notEmpty()
    .withMessage("Please provide your property location"),
];
