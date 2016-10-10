function splitTo(str, char) {
	var arr = []
	var subStr = ""
	for(var i = 0; i<str.length; i++){
		if(str[i] != char){
			subStr += str[i]
		}
		else{
			arr.push(subStr)
			subStr = ""
		}
	}
	arr.push(subStr)
	console.log(arr)
}

var str = "How are you doing today?";

splitTo(str, " ")