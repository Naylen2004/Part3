import express from 'express';
const router = express.Router();

import { DisplayNewSurveyPage } from '../controllers/viewCreatedSurvey.js';
//import newSurveyModel from '../model/surveyNewModel';
//import surveyNewModel from '../model/surveyNewModel.js';
import {newSurvey} from '../model/surveyNewModel.js';

const surveyController = {};

router.get('/viewnewsurvey', DisplayNewSurveyPage);

// router.get('/viewnewsurvey', async (req, res) => {
//     try {
//         const surveys = await newSurvey.find({});
//         res.render('viewnewsurvey', {  newSurvey });
//     } catch (err) {
//         console.log(err);
//         res.redirect('/');
//     }
// });

// router.get('/viewnewsurvey', async (req, res) => {
//     try {
//         const surveys = await newSurvey.find({});
//         res.render('viewnewsurvey', { surveys }); // Change this line
//     } catch (err) {
//         console.log(err);
//         res.redirect('/');
//     }
// });

router.get('/viewnewsurvey', async (req, res) => {
    try {
        const today = new Date();
        const yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
        const surveys = await newSurvey.find({createdAt: {$gte: yesterday}});
        res.render('viewnewsurvey', { newSurvey });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
});


export default router;


