import mongoose from "mongoose";

// const userSchema=new mongoose.Schema({
//     first_name:{
//         type:String,
//         required:[true,"please provied username"],
//     },
//     last_name:{
//         type:String,
//         required:[true,"please provied username"],
//     },
//     email:{
//         type:String,
//         minLength:5,
//         required:[true,"please provied email"],
//     },
    
//     mobile:{
//         type:String,
//         required:[true,"please provied mobile"],
//     },
//     isVerfied:{
//         type:Boolean,
//         default:false
//     },
//     isAdmin:{
//         type:Boolean,
//         default:false
//     },
//     createdAt:{
//         type:Date,
//         default:()=>Date.now()
//     },
//     forgetPasswordToken:String,
//     forgetPasswordTokenExpiry:Date,
//     verifyToken:String,
//     verifyTokenExpiry:Date

// })

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
    
  
})
const Addjurylist=mongoose.models.jurylist|| mongoose.model("jurylist",userSchema)

export default  Addjurylist;
