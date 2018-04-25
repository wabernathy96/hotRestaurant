
var path = require("path");

var app = express();

module.exports.home = function(app) {

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
}