var express = require('express');
const { AssignedAddOnExtensionInstance } = require('twilio/lib/rest/api/v2010/account/incomingPhoneNumber/assignedAddOn/assignedAddOnExtension');
var router = express.Router();


const axios = require('axios');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// const twilio = require('twilio');



// // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // const client = require('twilio')('', '');
// // const twilio = require('twilio');



//       ///oiwrofhruiwfhr
      

// // const client = new twilio(accountSid, authToken);


//   const accountSid = '';
// const authToken = '';



// const client = new twilio(accountSid, authToken);



// client.messages
//   .create({
//     body: '',
//     to: '+', //'+',  // Text this number
//     from: '+', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

axios.get('https://randomuser.me/api/')
.then(function (response) {
  // console.log(JSON.stringify(response.data));
  // console.log(JSON.stringify(response.data.results));
});






