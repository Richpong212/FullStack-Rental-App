import mongoose, { Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  description: string;
}

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your category name"],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
