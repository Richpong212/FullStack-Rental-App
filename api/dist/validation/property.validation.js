"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propertyValidation = void 0;
const express_validator_1 = require("express-validator");
// register user validation
exports.propertyValidation = [
    (0, express_validator_1.check)("title")
        .trim()
        .notEmpty()
        .withMessage("Please provide your property title")
        .isLength({ min: 2 }),
    (0, express_validator_1.check)("description")
        .trim()
        .notEmpty()
        .withMessage("Please provide your propety description")
        .isLength({ min: 2 }),
    (0, express_validator_1.check)("price")
        .trim()
        .notEmpty()
        .withMessage("Please provide your property price"),
    (0, express_validator_1.check)("images").trim().notEmpty().withMessage("Please provide an image"),
    (0, express_validator_1.check)("location")
        .trim()
        .notEmpty()
        .withMessage("Please provide your property location"),
];
