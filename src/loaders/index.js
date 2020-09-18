const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");

module.exports = async ({ expressApp }) => {
	
	const mongoConnection = await mongooseLoader();
	console.log("MongoDB Ready");
	
	await expressLoader({ app: expressApp });
	console.log("Express Ready");
};