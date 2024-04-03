import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  // imagePath: {
  //   type: String,
  //   required: true
  // },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },

})
const Prodmoblile = mongoose.models.Prodmoblile || mongoose.model("Prodmoblile", productSchema)
export default Prodmoblile;