import mongoose from 'mongoose'

const EngineeringSchema = mongoose.Schema({
  collegeName: {
    type: String,
    required: true,
  },
  collegeState: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  collgeCode: {
    type: Number,
    required: false
  }
}, { timestamps: true });

const Engineering = mongoose.model("Engineering", EngineeringSchema);
export default Engineering;