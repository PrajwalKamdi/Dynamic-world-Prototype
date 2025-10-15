import mongoose from "mongoose"
import { configDotenv } from "dotenv"
configDotenv();
export const connectDb = async ()=>{
  const mongoURL = process.env.mongoDb;
  console.log(mongoURL)
  await mongoose.connect(mongoURL);
  console.log("Connection Succcessful!")
}