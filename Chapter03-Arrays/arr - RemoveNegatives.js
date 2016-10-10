function removeNegatives(arr){
	var point = 0
	var moved = 0
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] >= 0){
			var temp = arr[i]
			arr[i] = arr[point]
			arr[point] = temp
			point = point +1
			moved ++
		}
	}
	arr.length = arr.length - (arr.length-moved)
}

array = [5,-1,2,4,5,-3,-4,6,-4,-10, 12, -13, 15, -14, -15, 30]

removeNegatives(array)

console.log(array)