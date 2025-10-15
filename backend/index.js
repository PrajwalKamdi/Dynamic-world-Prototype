import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors'
import { connectDb } from './config/databaseConnection.js';
import { onlineUniversityRouter } from './routes/onlineUniversityRouter.js';
import { distanceUniversityRouter } from './routes/distanceUniversity.js';
import { regularAddmissionRouter } from './routes/regularAddmissionRoute.js';
import MBBSRouter from './routes/MBBSRoute.js';
import Engineering from './model/Engineering.js';
import EngineeringRouter from './routes/EngineeringRoute.js';
import countryRouter from './routes/countryRoute.js';
configDotenv();
const server = express();
const PORT = process.env.PORT;
connectDb();
server.use(express.json());
server.use(cors());
server.use('/api/v1/', onlineUniversityRouter)
server.use('/api/v1/', distanceUniversityRouter)
server.use('/api/v1/', regularAddmissionRouter)
server.use('/api/v1/', MBBSRouter)
server.use('/api/v1/', EngineeringRouter)
server.use('/api/v1', countryRouter)
server.listen(PORT, () => {
  console.log("Setup Successful!")
});