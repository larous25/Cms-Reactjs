'use strict';

const path        = require('path');
const util        = require('util');
const serveStatic = require('serve-static');
const bodyParser  = require('body-Parser');
const express     = require("express");
const app         = express();


app.use(serveStatic(path.join('./public'), { maxAge: 86400000 }));

app.engine('jade', require("jade").__express);
app.set('view engine', 'jade');
app.set('views', './src/front/views');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


module.exports = app;
