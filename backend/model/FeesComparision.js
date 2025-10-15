import mongoose from "mongoose";
const FeesComparisonSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    educationType: {
      type: String,
      default: "Online Education",
    },
    topc: {
      type: String,
      default: "Fees Comparision",
    },

    shortDescription: {
      type: [String],
      required: true,
    },

    feesComparison: [
      {
        universityName: {
          type: String,
          required: true,
          trim: true,
        },
        feesPerSem: {
          type: Number,
          required: true,
        },
        totalFees: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const FeesComparison = mongoose.model(
  "FeesComparison",
  FeesComparisonSchema
);
