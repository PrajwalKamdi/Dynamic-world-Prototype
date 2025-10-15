import express from 'express'
import { addToRegularAddmission, getAllRegular } from '../controller/RegularAddmissionController.js';

export const regularAddmissionRouter = express.Router();
regularAddmissionRouter.route('/addToRegular').post(addToRegularAddmission);
regularAddmissionRouter.route('/getAllRegular').post(getAllRegular);
