import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  // imagePath: {
  //   type: String,
  //   required: true
  // },
  imagePath: {
    type: String,
    required: true
  },
  imageName: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
  },

})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product;