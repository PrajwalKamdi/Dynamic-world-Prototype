import express from "express";
import { countryModel } from "../model/Country.js";
export const addNewCountry = async (req, res) => {
  const countries = req.body;
  if (!Array.isArray(countries)) {
    res.status(400).json({
      success: false,
      message: "Please Provide The Array Of Countries!",
    });
  }
  try {
    const data = await countryModel.insertMany(countries);
    res.status(201).json({
      success: true,
      data: data,
      message: "Data Added SuccessFully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error While Adding the countries",
      error: error.message,
    });
  }
};

export const getAlLCountries = async (req, res) => {
  try {
    const data = await countryModel.find();
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Fetched Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed To Fetched The Data!",
    });
  }
};

export const getAlLCountryByName = async (req, res) => {
  console.log("Hey.................")
  try {
    const countryName = req.query;
    const data = await countryModel.findOne(countryName);
    console.log(data)
    res.status(200).json({
      success: true,
      data: data,
      message: "Data Fetched Successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Failed To Fetched The Data!",
    });
  }
};
