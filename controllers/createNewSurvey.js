 

//sunday 12:46 am change
// Remove these route definitions
import express from 'express';
const { urlencoded, json } = express;
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { newSurvey } from '../model/surveyNewModel.js';
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
  res.render('index');
});
DisplayNewSurveyPage
// Make sure this function is defined correctly
export function DisplayNewSurveyPage(req, res, next) {
  res.render('createnewsurvey');
}

// Remove the route definitions from this file as mentioned in the previous response

export default app;
