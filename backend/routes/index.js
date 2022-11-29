var express = require('express');
var router = express.Router();
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTHENTICATION_TOKEN; // Your Auth Token from www.twilio.com/console
const PhoneNum = process.env.MY_PHONE_NUMBER;
const TwilioNum = process.env.TWILIO_PHONE_NUMBER;

//const client = new twilio(accountSid, authToken);
module.exports = router;
const axios = require("axios");

/*
client.messages
  .create({
    body: 'I gotta dookie test',
    to: PhoneNum, // Text this number
    from: TwilioNum, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
*/
//client.messages
 // .create({
  //  body: 'Hello from Node',
  //  to: '+', // Text to this number
  //  from: '+', // From a valid Twilio number
 // }).then((message) => console.log('Send Success'));

const client = require('twilio')(accountSid, authToken);

client.conversations.v1.conversations
                        .create({friendlyName: 'My 1st Conversation'})
                        .then(conversation => console.log(conversation.sid));

client.conversations.v1.conversations('CH0e1deeaa05344c51bee8130f63842009')
      .fetch()
      .then(conversation => console.log(conversation.chatServiceSid));

client.conversations.v1.conversations('CH0e1deeaa05344c51bee8130f63842009')
      .participants.create({
        'messagingBinding.address': PhoneNum,
     'messagingBinding.proxyAddress': TwilioNum
      })
      .then(participant => console.log(participant.sid));


//tesing


router.get('/', function(req, res){
  res.render('sample', {
    title: 'Express',
    subTitle: 'subExpress'
  });
});

module.exports = router;
