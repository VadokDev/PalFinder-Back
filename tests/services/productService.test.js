const app = require("express")();
const mongoose = require("mongoose");

const productModel = require("../../src/models/Product.js");
const productService = require("../../src/services/productService.js")(
	productModel
);

beforeAll(() => {
	return require("../../src/loaders")({ expressApp: app });
});

afterAll(() => {
	return mongoose.connection.close();
});

describe("testing productService findProducts", () => {
	it("check if empty string returns empty array", async () => {
		let products = await productService.findProducts("");
		expect(products).toEqual([]);
	});

	it("check if short string (length < 4) returns empty array", async () => {
		let products = await productService.findProducts("abc");
		expect(products).toEqual([]);
	});

	it("find products by id '12'", async () => {
		let products = await productService.findProducts("12");
		expect(products).toEqual([
			{
				id: 12,
				brand: "vfbjgpt",
				description: "iwpazñ ltxsh",
				image: "www.lider.cl/catalogo/images/tvIcon.svg",
				price: 647307,
			},
		]);
	});

	it("find products by id '121' (palindrome)", async () => {
		let products = await productService.findProducts("121");
		expect(products).toEqual([
			{
				id: 121,
				brand: "erehzgj",
				description: "gzifl ngfxpr",
				image: "www.lider.cl/catalogo/images/electronicsIcon.svg",
				price: 426816,
				priceF: 213408,
			},
		]);
	});

	it("finds products with 'dafa'", async () => {
		let products = await productService.findProducts("dafa");
		expect(products).toEqual([
			{
				id: 51,
				brand: "dafad",
				description: "qrñfsf avzim",
				image: "www.lider.cl/catalogo/images/smartphoneIcon.svg",
				price: 696740,
			},
			{
				id: 211,
				brand: "dafad",
				description: "jnkx fxoafrat",
				image: "www.lider.cl/catalogo/images/furnitureIcon.svg",
				price: 424323,
			},
			{
				id: 227,
				brand: "dafad",
				description: "uhiscx ñsdbs",
				image: "www.lider.cl/catalogo/images/computerIcon.svg",
				price: 345898,
			},
			{
				id: 229,
				brand: "sdafads",
				description: "hykpd jwfavb",
				image: "www.lider.cl/catalogo/images/homeIcon.svg",
				price: 520218,
			},
			{
				id: 615,
				brand: "sdafads",
				description: "dquyja crdgj",
				image: "www.lider.cl/catalogo/images/computerIcon.svg",
				price: 237729,
			},
			{
				id: 994,
				brand: "sdafads",
				description: "exqñvj ttunh",
				image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
				price: 502416,
			},
			{
				id: 1053,
				brand: "dafad",
				description: "fsyqji ñnmso",
				image: "www.lider.cl/catalogo/images/electronicsIcon.svg",
				price: 804475,
			},
			{
				id: 1152,
				brand: "sdafads",
				description: "dkuc rxkuqpnm",
				image: "www.lider.cl/catalogo/images/bicycleIcon.svg",
				price: 295031,
			},
			{
				id: 1272,
				brand: "dafad",
				description: "tzin qbeñswzz",
				image: "www.lider.cl/catalogo/images/toysIcon.svg",
				price: 406710,
			},
			{
				id: 1639,
				brand: "dafad",
				description: "vqhev enjhfd",
				image: "www.lider.cl/catalogo/images/bicycleIcon.svg",
				price: 566809,
			},
			{
				id: 1779,
				brand: "sdafads",
				description: "hcpqws jyufm",
				image: "www.lider.cl/catalogo/images/bedRoomIcon.svg",
				price: 521754,
			},
			{
				id: 2084,
				brand: "dafad",
				description: "yfoh dzhuejñh",
				image: "www.lider.cl/catalogo/images/babyIcon.svg",
				price: 682142,
			},
			{
				id: 2798,
				brand: "sdafads",
				description: "hdvt tbrdeiñl",
				image: "www.lider.cl/catalogo/images/furnitureIcon.svg",
				price: 779903,
			},
			{
				id: 2827,
				brand: "dafad",
				description: "eydmñu jugxe",
				image: "www.lider.cl/catalogo/images/gamesIcon.svg",
				price: 366989,
			},
		]);
	});

	it("finds products with 'dafad (palindrome)'", async () => {
		let products = await productService.findProducts("dafad");
		expect(products).toEqual([
			{
				id: 51,
				brand: "dafad",
				description: "qrñfsf avzim",
				image: "www.lider.cl/catalogo/images/smartphoneIcon.svg",
				price: 696740,
				priceF: 348370,
			},
			{
				id: 211,
				brand: "dafad",
				description: "jnkx fxoafrat",
				image: "www.lider.cl/catalogo/images/furnitureIcon.svg",
				price: 424323,
				priceF: 212161,
			},
			{
				id: 227,
				brand: "dafad",
				description: "uhiscx ñsdbs",
				image: "www.lider.cl/catalogo/images/computerIcon.svg",
				price: 345898,
				priceF: 172949,
			},
			{
				id: 229,
				brand: "sdafads",
				description: "hykpd jwfavb",
				image: "www.lider.cl/catalogo/images/homeIcon.svg",
				price: 520218,
				priceF: 260109,
			},
			{
				id: 615,
				brand: "sdafads",
				description: "dquyja crdgj",
				image: "www.lider.cl/catalogo/images/computerIcon.svg",
				price: 237729,
				priceF: 118864,
			},
			{
				id: 994,
				brand: "sdafads",
				description: "exqñvj ttunh",
				image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
				price: 502416,
				priceF: 251208,
			},
			{
				id: 1053,
				brand: "dafad",
				description: "fsyqji ñnmso",
				image: "www.lider.cl/catalogo/images/electronicsIcon.svg",
				price: 804475,
				priceF: 402237,
			},
			{
				id: 1152,
				brand: "sdafads",
				description: "dkuc rxkuqpnm",
				image: "www.lider.cl/catalogo/images/bicycleIcon.svg",
				price: 295031,
				priceF: 147515,
			},
			{
				id: 1272,
				brand: "dafad",
				description: "tzin qbeñswzz",
				image: "www.lider.cl/catalogo/images/toysIcon.svg",
				price: 406710,
				priceF: 203355,
			},
			{
				id: 1639,
				brand: "dafad",
				description: "vqhev enjhfd",
				image: "www.lider.cl/catalogo/images/bicycleIcon.svg",
				price: 566809,
				priceF: 283404,
			},
			{
				id: 1779,
				brand: "sdafads",
				description: "hcpqws jyufm",
				image: "www.lider.cl/catalogo/images/bedRoomIcon.svg",
				price: 521754,
				priceF: 260877,
			},
			{
				id: 2084,
				brand: "dafad",
				description: "yfoh dzhuejñh",
				image: "www.lider.cl/catalogo/images/babyIcon.svg",
				price: 682142,
				priceF: 341071,
			},
			{
				id: 2798,
				brand: "sdafads",
				description: "hdvt tbrdeiñl",
				image: "www.lider.cl/catalogo/images/furnitureIcon.svg",
				price: 779903,
				priceF: 389951,
			},
			{
				id: 2827,
				brand: "dafad",
				description: "eydmñu jugxe",
				image: "www.lider.cl/catalogo/images/gamesIcon.svg",
				price: 366989,
				priceF: 183494,
			},
		]);
	});
});
