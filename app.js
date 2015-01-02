///////////////////////////////////////////////////////////////////////////////
// File: app.js                        October 2014
// Description:
//    The main configuration file for the node.js application
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Routing
var express = require('express');
// Serve up the web site
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// For LESS to CSS compilation
var lessMiddleware = require('less-middleware');
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Declare the routes used in the application
var routes = require('./routes');
var users = require('./routes/user');
var sandbox = require('./routes/sandbox');
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
var app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Use of different things (figure out what later)
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

// Convert the LESS to CSS
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// Declare the high-level routing information
// app.get('/', routes.index);
app.get('/users', users.list);
app.get('/', sandbox.index);
app.get('/about', sandbox.about);
app.get('/resume', sandbox.resume);
app.get('/music', sandbox.music);
app.get('/design', sandbox.design);
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handlers

// development error handler
// will print stack-trace
if (app.get('env') === 'development') {
   app.use(function(err, req, res, next) {
      res.render('error', {
         message: err.message,
         error: err
      });
   });
}

// production error handler
// no stack-traces leaked to user
app.use(function(err, req, res, next) {
   res.render('error', {
      message: err.message,
      error: {}
   });
});
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
module.exports = app;
///////////////////////////////////////////////////////////////////////////////
