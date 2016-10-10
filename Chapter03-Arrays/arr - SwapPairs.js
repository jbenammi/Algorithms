function swapPairs(arr) {
	for (var i = 0; i < arr.length; i+=2) {
		if(arr[i+1]){
			var temp = arr[i]
			arr[i] = arr[i+1]
			arr[i+1] = temp
		}
	}
}

array = [1,2,3,4,5]

swapPairs(array)

console.log(array)