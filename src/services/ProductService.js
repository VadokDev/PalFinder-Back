const checkPalindrome = require('../helpers/checkPalindrome');

module.exports = (productModel) => {
	const findProducts = async (searchText) => {
		let products = [];

		if (searchText === undefined) return products;

		let productId = parseInt(searchText);
		let isPalindrome = checkPalindrome(searchText);

		if (!isNaN(productId)) {
			if (isPalindrome) {
				products = await productModel.aggregate([
					{ $match: { id: productId } },
					{
						$project: {
							_id: 0,
							id: 1,
							brand: 1,
							description: 1,
							image: 1,
							price: 1,
							priceF: { $floor: { $multiply: ["$price", 0.5] } },
						},
					},
				]);
			} else {
				products = await productModel
					.find({ id: productId }, { _id: 0 })
					.lean();
			}
		} else if (searchText.length > 3) {
			if (isPalindrome) {
				products = await productModel.aggregate([
					{
						$match: {
							$or: [
								{
									brand: {
										$regex: searchText,
										$options: "i",
									},
								},
								{
									description: {
										$regex: searchText,
										$options: "i",
									},
								},
							],
						},
					},
					{
						$project: {
							_id: 0,
							id: 1,
							brand: 1,
							image: 1,
							description: 1,
							price: 1,
							priceF: { $floor: { $multiply: ["$price", 0.5] } },
						},
					},
				]);
			} else {
				products = await productModel
					.find(
						{
							$or: [
								{ brand: { $regex: searchText, $options: "i" } },
								{ description: { $regex: searchText, $options: "i" } },
							],
						},
						{ _id: 0 }
					)
					.lean();
			}
		}

		return products;
	};

	return { findProducts };
};
