function fibonacci() {
	var sum = 0
	var a = 0
	var b = 1
	var c = 0
	while(c < 4000000){
		if(c % 2 == 0){
			sum += c
		}
		a = b
		b = c
		c = a+b
	}
	console.log(sum)
}

fibonacci()

// 01123581321345589