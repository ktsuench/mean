// .env loading ===================================================================================
// development purposes only
if(!process.env.requireDotenv) require('dotenv').config();

// modules ========================================================================================
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var crypto:Crypto = require('crypto');
var mongoose = require('mongoose');

var app = express();

// configuration ==================================================================================

// config files
var db = require('./config/db');

// set our port
app.set('port', (process.env.PORT || 8080));

// connect to our mongoDB database 
mongoose.connect(db.url);

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse cookies
//var key = process.env.COOKIE_SECRET || "gf'BTtV4E%^A%!/>s$rDk8#@cQqkV#739x+k";
// refer to the express-session docs: https://github.com/expressjs/session
/*app.use(session({
    path: '/',
    name: 'mean',
    secret: key,
    httpOnly: true,
    secure: false,
    maxAge: null,
    resave: false,
    saveUninitialized: false
}));*/

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes =========================================================================================
require('./app/routes.ts')(app); // configure our routes

// start app ======================================================================================
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

// expose app =====================================================================================
exports = module.exports = app;
