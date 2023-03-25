import {Router} from 'express';
import {Survey} from '../model/surveyModel.js';

const router = new Router();


router.get('/results', async (req, res) => {
    const surveys = await Survey.find();
    res.render('results', { surveys });
  });

  router.post('/survey', async (req, res) => {
    const survey = new Survey({
      question: 'Question 1: What is your favorite color?',
      answer: req.body.answer1,
      reason: req.body.reason1,
    });
   await survey.save();
  
    const survey2 = new Survey({
      question: 'Question 2: What is your favorite animal?',
      answer: req.body.answer2,
      reason: req.body.reason2,
    });
    await survey2.save();
    
   // res.send('Thanks for taking the survey!');
  });

export default router;