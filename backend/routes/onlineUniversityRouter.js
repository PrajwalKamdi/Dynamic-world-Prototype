import express from 'express'
import { getAllOnlineUniversities, insertManyUniversities, getUniversityById } from '../controller/OnlineUniversityController.js';
export const onlineUniversityRouter = express.Router();
onlineUniversityRouter.route('/createOnlineUniversities').post(insertManyUniversities);
onlineUniversityRouter.route('/onlineUniversities').get(getAllOnlineUniversities);
onlineUniversityRouter.route('/onlineUniversity').get(getUniversityById);

