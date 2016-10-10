function isPrime(num) {
	for(var i=2; i<= Math.sqrt(num); i++){
		if(num % i == 0){
			console.log('not prime')
			return
		}
	}
	console.log('isPrime')
	return
}

// isPrime(11)


function NthPrime(n) {
	var arr = 0
	var number = 2
	while(arr != n){
		for(var i=2; i< number; i++){
			if(number % i == 0){
				number ++
			}
		}
		arr ++
		number ++
	}
	console.log(number-1)
}

// NthPrime(20)


function returnPrimes(num) {
	var arr = [];

	for(var i = 2; i <= num; i++) {
		for(var j = 2; j < i/2; i++) {
			if(i % j == 0){
				i++
				break
			}
		}
		arr.push(i);
	}

	return arr;
}

console.log(returnPrimes(5))