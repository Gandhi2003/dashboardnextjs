import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "please provied username"],
    },
    description: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
})
const mobileview = mongoose.models.mobile_view || mongoose.model("mobile_view", userSchema)
export default mobileview;