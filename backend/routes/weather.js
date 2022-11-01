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



/* GET home page. */
router.get('/', function(req, res, next) {
  axios.request(options).then(function (response) {
    res.render('weather',  {response: response.data}); // look for 'weather' hbs file
    console.log(response)
  }).catch(function (error) {
    console.error(error);
  });
  
});
