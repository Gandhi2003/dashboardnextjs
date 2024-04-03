import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        // unique: true
    },
    date_birth: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
    },
    districts: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
        // unique: true
    },
    juid: {
        type: Number,
        require: true
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

userSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            const maxJuidDoc = await this.constructor.findOne({}, {}, { sort: { 'juid': -1 } });
            let maxJuid = maxJuidDoc ? maxJuidDoc.juid : 0;
            this.juid = maxJuid + 1;
        }
        next();
    } catch (error) {
        next(error);
    }
});

const List = mongoose.models.add_jury || mongoose.model("add_jury", userSchema)

export default List;
