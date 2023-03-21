const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// added just now
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//*** begin

// // Importing the path module
// const path = require('path');

// // Setting the file path using the path module
// const filePath = path.join(__dirname, 'views', 'survey.ejs');

// // Using the file path in your application
// // For example, if you're using the Express framework:
// app.get('/survey', function(req, res) {
//     res.render(filePath);
//   });

//**** end */


app.use(express.static(__dirname + '/public'));

app.get('/survey', (req, res) => {
    res.render('survey');
  });



// Connect to the database
mongoose.connect('mongodb://localhost/survey-website', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for the survey responses
const surveySchema = new mongoose.Schema({
  question: String,
  answer: String,
  reason: String,
});

// Define the model for the survey responses
const Survey = mongoose.model('Survey', surveySchema);

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the routes for the survey website
app.get('/', (req, res) => {
    const homePage = `
    <h1>Welcome to the survey website!</h1>
    <button onclick="location.href='/survey'">Take the survey</button>`;
  res.send(homePage);
  
});

// app.get('/survey', (req, res) => {
//   res.send(`
//     <form action="/survey" method="post">
//       <label for="question1">Question 1: What is your favorite color?</label>
//       <input type="radio" name="answer1" value="red">Red<br>
//       <input type="radio" name="answer1" value="blue">Blue<br>
//       <input type="radio" name="answer1" value="green">Green<br>
//       <input type="text" name="reason1" placeholder="Why did you choose this answer?"><br><br>
      
//       <label for="question2">Question 2: What is your favorite animal?</label>
//       <input type="radio" name="answer2" value="dog">Dog<br>
//       <input type="radio" name="answer2" value="cat">Cat<br>
//       <input type="radio" name="answer2" value="bird">Bird<br>
//       <input type="text" name="reason2" placeholder="Why did you choose this answer?"><br><br>
      
//       <button type="submit">Submit</button>
      
//     </form>
//     <button onclick="location.href='/results'">View db</button>
    
//   `);
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

  res.send('Thanks for taking the survey!');
});


  
// app.get('/survey', (req, res) => {
//     const surveyPage = `
//       <style>
//         body {
//           background-color: #f0f0f0;
//         }
//         form {
//           border: 1px solid #ccc;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//           background-color: white;
//           max-width: 800px;
//           margin: auto;
//           margin-top: 20px;
//           margin-bottom: 20px;
//           padding: 20px;
//         }
//         h2 {
//           margin-top: 0;
//         }
//         label {
//           display: block;
//           margin-bottom: 10px;
//         }
//         input[type="radio"] {
//           margin-right: 10px;
//         }
//         input[type="text"] {
//           margin-left: 20px;
//           padding: 5px;
//         }
//         button[type="submit"], button[type="button"] {
//           display: block;
//           margin-top: 20px;
//           padding: 10px 20px;
//           background-color: #008CBA;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }
//         button[type="submit"]:hover, button[type="button"]:hover {
//           background-color: #005F6B;
//         }
//       </style>
//       <h2>Survey</h2>
//       <form action="/survey" method="post">
//         <label for="question1">Question 1: What is your favorite color?</label>
//         <input type="radio" name="answer1" value="red">Red<br>
//         <input type="radio" name="answer1" value="blue">Blue<br>
//         <input type="radio" name="answer1" value="green">Green<br>
//         <input type="text" name="reason1" placeholder="Why did you choose this answer?"><br><br>
        
//         <label for="question2">Question 2: What is your favorite animal?</label>
//         <input type="radio" name="answer2" value="dog">Dog<br>
//         <input type="radio" name="answer2" value="cat">Cat<br>
//         <input type="radio" name="answer2" value="bird">Bird<br>
//         <input type="text" name="reason2" placeholder="Why did you choose this answer?"><br><br>
        
//         <button type="submit">Submit</button>
//         <button type="button" onclick="location.href='/results'">View results</button>
//       </form>
//     `;
//     res.send(surveyPage);
//   });
  


