import express from 'express';
import { createNewNews, getAllNews } from '../controller/newsController.js';
const newsRouter = express.Router();
newsRouter.route('/createNews').post(createNewNews);
newsRouter.route('/news').get(getAllNews);
export default newsRouter;