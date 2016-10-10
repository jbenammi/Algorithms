function rFib(n) {
	if(n<=2)
		return 1
	return rFib(n-1) + rFib(n-2)
}

console.log(rFib(5))