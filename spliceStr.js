
//Given a string, a location in the string and a number; remove those items from the string and return the modified string.
//If you are passed a fourth parameter, have that item added in where the other items were removed from the string.
//so given "She Sells Sea Shells by the Sea Shore", 9, 4 - you should return "She Sells Shells by the Sea Shore"
//if given " Pasta" as your fourth item passed in, you should return "She Sells Pasta Shells bu the Sea Shore"


function spliceStr(str, idx, num, subStr) {
	var newStr = ""
	var subStr = subStr || ""
	if(idx > str.length){
		newStr += str
		if(subStr){
			newStr += subStr
		}
		return newStr
	}
	for(var i = 0; i < idx; i++){
		newStr += str[i]
	}
	newStr += subStr
	for(var j = (idx + num); j < str.length; j++){
		newStr += str[j]
	}
	return newStr
}


function spliceStr2(str, idx, num, subStr) {
	var subStr = subStr || ""	
    return str.slice(0, idx) + subStr + str.slice(idx + Math.abs(num));
};


console.log(spliceStr("She Sells Sea Shells by the Sea Shore", 9, 4, " Pasta"))
console.log(spliceStr2("She Sells Sea Shells by the Sea Shore", 9, 4))