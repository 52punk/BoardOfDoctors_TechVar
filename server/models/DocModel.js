import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  degree: String,
  specialist: String,
  picture: String,
  area: String,
  experience: {
    type: Number,
    default: 0,
  },
  fee: {
    type: Number,
    default: 500,
  },
});

let DocModel = mongoose.model("docModel", postSchema);

export default DocModel;
