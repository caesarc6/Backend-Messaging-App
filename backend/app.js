var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();


// import routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var weather = require('./routes/weather');
//var sendText = require('./routes/sms');

var app = express();
var bodyParser = require('body-parser'); app.use(bodyParser.json()); 

app.get('/hello', (req, res) => {
  res.send('HELLOOOOOO FROM APP.JS')
});


app.post('/send',(req, res) => {
  res.send('POST request')
});

app.use((req, res, next) => {
  res.status(404).send("OMG Error 404 hehe");
})

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
app.use('/users', usersRouter);
app.use('/weather', weather);
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


