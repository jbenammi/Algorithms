function largestPal(str) {
	var uStr = uniqueStr(str)
	console.log(uStr.length, uStr)
	var bStr = ""
	var LStr = ""

	for(var i=1; i< uStr.length; i++){
		var ends = 1
		while(ends != 0){
			if(uStr[i - ends] == uStr[i + ends]){
				ends ++
			}
			else{
				for(var j = (i-ends+1); j < (i+ends-1); j++){
					if(uStr[j] != "#"){
						bStr += uStr[j]
					}
				}
				ends = 0
			}
		}
		if (bStr.length > LStr.length) {
			LStr = bStr
		}
		bStr = ""
		console.log("This is longest so far - "+LStr)
	}
	console.log('This is the longest found - '+LStr)
}



var string = 'a'

largestPal(string)

function uniqueStr(str){
	var newStr = "@#"

	for(var i=0; i<str.length; i++){
		newStr += str[i] + "#"
	}
	newStr += "$"
	return(newStr)
}
