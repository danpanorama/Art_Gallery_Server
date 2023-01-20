var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var uploadRouter = require('./routes/upload');
var messageRouter = require('./routes/message');


var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/message', messageRouter);



app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers.host === '52.198.204.193:3040/')
          return res.redirect(301, 'https://52.198.204.193:3040/');
      if (req.headers['x-forwarded-proto'] !== 'https')
          return res.redirect('https://' + req.headers.host + req.url);
      else
          return next();
  } else
      return next();
});




app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,"../", '/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

module.exports = app;
