
var express = require("express");
var app = express();
var path = require("path");

module.exports.tables = function(app) {

};

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
});

