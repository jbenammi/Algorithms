function rotateString(str, num) {
	var newString = ""
	if(num>0){
		while(num !=0){
			newString = ""
			for (var i = 1; i < str.length; i++) {
				newString += str[i]
			}
			newString+= str[0]
			str = newString
			console.log(str)
			num --
		}
	}
	else if(num<0){
		while(num != 0){
			newString = str[str.length-1]
			for (var i = 0; i < str.length-1; i++) {
				newString += str[i]
			}
			str = newString
			console.log(str)
			num ++
		}
	}
}

var string = "happydance"
// rotateString(string, -10)