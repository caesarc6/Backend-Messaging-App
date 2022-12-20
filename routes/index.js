var express = require('express');
var router = express.Router();
const twilio = require('twilio');
require('dotenv').config();

var app = express();


app.get('/',(req, res) => {
  res.send('Hello World!, This is from file app.js')
})

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);




const axios = require("axios");

const options = {
  method: 'GET',
  url: 'http://api.weatherapi.com/v1/current.json',
  params: {q: 'London', dt: '2022-12-25', key: '38556edbb21c4d2ea89231336221810'},
  headers: {
    'X-RapidAPI-Key': '38556edbb21c4d2ea89231336221810',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

//const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
//const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console


//const client = new twilio(accountSid, authToken);

// const my_number = process.env.MY_PHONE_NUMBER;
// const twilio_number = process.env.TWILIO_PHONE_NUMBER;

// client.messages
//   .create({
//     body: 'Hellow from the backend team!',
//     to: my_number, // Text this number
//     from: twilio_number , // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));



//client.messages
 // .create({
  //  body: 'Hello from Node',
  //  to: '+', // Text to this number
  //  from: '+', // From a valid Twilio number
 // }).then((message) => console.log('Send Success'));

router.get('/', function(req, res){
  res.render('sample', {
    title: 'Express',
    subTitle: 'subExpress'
  });
});

module.exports = router;
