function lastNum(str) {
	var num = Math.pow(parseInt(str[0]), parseInt(str[1]))
	var lastnum = num % 10
	console.log(lastnum)
}

lastNum('159')