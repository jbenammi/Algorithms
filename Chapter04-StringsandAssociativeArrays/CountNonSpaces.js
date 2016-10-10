function countNonSpaces(str) {
	var count = 0
	for (var i = 0; i < str.length; i++) {
		if(str[i] !== " "){
			count ++
		}
	}
	return count
}

var string = "Honey pie, you are driving me crazy"
console.log(countNonSpaces(string))