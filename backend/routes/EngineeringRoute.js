import express from 'express';
import { addToEngineering, addToIIT_NIT_IIIT, getAllEngineering, getAllIIT } from '../controller/EngineeringController.js'
const EngineeringRouter = express.Router();
EngineeringRouter.route('/addToEngineering').post(addToEngineering);
EngineeringRouter.route('/getAllEngineering').get(getAllEngineering);
EngineeringRouter.route('/addToIITList').post(addToIIT_NIT_IIIT);
EngineeringRouter.route('/getFromIITList').get(getAllIIT);
export default EngineeringRouter;