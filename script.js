var b2h_btn = document.getElementById('bin_hex');
var h2b_btn = document.getElementById('hex_bin');
var d2b_btn = document.getElementById('dec_bin');
var b2d_btn = document.getElementById('bin_dec');
var h2d_btn = document.getElementById('hex_dec');
var d2h_btn = document.getElementById('dec_hex');
var input = document.getElementById('input');
var output = document.getElementById('output');

/**
 * When Bin2Hex button clicked, displays hexadecimal equivalent of binary input
 */
b2h_btn.onclick = function() {
	if (!validBinary()) {
		output.value = "Invalid binary format";
	}
	else {
		output.value = parseInt(input.value, 2).toString(16);
	}
}

/**
 * When Hex2Bin button clicked, displays binary equivalet of hexadecimal input
 */
h2b_btn.onclick = function() {
	if (!validHexadecimal()) {
		output.value = "Invalid hexadecimal format";
	}
	else {
		output.value = parseInt(input.value, 16).toString(2);
	}
}

/**
 * When Dec2Bin button clicked, displays binary equivalent of decimal input
 */
d2b_btn.onclick = function() {
	if (!validDecimal()) {
		output.value = "Invalid decimal format";
	}
	else {
		output.value = parseInt(input.value, 10).toString(2);
	}
}

/**
 * When Bin2Dec button clicked, displays decimal equivalent of binary input
 */
b2d_btn.onclick = function() {
	if (!validBinary()) {
		output.value = "Invalid binary format";
	}
	else {
		output.value = parseInt(input.value, 2);
	}
}

/**
 * When Hex2Dec button clciked, displays decimal equivalent of hexadecimal input
 */
h2d_btn.onclick = function() {
	if (!validHexadecimal()) {
		output.value = "Invalid hexadecimal format";
	}
	else {
		output.value = parseInt(input.value, 16);
	}
}

/**
 * When Dec2Hex button clicked, displays hexadecimal equivalent of decimal input
 */
d2h_btn.onclick = function() {
	if (!validDecimal()) {
		output.value = "Invalid decimal format";
	}
	else {
		output.value = '0x' + parseInt(input.value, 10).toString(16);
	}
}

/**
 * Determines if the input string is in a valid decimal format
 */
function validDecimal() {
	if (input.value === '') {
		return false;
	}
	return input.value.replace(new RegExp('[0-9+-]', 'g'), '') === '';
}

/**
 * Determines if the input string is in a valid binary format
 */
function validBinary() {
	if (input.value === '') {
		return false;
	}
	return input.value.replace(new RegExp('[\\s0-1+]', 'g'), '') === '';
}

/**
 * Determines if the input string is in a valid hexadecimal format
 */
function validHexadecimal() {
	if (input.value === '') {
		return false;
	}
	var inputVal = input.value.toLowerCase();
	if (inputVal.includes('x')) {
		if (inputVal.length <= 2) {
			return false;
		}
		if (!(inputVal.substr(0, 2) === '0x')) {
			return false;
		}
		inputVal = inputVal.substr(2);
	}
	return inputVal.replace(new RegExp('[0-9+a-f]', 'g'), '') === '';
}