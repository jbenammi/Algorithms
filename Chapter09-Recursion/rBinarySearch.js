function rBS(arr, num) {
	
	var half = arr[Math.floor(arr.length/2)]
	var exists = false
	console.log(half)
	if(arr == []){
		return exists
	}
	if(half === num){
		exists = true
	}
	else if (half > num && arr.length >1){
		var newArr = arr.slice(0, (arr.length/2))
		console.log(newArr)
		exists = rBS(newArr, num)
	}
	else if (half < num && arr.length > 1){
		var newArr = arr.slice(Math.floor(arr.length/2), arr.length)
		console.log(newArr)
		exists = rBS(newArr, num)
	}
	return exists
}

array = [4,5,6,8,12,15]

console.log("answer ",rBS(array, 30))