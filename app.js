const express = require('express');
const path = require('path');
const logger = require('morgan');
const models = require('./database/models');

const app = express();

const config = require('./config/config.js');
//const favicon = require('serve-favicon');
const indexRouter = require('./routes/index')
app.use(logger('dev'));

//app.use(favicon(path.join(config.imgDir, 'favicon.ico')));

app.use(express.static('public'));

const { initAuthControllers } = require('./routes/index.js');
const { loadPasportStrategies } = require('./controllers/users/users');
const session = require('express-session');
const passport = require('passport');

app.use(
    session({ secret: config.secretKey, resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize()); //возможно, нужно чистить сессии
app.use(passport.session()); // persistent login sessions


initAuthControllers(app, passport);
loadPasportStrategies(passport, models.user)


models.sequelize
    .sync()
    .then(() => {
        console.log('Nice! Database looks fine');
    })
    .catch(err => {
        console.log('Something went wrong with the Database Update!');
        console.log("Crashed with error: "+ err)
});



app.listen(config.port, err => {
    if (!err) console.log('Server started on ' + config.port + ' port');
    else console.error('Server not started');
});
