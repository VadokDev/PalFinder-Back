const request = require("supertest");
const app = require("express")();
const mongoose = require("mongoose");

beforeAll(() => {
	return require("../../src/loaders")({ expressApp: app });
});

afterAll(() => {
	return mongoose.connection.close();
});

describe("testing products api endpoints", () => {
	test("check if empty string returns empty array", (done) => {
		request(app)
			.get("/products")
			.query({ search: "" })
			.then((response) => {
				expect(response.body).toEqual([]);
				done();
			});
	});

	test("check if short string (length < 4) returns empty array", (done) => {
		request(app)
			.get("/products")
			.query({ search: "abc" })
			.then((response) => {
				expect(response.body).toEqual([]);
				done();
			});
	});

	test("find product by id '12'", (done) => {
		request(app)
			.get("/products")
			.query({ search: "12" })
			.then((response) => {
				expect(response.body).toEqual([
					{
						id: 12,
						brand: "vfbjgpt",
						description: "iwpazñ ltxsh",
						image: "www.lider.cl/catalogo/images/tvIcon.svg",
						price: 647307,
					},
				]);
				done();
			});
	});

	test("find products by id '121' (palindrome)", (done) => {
		request(app)
			.get("/products")
			.query({ search: "121" })
			.then((response) => {
				expect(response.body).toEqual([
					{
						id: 121,
						brand: "erehzgj",
						description: "gzifl ngfxpr",
						image:
							"www.lider.cl/catalogo/images/electronicsIcon.svg",
						price: 426816,
						priceF: 213408,
					},
				]);
				done();
			});
	});

	test("finds products with 'dafa'", (done) => {
		request(app)
			.get("/products")
			.query({ search: "dafa" })
			.then((response) => {
				expect(response.body).toEqual([
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
						image:
							"www.lider.cl/catalogo/images/electronicsIcon.svg",
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
				done();
			});
	});

	it("finds products with 'dafad (palindrome)'", (done) => {
		request(app)
			.get("/products")
			.query({ search: "dafad" })
			.then((response) => {
				expect(response.body).toEqual([
					{
						id: 51,
						brand: "dafad",
						description: "qrñfsf avzim",
						image:
							"www.lider.cl/catalogo/images/smartphoneIcon.svg",
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
						image:
							"www.lider.cl/catalogo/images/electronicsIcon.svg",
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
				done();
			});
	});
});
