function replaceString(old, news, str) {
	str += " "
	var newStr = ""
	var substring = ""
	for (var i = 0; i < str.length; i++) {
		if(str[i] != " "){
			substring += str[i]
		}
		else{
			newStr += substring + " "
			substring = ""
		}			
		if(substring == old){
				newStr += news
				substring = ""
		}
	}
	console.log(newStr)
}

var res = replaceString("Visit", "Use", "Visit Microsoft!")