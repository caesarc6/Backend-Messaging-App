var express = require('express');
var router = express.Router();
module.exports = router;

// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

const twilio = require('twilio');
require('dotenv').config();


router.post('/', (req, res) => {
    console.log(req.headers);
    if (req.headers['x-post-380'] !== 'sonyl') 
        return;
    

    console.log('Name:', req.body.name);
    console.log('Phone number:', req.body.phone);
    console.log('Text message:', req.body.message);
    res.send('Got a POST request, message sent')

    var text_message = req.body.message;
    var phone_number = req.body.phone;

    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console


    const client = new twilio(accountSid, authToken);

    client.messages.create({
        body: text_message, to: phone_number, // Text this number
        from: twilio_number, // From a valid Twilio number
    }).then((message) => console.log(message.sid));

})


// const my_number = process.env.MY_PHONE_NUMBER;
const twilio_number = process.env.TWILIO_PHONE_NUMBER;
