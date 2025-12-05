import News from "../model/nesws.js";
export const createNewNews = async (req, res) => {
  const { newsTitle, link } = req.body;

  try {
    const news = new News({ newsTitle, link });  // create document instance
    const savedNews = await news.save();         // save it

    res.status(200).json({
      message: "New News Added Successfully!",
      data: savedNews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed To Add The News!",
      error: error.message,
    });
  }
};


export const getAllNews = async (req, res) => {
  try {
    const nesws = await News.find();
    res.status(200).json({
      message: "News Fetched SuccessFully!",
      data: nesws
    })
  } catch (error) {
    res.status(200).json({
      message: "Failed To Fetched!",
      error: error.message
    })
  }
}
export const deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNews = await News.findByIdAndDelete(id);
    
    if (!deletedNews) {
      return res.status(404).json({
        message: "News not found!",
      });
    }

    res.status(200).json({
      message: "News deleted successfully!",
      data: deletedNews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete the news!",
      error: error.message,
    });
  }
};