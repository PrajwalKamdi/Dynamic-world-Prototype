import express from 'express'
import { getAllDistanceUniversities, getDistanceUniversityById, insertManyDistanceUniversities } from '../controller/distanceUniversityController.js';
export const distanceUniversityRouter = express.Router();
distanceUniversityRouter.route('/createDistanceUniversities').post(insertManyDistanceUniversities);
distanceUniversityRouter.route('/getAllUniversities').get(getAllDistanceUniversities);
distanceUniversityRouter.route('/distanceUniversity').get(getDistanceUniversityById);
