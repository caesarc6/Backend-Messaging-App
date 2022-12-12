//const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const app = express();

//var usersRouter = require('./routes/users');
//app.use('./routes/users', usersRouter);

app.get('/', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>Backend get request.
        In London, the clock strikes:
          <span id="bongs">${'BONG '.repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
  });

  app.get('/api', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.json({bongs: "BONG ".repeat(hours)});
  });

  app.get('/hello', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;
    res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
      <link rel="stylesheet" href="/style.css">
      <script src="/script.js"></script>
    </head>
    <body>
      <p>Backend get request.
      In London, the clock strikes:
        
      <button onClick="refresh(this)">Refresh</button>
    </body>
  </html>`);
  });


/*
  var sendRouter = require('./routes/send');
  app.use('/send', sendRouter);
*/

  


// Copied code from send.js below

//var express = require('express');
//var router = express.Router();
//module.exports = router;

// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

const twilio = require('twilio');
require('dotenv').config();



app.post('/send', (req, res) => {
    console.log(req.headers);
    if (req.headers['x-post-380'] !== 'sonyl') 
        return;
    

    console.log('Name:', req.body.name);
    console.log('Phone number:', req.body.phone);
    console.log('Text message:', req.body.message);
    res.send('Got your POST request, message sent')

    var text_message = req.body.message;
    var phone_number = req.body.phone;

    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console


    const client = new twilio(accountSid, authToken);

    const my_number = process.env.MY_PHONE_NUMBER;
    const twilio_number = process.env.TWILIO_PHONE_NUMBER;

    client.messages.create({
        body: text_message, 
        to: phone_number, // Text this number
        from: twilio_number, // From a valid Twilio number
    }).then((message) => console.log(message.sid));

})



exports.app = functions.https.onRequest(app);
const cors = require('cors')({origin: true});
app.use(cors);