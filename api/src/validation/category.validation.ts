import { check } from "express-validator";

// register user validation
export const categoryValidation = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Please provide your category name")
    .isLength({ min: 2 }),
];
