"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidation = exports.registerUserValidation = void 0;
const express_validator_1 = require("express-validator");
//phone number validation
const phoneRegex = /^(?:\+?233|0)[2-9]\d{8}$/;
// register user validation
exports.registerUserValidation = [
    (0, express_validator_1.check)("fullName")
        .trim()
        .notEmpty()
        .withMessage("Please provide your fullname")
        .isLength({ min: 3 }),
    (0, express_validator_1.check)("email")
        .trim()
        .notEmpty()
        .withMessage("Please provide your email")
        .isEmail(),
    (0, express_validator_1.check)("phone")
        .trim()
        .notEmpty()
        .withMessage("Please provide your phone number")
        .isLength({ min: 10, max: 13 })
        .matches(phoneRegex)
        .withMessage("Please provide a valid phone number"),
    (0, express_validator_1.check)("password")
        .trim()
        .notEmpty()
        .withMessage("Please provide your password")
        .isLength({ min: 6 })
        .isLength({ max: 10 }),
];
// login user validation
exports.loginUserValidation = [
    (0, express_validator_1.check)("email")
        .trim()
        .notEmpty()
        .withMessage("Please provide your email")
        .isEmail(),
    (0, express_validator_1.check)("password")
        .trim()
        .notEmpty()
        .withMessage("Please provide your password")
        .isLength({ min: 6 }),
];
