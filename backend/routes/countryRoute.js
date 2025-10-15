import express from 'express';
import { addNewCountry, getAlLCountries, getAlLCountryByName } from '../controller/CountryController.js';
const countryRouter = express.Router();
countryRouter.route('/addCounties').post(addNewCountry);
countryRouter.route('/getCountries').get(getAlLCountries);
countryRouter.route('/country').get(getAlLCountryByName);
export default countryRouter;