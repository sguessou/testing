var express = require("express");

var api = express.Router();

api.get("/timezone", function (req, res) {
	res.send("API2: super new cool response for /timezone\r\n");
});

module.exports = api;