var express = require('express');
var router = express.Router();
module.exports = router;
const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.AUTHENTICATION_TOKEN; // Your Auth Token from www.twilio.com/console
const twilio_number = process.env.TWILIO_PHONE_NUMBER;


const client = new twilio(accountSid, authToken);

router.post('/', (req, res) => {
  //console.log('POST request:', req.body);
  console.log('Name:',req.body.name);
  console.log('Phone number:',req.body.phone);
  console.log('Text message:',req.body.message);
  res.send('Got a POST request, test route')

  var text_message = req.body.message;
  var phone_number = req.body.phone;

  client.messages
  .create({
    body: text_message,
    to: phone_number, // Text this number
    from: twilio_number , // From a valid Twilio number
  })
  .then(() => console.log('Success'));

});
