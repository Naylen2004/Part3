//const mongoose = require('mongoose');
// Connect to the database
// mongoose.connect('mongodb://localhost/survey-website', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const surveySchema = new Schema({
//   question1: String,
//   answer1: String,
//   reason1: String,
//   question2: String,
//   answer2: String,
//   reason2: String,
// });

const surveySchema = new Schema({
  question: String,
  answer: String,
  reason: String,
});

//const Survey = mongoose.model('Survey', surveySchema);
export const Survey = mongoose.model("Survey", surveySchema);

//module.exports = Survey;
//export default  mongoose.model("Survey", surveySchema);