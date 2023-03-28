
import {newSurvey} from '../model/surveyNewModel.js';
import { DisplayNewSurveyPage} from '../controllers/createNewSurvey.js';

import {Router} from 'express';

const router = Router();

router.get('/createNewSurvey', DisplayNewSurveyPage);
//router.get('/viewresults', DisplayNewSurveyPage);
//export default router;


// new change sunday 12:50 am 


//import { newSurvey } from '../model/surveyNewModel.js';
//import { DisplayNewSurveyPage } from '../controllers/createNewSurvey.js';

//import { Router } from 'express';

//const router = Router();

// GET route to display the form populated with the survey results
router.get('/createNewsurvey', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('createnewsurvey', { newestsurvey }); // Pass the survey results to the EJS template
  } catch (err) {
    console.log(err);
    res.send('Error retrieving newestsurvey results.');
  }
});

// GET route for results
router.get('/results', async (req, res) => {
  try {
    const newestsurvey = await newSurvey.find({});
    res.render('results', { newestsurvey });
  } catch (err) {
    console.log(err);
    console.log("hello world");
    res.redirect('/');
  }
});

// POST route for submitting survey
router.post('/submit', async (req, res) => {
  const newsurvey = new newSurvey({
    quiz: req.body.quiz,
    questions: req.body.questions.map(question => {
      const options = typeof question.options === 'string' ? question.options.split(',') : question.options;
      return {
        question: question.question,
        options: options,
        response: question.response,
      };
    }),
  });
  try {
    await newsurvey.save();
    res.redirect('/viewnewsurvey');
  } catch (err) {
    console.log(err);
    res.redirect('/viewnewsurvey');
  }
});

// router.get('/createNewSurvey', DisplayNewSurveyPage);
// router.get('/viewresults', DisplayNewSurveyPage);
export default router;
