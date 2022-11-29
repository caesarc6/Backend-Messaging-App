var express = require('express');
var router = express.Router();

const axios = require("axios");

// Get database
const fs = require('fs');
const data = fs.readFileSync('db.json'); // get data in raw format
const Users = JSON.parse(data); // get data in json format

// Random user API
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

//var Users = []; // Add new users

router.post('/signup', (req, res) => {
  if(!req.body.username || !req.body.password){
    res.status("400");
    res.send("Invalid details!");
  } else {
     Users.user.filter(function(user){
      console.log(user.username);
        if(user.username === req.body.username){
           res.send("User Already Exists! Login or choose another user username");
        }
     });
    var newUser = req.body;
    newUser.id++;
    Users.user.push(newUser);
     fs.writeFile('db.json', JSON.stringify(Users), (err) => {
      if (err) throw err;
      console.log('New data added');
     });

    //req.session.user = newUser;
    res.send('User successfully created');
 }
});

router.post('/login', (req, res) => {
  console.log(Users);
  if(!req.body.username || !req.body.password){
     res.send('Please enter username and passoword');
  } else {
     Users.user.filter(function(user){
        if(user.username === req.body.username && user.password === req.body.password){
           //req.session.user = user;
           res.send('You are log in');
        }
     });
     res.send('Invalid credentials!');
  }
});

router.get('/logout', function(req, res){
  console.log(Users);
  //res.send('user logged out.')
  res.render('index', {title: 'Express'});
});

module.exports = router;
