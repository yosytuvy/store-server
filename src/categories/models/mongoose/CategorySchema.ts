import { model, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    image: {type: String, required: true}
  },
  { versionKey: "" }
);

const Category = model("category", CategorySchema);

export default Category;
