//const express = require("express");
//const bodyParser = require("body-parser");
//const cors = require("cors");
var cors = require('cors');

module.exports = async ({ app }) => {

	// Load products routes
	app.use(cors());
	require("../api/products.js")(app);
	app.enable("trust proxy");
	//app.use(cors());
	//app.use(bodyParser.urlencoded({ extended: false }));
	return app;
};
