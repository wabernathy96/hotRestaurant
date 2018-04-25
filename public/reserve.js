const express = require('express');
const path = require('path');
// const flash = require('connect-flash');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const db = require('./config/database');
var app = express();



module.exports.reserve = (app) => {
    
    app.get("/reserve",(req, res) => {
        res.sendFile(path.join(__dirname, "../reserve.html"));
    });

    app.post('/tables', (req, res) => {

    });
};