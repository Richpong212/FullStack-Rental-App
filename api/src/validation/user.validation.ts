import { check } from "express-validator";

//phone number validation
const phoneRegex = /^(?:\+?233|0)[2-9]\d{8}$/;

// register user validation
export const registerUserValidation = [
  check("fullName")
    .trim()
    .notEmpty()
    .withMessage("Please provide your fullname")
    .isLength({ min: 3 }),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Please provide your email")
    .isEmail(),
  check("phone")
    .trim()
    .notEmpty()
    .withMessage("Please provide your phone number")
    .isLength({ min: 10, max: 13 })
    .matches(phoneRegex)
    .withMessage("Please provide a valid phone number"),

  check("password")
    .trim()
    .notEmpty()
    .withMessage("Please provide your password")
    .isLength({ min: 6 })
    .isLength({ max: 10 }),
];

// login user validation
export const loginUserValidation = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Please provide your email")
    .isEmail(),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Please provide your password")
    .isLength({ min: 6 }),
];
