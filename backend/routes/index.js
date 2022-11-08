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
// // const client = require('twilio')('ACf98bc427e83fc27f0c83b57405138b61', '1a346606003fc6398186bfa7103686dd');
// // const twilio = require('twilio');



//       ///oiwrofhruiwfhr
      

// // const client = new twilio(accountSid, authToken);


//   const accountSid = 'ACf98bc427e83fc27f0c83b57405138b61';
// const authToken = '1a346606003fc6398186bfa7103686dd';



// const client = new twilio(accountSid, authToken);



// client.messages
//   .create({
//     body: 'Hello world from 237!',
//     to: '+13474800373', //'+13474800373',  // Text this number
//     from: '+14633454855', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

axios.get('https://randomuser.me/api/')
.then(function (response) {
  // console.log(JSON.stringify(response.data));
  // console.log(JSON.stringify(response.data.results));
});






