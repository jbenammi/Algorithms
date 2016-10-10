function Acronyms(str) {
	var newStr = ''
	for (var i = 0; i < str.length-1; i++) {
		if(str[i] == ' '){
			newStr += str[i+1]
		}
	}
	newStr = newStr.toUpperCase()
	return newStr
}

var string = " there's no free lunch - gotta pay yer way. "

console.log(Acronyms(string))