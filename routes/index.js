import {Router} from 'express';
import { DisplayHomePage, DisplaySurveyPage } from '../controllers/index.js';
import { DisplayNewSurveyPage} from '../controllers/createNewSurvey.js';

const router = Router();

router.get('/', DisplayHomePage);
router.get('/survey', DisplaySurveyPage);
router.get('/createNewSurvey', DisplayNewSurveyPage);
export default router;