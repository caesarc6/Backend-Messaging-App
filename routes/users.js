var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


module.exports = router;

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://randomuser.me/api/',
  
};

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.request(options).then((response) => {
    //res.render('users', {response: response.data.results[0].name.first});
    
    res.render('users', {response: response.data.results[0]}); // access to user description
    console.log(JSON.stringify(response.data.results[0]));
  }).catch(function(error){
    console.log(error);
  });
});

module.exports = router;

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://randomuser.me/api/',
  
};

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.request(options).then((response) => {
    //res.render('users', {response: response.data.results[0].name.first});
    
    res.render('users', {response: response.data.results[0]}); // access to user description
    console.log(JSON.stringify(response.data.results[0]));
  }).catch(function(error){
    console.log(error);
  });
});

module.exports = router;