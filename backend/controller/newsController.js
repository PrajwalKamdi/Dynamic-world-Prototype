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
