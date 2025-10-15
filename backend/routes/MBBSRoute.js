import express from 'express';
import {addToMBBS, getAllMBBS, } from '../controller/MBBSController.js'
const MBBSRouter = express.Router();
MBBSRouter.route('/addToMBBS').post(addToMBBS);
MBBSRouter.route('/getAllMBBS').get(getAllMBBS);

export default MBBSRouter;