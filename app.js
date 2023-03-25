import express from 'express'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import session from 'express-session';

//import { Survey } from './model/surveyModel.js';

// ES2022 Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Import Mongoose Module
import mongoose from 'mongoose';

//Configuration Module
import { Secret, MongoURI } from './config/index.js';

// Import Routes
import indexRouter from './routes/index.js';
import surveyRouter from './routes/survey.js';

//Complete DB Configuration
mongoose.connect(MongoURI);
const db = mongoose.connection;

//Database Listeners
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("Mongo Connection Error"));

//Instantiate the Express Application
const app = express();

//EJS Setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//General Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));

//Auth Step 4: Setup Express Session
app.use(session({

    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

app.use('/', indexRouter);
app.use('/', surveyRouter);

export default app;