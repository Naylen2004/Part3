
import express from 'express';
const app = express();
import {newSurvey} from '../model/surveyNewModel.js';
//import newSurveyModel from '../model/surveyNewModel';
const surveyController = {};
export function DisplayNewSurveyPage(req, res, next) {
    res.render('viewnewsurvey');
  }

//   app.get('/', async (req, res) => {
//     const surveys = await newSurvey.find();
//     res.render('index', { surveys: surveys });
//   });


  // This is just an example, replace with your actual data retrieval logic
// const newestsurvey = await getNewestSurvey();

// res.render('viewnewsurvey', {
//   newestsurvey: newestsurvey
// });




