

const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/response', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.listen(3001, () => {
  console.log('Express server listening on port 3001');
});
