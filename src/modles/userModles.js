import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"please provied username"],
        unique:true
    },
    email:{
        type:String,
        minLength:5,
        required:[true,"please provied email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please provied password"],
        unique:true
    },
    mobile:{
        type:String,
        required:[true,"please provied mobile"],
        unique:true
    },
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:()=>Date.now()
    },
    forgetPasswordToken:String,
    forgetPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date

})
const User=mongoose.models.users|| mongoose.model("users",userSchema)

export default  User;
