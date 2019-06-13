const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

const config = require('./config/config.js');
//const favicon = require('serve-favicon');
const indexRouter = require('./routes/index')
app.use(logger('dev'));


app.use(express.static('public'));

//app.use(favicon(path.join(config.imgDir, 'favicon.ico')));

app.use('/', indexRouter)



app.listen(config.port, err => {
    if (!err) console.log('Server started on ' + config.port + ' port');
    else console.error('Server not started');
});


