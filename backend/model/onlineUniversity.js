import mongoose from 'mongoose'
const onlineUniversitySchema = new mongoose.Schema({
  universityName: { type: String, required: true, unique: true, trim: true },
  location: { type: String, required: true, trim: true },
  establish: { type: String, required: true, trim: true },
  shortDescription: { type: String, required: true, trim: true },

  about: [{ type: String, required: true }],

  onlineEducation: [{ type: String, required: true }],

  universityProgram: [
    { program: { type: String, required: true }, specialization: { type: String, required: true } }
  ],

  image: [{ type: String }],

  universityRanking: [{ type: String, required: true }],

}, { timestamps: true });

export const onlineUniversity = mongoose.model("onlineUniversity", onlineUniversitySchema);
