const express = require('express');
const path = require('path');
// const flash = require('connect-flash');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const db = require('./config/database');
var app = express();


//Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

// -------------------------------------------- body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//  ##################### FIRE THE SERVER ###################
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//  ###################### ((((((()))))))) ###################