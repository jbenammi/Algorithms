function rSigma(num) {
	num = Math.floor(num)
	if(num<=0){
		return 0
	}
	else{
		if(num == 1)
			return 1
	}
	return rSigma(num-1) * num
}

console.log(rSigma(5.5))