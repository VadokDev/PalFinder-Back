const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
	id: Number,
	price: Number,
	brand: String,
	description: String,
	image: String,
});

module.exports = mongoose.model("products", productSchema);
