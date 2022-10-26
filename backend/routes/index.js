var express = require('express');
var router = express.Router();


module.exports = router;

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

// TWILIO STUFF
const twilio = require('twilio');


const accountSid = 'TWILIO_ACCOUNT_SID'; // Your Account SID from www.twilio.com/console
const authToken = 'TOKEN'; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'chicken sandwhich',
    to: '+1', // Text this number
    from: '+15102161889', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.request(options).then(function (response) {
    res.render('weather',  {response:response.data}  );
  }).catch(function (error) {
    console.error(error);
  });
  
});
