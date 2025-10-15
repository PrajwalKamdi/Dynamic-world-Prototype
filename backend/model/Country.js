import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  countryName: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  education: {
    type: Array,
    required: true
  },
  listOfUniversity: {
    type: Array,
    required: true
  },
  educationSystem: {
    type: Array,
    required: true
  },
  tuitionFeesAndStudyCost: {
    type: Array,
    required: true
  },
  visaInformation: {
    type: Array,
    required: true
  },
  careerProspects: {
    type: Array,
    required: true
  },
  workRights: {
    type: Array,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

export const countryModel = mongoose.model("countryModel", countrySchema);