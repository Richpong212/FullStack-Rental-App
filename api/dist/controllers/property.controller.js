"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyById = exports.updatePropertyById = exports.readPropertyBySlug = exports.readAllProperties = exports.createProperty = void 0;
const slugify_1 = __importDefault(require("slugify"));
const property_model_1 = __importDefault(require("../models/property.model"));
// create property
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // get property data from req body
        const property = req.body;
        // create slug
        const slug = (0, slugify_1.default)(property.title, { lower: true });
        property.slug = slug;
        // create property
        const createdProperty = yield property_model_1.default.create(property);
        //save property
        yield createdProperty.save();
        // return property
        return res.status(201).json({
            message: "Property created successfully",
            property: createdProperty,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createProperty = createProperty;
// read all properties
const readAllProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const properties = yield property_model_1.default.find()
            .populate("category", "-createdAt -updatedAt -__v")
            .populate("owner", "-createdAt -updatedAt -__v -password");
        return res.status(200).json({
            properties,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.readAllProperties = readAllProperties;
// read property by slug
const readPropertyBySlug = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slug } = req.params;
    try {
        // find property by slug
        const property = yield property_model_1.default.findOne({ slug })
            .populate("category", "-createdAt -updatedAt -__v")
            .populate("owner", "-createdAt -updatedAt -__v -password");
        // if property not found
        if (!property)
            return res.status(404).json({ message: "Property not found" });
        // return property
        return res.status(200).json({
            messsage: "Property found",
            property,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.readPropertyBySlug = readPropertyBySlug;
// update property by id
const updatePropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const property = req.body;
        // find property by id
        const foundProperty = yield property_model_1.default.findById(id);
        // if property not found
        if (!foundProperty)
            return res.status(404).json({ message: "Property not found" });
        // update property
        const updatedProperty = yield property_model_1.default.findByIdAndUpdate(id, property, {
            new: true,
        })
            .populate("category", "-createdAt -updatedAt -__v")
            .populate("owner", "-createdAt -updatedAt -__v -password");
        return res.status(200).json({
            message: "Property updated successfully",
            property: updatedProperty,
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.updatePropertyById = updatePropertyById;
// delete property by id
const deletePropertyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // find property by id
        const foundProperty = yield property_model_1.default.findById(id);
        // if property not found
        if (!foundProperty)
            return res.status(404).json({ message: "Property not found" });
        // delete property
        yield property_model_1.default.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Property deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.deletePropertyById = deletePropertyById;
