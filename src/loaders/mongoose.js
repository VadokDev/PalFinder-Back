const mongoose = require("mongoose");
const config = require("../config/config.js");

module.exports = async () => {
	console.log(config.mongoUrl);
	const connection = await mongoose.connect(config.mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).catch((err) => console.log('MongoDB connection error'));

	return connection.connection.db;
};