const express = require('express');
const path = require('path');
// const flash = require('connect-flash');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const db = require('./config/database');
var app = express();

require('./public/index.js')(app);

module.exports.reserve = (app) => {
    app.get('')

    app.post('/tables', (req, res) => {

    });
};