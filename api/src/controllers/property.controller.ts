import slugify from "slugify";
import { Request, Response } from "express";
import Property from "../models/property.model";

// create property
export const createProperty = async (req: Request, res: Response) => {
  try {
    // get property data from req body
    const property = req.body;

    // create slug
    const slug = slugify(property.title, { lower: true });
    property.slug = slug;

    // create property
    const createdProperty = await Property.create(property);

    //save property
    await createdProperty.save();

    // return property
    return res.status(201).json({
      message: "Property created successfully",
      property: createdProperty,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// read all properties
export const readAllProperties = async (req: Request, res: Response) => {
  try {
    const properties = await Property.find()
      .populate("category", "-createdAt -updatedAt -__v")
      .populate("owner", "-createdAt -updatedAt -__v -password");

    return res.status(200).json({
      properties,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// read property by slug
export const readPropertyBySlug = async (req: Request, res: Response) => {
  const { slug } = req.params;
  try {
    // find property by slug
    const property = await Property.findOne({ slug })
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
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// update property by id
export const updatePropertyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const property = req.body;

    // find property by id
    const foundProperty = await Property.findById(id);

    // if property not found
    if (!foundProperty)
      return res.status(404).json({ message: "Property not found" });

    // update property
    const updatedProperty = await Property.findByIdAndUpdate(id, property, {
      new: true,
    })
      .populate("category", "-createdAt -updatedAt -__v")
      .populate("owner", "-createdAt -updatedAt -__v -password");

    return res.status(200).json({
      message: "Property updated successfully",
      property: updatedProperty,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

// delete property by id
export const deletePropertyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // find property by id
    const foundProperty = await Property.findById(id);

    // if property not found
    if (!foundProperty)
      return res.status(404).json({ message: "Property not found" });

    // delete property
    await Property.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Property deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
