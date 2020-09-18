

module.exports = (app) => {
	const productModel = require("../models/Product.js");
	const productService = require("../services/ProductService.js")(productModel);

	app.get("/products", async function (req, res) {
		res.send(await productService.findProducts(req.query.search));
	});
};
