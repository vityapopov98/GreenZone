const express = require('express');
const app = express.Router();

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const sendHtml = require("../services/sendHtml")

app.get('/', sendHtml.index);



module.exports = app;