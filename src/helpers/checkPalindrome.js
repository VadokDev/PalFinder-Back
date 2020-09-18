
module.exports = (text) => {
	let len = text.length;
	let lowerText = text.toLowerCase();

	for (let i = 0; i < len / 2; i++) {
		if (lowerText[i] !== lowerText[len - 1 - i]) return false;
	}

	return true;
};