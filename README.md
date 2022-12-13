# Backend-Messaging-App

## CSCI 380 Project

An accessibility based messaging web application.

## Team Members

_Caesar Cuzco_
Student at John Jay College of Criminal Justice.
Majoring in Computer Science.

<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" width="350" height="100%" >  

_Christian Dane_
  i'm a student at john jay majoring in CSIC
  
<img src="https://user-images.githubusercontent.com/113483417/196541123-107cfd7b-6f3f-4a49-94de-dc967d020e5f.jpg" width="350" height="100%" >

_Sonyl Nagale (Adjunct Lecturer)_
I am a Solutions Architect and an instuctor at John Jay and Baruch Colleges

<img src="./_assets/1263746.jpeg" width="350" height="100%">



_William Zhicay_
  Student at John Jay College.
  Majoring in Computer Science and Information Technology
  
<img src="./_assets/me.jpg" width="350" height="100%">



_Damian Perera (Student)_
  I am a computer science student at John Jay College
  
  <img src="./_assets/IMG_8052.PNG" style="width: 350px; height: 100%;  position: absolute;
    clip: rect(0px,960px,2900px,0px); ">
  
  


_Ramee Yudeh_
  CS student at John Jay!
  
<img src="./_assets/rypic.jpg" width="350" height="100%">
   
    
# How to use

In terminal..

Go into the backend directory:
`cd backend`

To install needed packages
`npm install`

To start server
`npm start`

Open web browser to:
`http://localhost:3001`


# API Endpoints for Frontend
Send a POST request in JSON. Header values must contain secured value name and key.

#### Send POST request to this Route:
```
https://locahost:3001/routes/send 
```

#### In header request:
Proper key values must be send in header to secure connection. Save value of keys in an .env file.

In header, pass variable and value.
Use Authorization x-post protocol.

```
key variable: X-post-380 
key value : SECRET_TOKEN_HERE
```
 Key will be provided in class  :+1:

Data in POST requests must be send in JSON format with the corresponding variables.


#### JSON Format:

JSON fields example:

```
"name": "Joe",
"message": "Hello this is Backend, lorem ipsum ;)",
"phone": "+0000000000",
```


##  Tech

  Backend used
  
  - [Express] - Routes and handlebars files
  - [NodeJS] - Server Environment
  - [Axios] - HTTP Client for fetching data
  - [Twilio API] -An API used for SMS functionality
  - [Random API] - Gets random user information 
  - [Weather API] - Gets weather data from any location
    

# Requirements

Have [NPM] installed in system.
Have [Twilio]'s access tokens.
An IDE to run the code.


[express]: <http://expressjs.com>
[nodejs]: <http://nodejs.org>
[twilio API]: <http://www.twilio.com/docs/sms>
[twilio]: <http://www.twilio.com/docs/sms>
[Axios]: <https://axios-http.com/docs/intro>
[random api]: <https://randomuser.me/api/>
[weather api]: <https://www.weatherapi.com/>
[npm]: <https://docs.npmjs.com/downloading-and-installing-node-js-and-npm>
