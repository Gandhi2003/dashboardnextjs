import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    // pay_uid: {
    //     type: String,
    //     required: true

    // },
    rapay: {
        type: String,
        required: true
    },
    pay: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
})
// productSchema.pre('save', async function (next) {
//     try {
//         if (this.isNew) {
//             const maxJuidDoc = await this.constructor.findOne({}, {}, { sort: { 'pay_uid': -1 } });
//             let maxJuid = maxJuidDoc ? maxJuidDoc.pay_uid : 0;
//             this.pay_uid = maxJuid + 1;
//         }
//         next();
//     } catch (error) {
//         next(error);
//     }
// });
const paymobile = mongoose.models.paymobile || mongoose.model("paymobile", productSchema)
export default paymobile;

