function sumtoone(num) {
	var newNum = 0
	num = num.toString()

	while(num.length > 1){
		for(var i=0; i<num.length; i++){
			newNum += parseInt(num[i])
		}
		num = newNum.toString()
		newNum = 0
	}
	return num
}

console.log(sumtoone(188))