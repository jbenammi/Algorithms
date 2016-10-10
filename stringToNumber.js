function strToNum(str) {
	var sum = 0
	for(var i = 0; i< str.length; i++){
		if(str.charCodeAt(i) > 47 && str.charCodeAt(i) < 58){
			sum += parseInt(str[i])
		}
	}
	console.log(sum)
}

var string = 'd2d2w5esa6a5d8a6f2a5d'

strToNum(string)