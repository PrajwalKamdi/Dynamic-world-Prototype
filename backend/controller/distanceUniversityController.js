
import { distanceUniversity } from "../model/distanceUniversity.js";

export const insertManyDistanceUniversities = async (req, res) => {
  try {
    // Expecting an array of university objects in req.body
    const universities = req.body; // Example: [{universityName, location, ...}, {...}, ...]

    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }

    // Insert many
    const insertedUniversities = await distanceUniversity.insertMany(universities);

    res.status(201).json({
      success: true,
      message: "Universities inserted successfully",
      data: insertedUniversities
    });
  } catch (error) {
    console.error("Error inserting universities:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllDistanceUniversities = async (req, res) => {
  try {
    const response = await distanceUniversity.find();
    res.status(200).json({
      success: true,
      data: response,
      message: "Universities fetched successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the universites",
      error: error.message

    })
  }
}
export const getDistanceUniversityById = async (req, res) => {
  try {
    const universityName = req.query.universityName?.trim()
       const data = await distanceUniversity.findOne({ universityName });
       res.status(200).json({
         success: true,
         data: data,
         message: "University Fetched Successfully!"
       })
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetched the university",
      error: error.message
    })
  }
}
