import {Router} from 'express';
import { DisplayHomePage, DisplaySurveyPage } from '../controllers/index.js';

const router = Router();

router.get('/', DisplayHomePage);
router.get('/survey', DisplaySurveyPage);
  
export default router;