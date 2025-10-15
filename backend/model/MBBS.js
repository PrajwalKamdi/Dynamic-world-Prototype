import mongoose from 'mongoose'

const MBBSInIndiaSchema = mongoose.Schema({
  collegeName: {
    type: String,
    required: true,
  },
  collegeState: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["deemed", "mh_gov", "mh_pvt", "bds_mh_pvt", "bds_mh_gov", "bams_mh_pvt", "bams_mh_gov", "bhms_mh_gov", "bhms_mh_pvt"]
  },
  collgeCode: {
    type: Number,
    required: false
  }
}, { timestamps: true });

const MBBSInIndia = mongoose.model("MBBSInIndia", MBBSInIndiaSchema);
export default MBBSInIndia;