// app.get('/survey', (req, res) => {
//     const surveyPage = `
//       <style>
//         body {
//           background-color: #f0f0f0;
//         }
//         form {
//           border: 1px solid #ccc;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
//           background-color: white;
//           max-width: 800px;
//           margin: auto;
//           margin-top: 20px;
//           margin-bottom: 20px;
//           padding: 20px;
//         }
//         h2 {
//           margin-top: 0;
//         }
//         label {
//           display: block;
//           margin-bottom: 10px;
//         }
//         input[type="radio"] {
//           margin-right: 10px;
//         }
//         input[type="text"] {
//           margin-left: 20px;
//           padding: 5px;
//         }
//         button[type="submit"], button[type="button"] {
//           display: block;
//           margin-top: 20px;
//           padding: 10px 20px;
//           background-color: #008CBA;
//           color: white;
//           border: none;
//           border-radius: 4px;
//           cursor: pointer;
//         }
//         button[type="submit"]:hover, button[type="button"]:hover {
//           background-color: #005F6B;
//         }
//       </style>
//       <h2>Survey</h2>
//       <form action="/survey" method="post">
//         <label for="question1">Question 1: What is your favorite color?</label>
//         <input type="radio" name="answer1" value="red">Red<br>
//         <input type="radio" name="answer1" value="blue">Blue<br>
//         <input type="radio" name="answer1" value="green">Green<br>
//         <input type="text" name="reason1" placeholder="Why did you choose this answer?"><br><br>
        
//         <label for="question2">Question 2: What is your favorite animal?</label>
//         <input type="radio" name="answer2" value="dog">Dog<br>
//         <input type="radio" name="answer2" value="cat">Cat<br>
//         <input type="radio" name="answer2" value="bird">Bird<br>
//         <input type="text" name="reason2" placeholder="Why did you choose this answer?"><br><br>
        
//         <button type="submit">Submit</button>
//         <button type="button" onclick="location.href='/results'">View results</button>
//       </form>
//     `;
//     res.send(surveyPage);
//   });
  


app.get('/results', async (req, res) => {
    const surveys = await Survey.find();
    let html = `
      <style>
        body {
          background-color: #f0f0f0;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          max-width: 800px;
          margin: auto;
          margin-top: 20px;
          margin-bottom: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          background-color: white;
        }
        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ccc;
        }
        th {
          background-color: #f0f0f0;
        }
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      </style>
      <h2>Survey Results</h2>
      <table>
        <tr>
          <th>Question</th>
          <th>Answer</th>
          <th>Reason</th>
        </tr>
    `;
    surveys.forEach(survey => {
      const color = survey.answer === 'blue' ? 'dodgerblue' :
                    survey.answer === 'blue' ? 'dodgerblue' :
                    survey.answer === 'green' ? 'limegreen' : 'white';
      html += `
        <tr>
          <td>${survey.question}</td>
          <td>${survey.answer}</td> 
          <td>${survey.reason || 'N/A'}</td>
        </tr>
      `;
    });
    html += `
      </table>
      <br>
      <button onclick="location.href='/survey'">Back to survey</button>
    `;
    res.send(html);
  });
  
  
// app.get('/results', async (req, res) => {
//     const surveys = await Survey.find();
//     let html = `
//       <h2>Survey Results</h2>
//       <table>
//         <tr>
//           <th>Question</th>
//           <th>Answer</th>
//           <th>Reason</th>
//         </tr>
//     `;
//     surveys.forEach(survey => {
//       html += `
//         <tr>
//           <td>${survey.question}</td>
//           <td>${survey.answer}</td>
//           <td>${survey.reason || 'N/A'}</td>
//         </tr>
//       `;
//     });
//     html += `
//       </table>
//       <br>
//       <button onclick="location.href='/survey'">Back to survey</button>
//     `;
//     res.send(html);
//   });
// app.get('/results', async (req, res) => {
//     const surveys = await Survey.find();
//     res.send(`
//       <h2>Survey Results</h2>
//       <ul>
//         ${surveys.map(survey => `
//           <li>
//             <strong>${survey.question}</strong><br>
//             Answer: ${survey.answer}<br>
//             Reason: ${survey.reason || 'N/A'}
//           </li>
//         `).join('')}
//       </ul>
//       <button onclick="location.href='/survey'">Back to Survey</button>
//     `);
//   });

  

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
