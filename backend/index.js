import cors from 'cors';
import { configDotenv } from 'dotenv';
import express from 'express';
import { connectDb } from './config/databaseConnection.js';
import EngineeringRouter from './routes/EngineeringRoute.js';
import MBBSRouter from './routes/MBBSRoute.js';
import countryRouter from './routes/countryRoute.js';
import { distanceUniversityRouter } from './routes/distanceUniversity.js';
import { distanceUniversityRouterV2 } from './routes/distanceUniversityV2.js';
import dvoc_mvoc_bvoc_Router from './routes/dvoc_mvoc_bvoc_route.js';
import mbaInIndiaRouter from './routes/mbaInIndiaRoute.js';
import mbbsInAbroadRouter from './routes/mbbsInAbroadRouter.js';
import { onlineUniversityRouter } from './routes/onlineUniversityRouter.js';
import { onlineUniversityRouterV2 } from './routes/onlineUniversityRouterV2.js';
import skillCourseRouter from './routes/skillCourseRoute.js';
import regularEducationRouter from './routes/regularEducationRouter.js';
import newsRouter from './routes/newsRoute.js';
configDotenv();
const server = express();
const PORT = process.env.PORT;
connectDb();
server.use(express.json());
server.use(cors());
server.use('/api/v1/', onlineUniversityRouter)
server.use('/api/v1/', onlineUniversityRouterV2)
server.use('/api/v1/', distanceUniversityRouter)
server.use('/api/v1/', distanceUniversityRouterV2)
server.use('/api/v1', regularEducationRouter)
server.use('/api/v1/', MBBSRouter)
server.use('/api/v1/', EngineeringRouter)
server.use('/api/v1', countryRouter)
server.use('/api/v1', skillCourseRouter)
server.use('/api/v1/', dvoc_mvoc_bvoc_Router);
server.use('/api/v1/', mbbsInAbroadRouter)
server.use('/api/v1/', mbaInIndiaRouter)
server.use('/api/v1/', newsRouter)

server.listen(PORT, '0.0.0.0', () => {
  console.log("Setup Successful!")
});