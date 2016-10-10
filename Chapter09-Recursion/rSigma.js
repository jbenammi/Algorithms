// This is My Answer to rSigma()
// function rSigma(num) {
// 	num = Math.floor(num)
// 	if(num<1){
// 		return 0
// 	}
// 	return rSigma(num-1) + num
// }

// console.log(rSigma(2.5))

function rSigma(num){
	var returnVal = 0
	if(num>= 1){
		var intNum = Math.trunc(num)
		var prevVal = rSigma(intNum-1)
		returnVal = prevVal + intNum
	}
	return returnVal
}

console.log(rSigma(2.5))

