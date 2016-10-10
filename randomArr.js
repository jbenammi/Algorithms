function randomArr(arr) {
	for (var i = 0; i < arr.length-1; i++) {
		var j = Math.floor((Math.random() * (arr.length-i)+i))
		console.log(i)
		var hold = arr[i]
		arr[i] = arr[j]
		arr[j] = hold
	}
}


var array = [1,2,3]

randomArr(array)