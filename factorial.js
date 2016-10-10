function factorial(num){
	var product = 1;
	for(var i =2; i<=num; i++){
		product *= i;
	}
	console.log(product);
}

// factorial(5);


function rFactorial(num) {
	if(num<=1){
		return 1
	}
	return (num*rFactorial(num-1))
}

console.log(rFactorial(5))


