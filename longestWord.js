function longestWord(str) {
	var longestStr = ""
	var subStr = ""
	for(var i=0; i<str.length; i++){
		if(str[i] != " "){
			subStr += str[i]
		}
		else{
			if(subStr.length > longestStr.length){
				longestStr = subStr
			}
			subStr = ""
		}
	}
	if (subStr.length > longestStr.length) {
		longestStr = subStr
	}
	console.log(longestStr)
}

longestWord('We the people of the united states of america do by solemnly swear that ')