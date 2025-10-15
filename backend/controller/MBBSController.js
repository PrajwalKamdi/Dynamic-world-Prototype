import MBBSInIndia from "../model/MBBS.js";
export const addToMBBS= async (req, res) => {
  const list = req.body;
  if (!list) {
    res.status(400).json({
      success: false,
      message: "Please add list of deemed mbbs colleges list"
    })
  }
  try {
    const data = await MBBSInIndia.insertMany(list);
    res.status(201).json({
      success: true,
      message: "Colleges Added Successfully",
      data: data
    })

  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    })
  }
}

export const getAllMBBS = async (req, res) => {
  try {
    const data = await MBBSInIndia.find();
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Fetched Successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
