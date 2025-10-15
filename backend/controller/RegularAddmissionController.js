import {regularAdmission} from '../model/regularAddmission.js'
export const addToRegularAddmission = async (req, res) => {
  const requestBodyData = req.body;
  if (!Array.isArray(requestBodyData) || requestBodyData.length === 0) {
    return res.status(400).json({ message: "Please provide an array of regular addmission." });
  }

  try {
    const data = await regularAdmission.insertMany(requestBodyData);
    res.status(201).json({
      success: true,
      message: "Universities inserted successfully",
      data: data
    });
  } catch (error) {
    console.error("Error inserting :", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
export const getAllRegular = async (req, res) => {
  try {
    const response = await regularAdmission.find();
    res.status(200).json({
      success: true,
      data: response,
      message: "Regular Addmission fetched successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the Regular Addmission",
      error: error.message
    })
  }
}
