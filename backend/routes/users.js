var express = require('express');
var router = express.Router();

const axios = require('axios');




axios.get('https://randomuser.me/api/')
.then(function (response) {
  responseData = response.data;
  // console.log(JSON.stringify(response.data));
  // console.log(JSON.stringify(response.data.results));
});


/* GET users listing. */
router.get('/', function(req, res, next, ) {
  res.render( responseData/*'users', { title: 'Users' }*/);
    // res.send('respond with a resource');
});

module.exports = router;


