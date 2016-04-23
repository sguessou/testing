var express = require("express");

var apiVersion1 = require("./api1.js");
var apiVersion2 = require("./api2.js");

var app = express();

app.use("/v1", apiVersion1);
app.use("/v2", apiVersion2);

// res.status(404).json({ error: "Resource not found." });

app.use(function (req, res) {
	res.status(404).json({ error: "Resource not found." });
});

app.listen(3000, function () {
	console.log("App started on port 3000");
});