var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var functions = require('firebase-functions');
// import routes
var indexRouter = require('./routes/index');
//var usersRouter = require('./views/users.hbs');

var sendRouter = require('./routes/send');
var responseRouter = require('./routes/response');

var weather = require('./routes/weather');
//var sendText = require('./routes/sms');
var cors = require('cors');

var app = express();
app.use(cors());

app.listen(3002, () => {
  console.log("listening on http://localhost:3002");
})


//app.use('/users', usersRouter);
app.use('/weather', weather);

// app.get("/",(req, res) => {
//   res.send('App.js test page')
// })




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Specify routers
app.use('/', indexRouter);

app.use('/send', sendRouter);
//app.use('/response', responseRouter);

//app.use('/weather', weather);
//app.use('/sendText', sendText);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
exports.app = functions.https.onRequest(app);
