//const express = require('express');
import express from 'express';

//const mongoose = require('mongoose');
import mongoose from 'mongoose';

//const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
const app = express();

import { Survey } from './model/surveyModel.js';


// added just now
app.set('view engine', 'ejs');

//app.set('views', __dirname + '/views');
import path from 'path';

const viewsPath = path.join(process.cwd(), 'views');

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(__dirname + '/public'));

app.get('/survey', (req, res) => {
    res.render('survey');
  });


// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define the routes for the survey website
app.get('/', (req, res) => {
    res.render('index');
  });
// Define the routes for the survey website
// app.get('/', (req, res) => {
//     const homePage = `
//     <h1>Welcome to the survey website!</h1>
//     <button onclick="location.href='/survey'">Take the survey</button>`;
//   res.send(homePage);
  
// });


app.post('/survey', async (req, res) => {
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

app.get('/results', async (req, res) => {
    const surveys = await Survey.find();
    res.render('results', { surveys });
  });
  

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
