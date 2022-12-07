const functions = require("firebase-functions");
const express = require("express");
const core = require("cors");

const app = express();
app.use(cors());

app.get('/test', (req,res) =>  {
    res.send ('Backend functions')
});

exports.app = functions.https.onRequest(app);