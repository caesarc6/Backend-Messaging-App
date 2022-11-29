var express = require('express');
var router = express.Router();
require('dotenv').config();

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'http://api.weatherapi.com/v1/current.json',
  params: {q: 'Guayaquil', key: process.env.WHEATHER_KEY},
  headers: {
    'X-RapidAPI-Key': process.env.WHEATHER_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

/* GET home page. */
router.get('/', function(req, res) {
  axios.request(options).then(function (response) {
    res.render('weather',  {response: response.data}); // look for 'weather' hbs file
    console.log(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  
});

module.exports = router;