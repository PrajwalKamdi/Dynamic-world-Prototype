import mongoose from "mongoose";
const Schema = mongoose.Schema({
  collegeName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  branches: {
    type: Array,
    required: true
  }
})

const IIT_NIT_IIIT = mongoose.model("IIT_NIT_IIIT", Schema);
export default IIT_NIT_IIIT;