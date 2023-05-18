"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidation = void 0;
const express_validator_1 = require("express-validator");
// register user validation
exports.categoryValidation = [
    (0, express_validator_1.check)("name")
        .trim()
        .notEmpty()
        .withMessage("Please provide your category name")
        .isLength({ min: 2 }),
];
