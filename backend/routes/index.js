var express = require('express');
var router = express.Router();
const twilio = require('twilio');
require('dotenv').config();


const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTHENTICATION_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from Node',
    to: '+', // Text to this number
    from: '+', // From a valid Twilio number
  }).then((message) => console.log('Send Success'));

router.get('/', function(req, res){
  res.render('sample', {
    title: 'Express',
    subTitle: 'subExpress'
  });
});

module.exports = router;