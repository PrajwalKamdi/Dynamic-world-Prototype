import Engineering from "../model/Engineering.js";
import IIT_NIT_IIIT from "../model/IIT_NIT_IIIT.js";
export const addToEngineering = async (req, res) => {
  const list = req.body;
  if (!list) {
    res.status(400).json({
      success: false,
      message: "Please add list of deemed mbbs colleges list"
    })
  }
  try {
    const data = await Engineering.insertMany(list);
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

export const getAllEngineering = async (req, res) => {
  try {
    const data = await Engineering.find();
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

export const addToIIT_NIT_IIIT = async (req, res) => {
  const colleges = req.body;
  if (!colleges) {
    res.status(400).json({
      message: "Please Provide the Array of colleges"
    })
  }
  try {
    const data = await IIT_NIT_IIIT.insertMany(colleges);
    res.status(201).json({
      success: true,
      data: data,
      message: "Colleges Added Successfully!"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }

}

export const getAllIIT = async (req, res) => {
  try {
    const data = await IIT_NIT_IIIT.find();
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Fetched Successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed To Retrive the Data!"
    })
  }
}