import mongoose from 'mongoose'
const newsSchema = mongoose.Schema(
  {
    newsTitle: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
const News = mongoose.model("News", newsSchema);
export default News;