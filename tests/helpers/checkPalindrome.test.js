const checkPalindrome = require('../../src/helpers/checkPalindrome.JS');

describe("testing checkPalindrome helper", () => {
	it("check if 'aba' is palindrome", () => {
		expect(checkPalindrome('aba')).toEqual(true);
	});

	it("check if 'Aba' is palindrome", () => {
		expect(checkPalindrome('Aba')).toEqual(true);
	});
	
	it("check if 'asdf' is palindrome", () => {
		expect(checkPalindrome('asdf')).toEqual(false);
	});
	
	it("check if 'AAAAAAA' is palindrome", () => {
		expect(checkPalindrome('AAAAAA')).toEqual(true);
	});
});
