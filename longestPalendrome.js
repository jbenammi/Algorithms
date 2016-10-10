function longestPalNoSpace(str) {
	var newStr = ""
	var newNewStr = ""
	for(var i=0; i<str.length; i++){
		if(str[i] != " "){
			newStr += str[i]
		}
	}
	for (var j = 0; j < newStr.length; j++) {
		if(j != newStr.length-1){
		newNewStr += (newStr[j] + '#')
		}
		else{
			newNewStr += newStr[j]
		}
	}
	console.log(newNewStr)
}

longestPalNoSpace('i have a tuna nut for you')

function addUnique(str) {
	var newStr = "&#"
	for (var i = 0; i < str.length; i++) {
		newStr += str[i] +"#"
	}
	newStr += "$"
	return newStr
}


function longestPal(str) {
	var maxPal = ""
	var build = ""
	unqStr = addUnique(str)
	for(var i= 1; i<unqStr.length-1; i++){
		var j = 1
		while(unqStr[i-j] === unqStr[i+j]){
			j++
		}
		for(var x = (i-j+1); x<= (i+j-1); x++){
			if(unqStr[x] !== '#'){
				build += unqStr[x]				
			}
		}
		if(build.length > maxPal.length){
			maxPal = build
		}
			build = ""
	}
	console.log(maxPal)
}

longestPal("Yikes! my favorite racecar erupted!")