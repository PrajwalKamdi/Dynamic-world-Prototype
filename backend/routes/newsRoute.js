import express from 'express';
import { createNewNews, deleteNews, getAllNews } from '../controller/newsController.js';
const newsRouter = express.Router();
newsRouter.route('/createNews').post(createNewNews);
newsRouter.route('/news').get(getAllNews);
newsRouter.route('/news/:id').delete(deleteNews);
export default newsRouter;