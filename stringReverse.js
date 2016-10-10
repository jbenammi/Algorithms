function stringReverse(str) {
	var newStr = ""

	for (var i = 0; i < str.length; i++) {
		newStr = str[i] + newStr
	}
	return newStr
}

var string = "creature"
console.log(stringReverse(string))