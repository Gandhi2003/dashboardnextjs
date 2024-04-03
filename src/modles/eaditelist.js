import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  firstname: {
    type: String,
    required: [true, "please provied username"],
  },
  age: {
    type: Number,
    required: [true, "please provied age"],
  },
  Categry: {
    type: String,
    required: [true, "please provied Categry"],
  },
  UserID: {
    type: String,
    required: [true, "please provied UserID"],
  },
  juid: {
    type: Number,
    require: true
  },
  description: String,
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
})

userSchema.pre('save', async function (next) {``
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


const Edite = mongoose.models.jur_view || mongoose.model("jur_view", userSchema)
export default Edite;
