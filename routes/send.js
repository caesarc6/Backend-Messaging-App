var express = require('express');
var router = express.Router();
module.exports = router;

// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

const twilio = require('twilio');
require('dotenv').config();

var cors = require('cors');
router.options('/', cors());


router.options('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
});

router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/', (req, res) => { 
  
  // console.log('POST request:', req.body);
    // console.log(req.headers);
    if (req.headers['x-post-380'] !== 'sonyl') 
        return;
    

    console.log('Name:', req.body.name);
    console.log('Phone number:', req.body.phone);
    console.log('Text message:', req.body.message);


    var text_message = req.body.message;
    var phone_number = req.body.phone;

    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console


    const client = new twilio(accountSid, authToken);

    // const my_number = process.env.MY_PHONE_NUMBER;
    const twilio_number = process.env.TWILIO_PHONE_NUMBER;

    client.messages.create({
        body: text_message, to: phone_number, // Text this number
        from: twilio_number, // From a valid Twilio number
    }).then((message) => console.log(message.sid));
    res.send(`${
        req.body.name
    }, ${
        req.body.phone
    }, ${
        req.body.message
    }`);

})
