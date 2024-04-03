import mongoose from "mongoose";

const useroptSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"please provied email"],
    },
    otp:{
        type:String,
    },
    description: String,
    createdAt: {
      type: Date,
      default: () => Date.now(),
    },
   
  
})
const useropt=mongoose.models.opt|| mongoose.model("opt",useroptSchema)

export default  useropt;