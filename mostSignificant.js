function mostSignificant(num) {
	if(num < 1 && num > 0){
		while(num < 1 && num > 0){
			num *= 10
			console.log(num)
		}
	}
	else{
		while(num > 10){
			num /= 10
			console.log(num)
		}
	}
	console.log(Math.floor(num))
}


mostSignificant(-67.89)