import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
 
    username:{
        type:String,
        required:[true,"please provied username"],
    },

    description: String,
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
    // name: String,
    // description: String,
    // img: {
    //   data: Buffer, // Store binary image data
    //   contentType: String, // Store content type (e.g., image/png, image/jpeg)
    // }
  
})
const addjuryview=mongoose.models.add_viewjury|| mongoose.model("add_viewjury",userSchema)
export default  addjuryview;
