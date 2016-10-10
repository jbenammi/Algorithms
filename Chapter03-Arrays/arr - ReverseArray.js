function reverseArray(arr) {
	for (var i = 0; i < Math.floor(arr.length/2); i++) {
		var temp = arr[i]
		arr[i] = arr[arr.length-1-i]
		arr[arr.length-1-i] = temp
	}
}

array = [1,2,3,4,5,6,7,8,9]

reverseArray(array)

console.log(array)