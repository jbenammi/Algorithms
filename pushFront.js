function pushFront(arr, val) {
	arr.length += 1
	for(var i= arr.length-1; i>0; i--){
		arr[i] = arr[i-1]
	}
	arr[0] = val
	console.log(arr)
}

pushFront([1,5,6,9,8,1,2,5], 10)

function popFront(arr) {
	var temp = arr[0]
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i+1]
	}
	arr.pop()
	console.log(arr)
	console.log(temp)
}

popFront([1,5,6,9,8,1,2,5])

function insertAt(arr, val, idx) {
	arr.length += 1
	for(var i= arr.length-1; i>idx; i--){
		arr[i] = arr[i-1]
	}
	arr[idx] = val
	console.log(arr)
}

insertAt([1,5,6,9,8,1,2,5], 10, 5)

function removeAt(arr, idx) {
	var temp = arr[idx]
	for (var i = idx; i < arr.length; i++) {
		arr[i] = arr[i+1]
	}
	arr.pop()
	console.log(arr)
	console.log(temp)
}

removeAt([1,5,6,9,8,1,2,5], 5)

function swapPairs(arr){
	if(arr.length % 2 == 0){
		var len = arr.length
	}
	else{
		var len = arr.length-1
	}

	for (var i = 0; i < len; i+=2) {
		var temp = arr[i]
		arr[i] = arr[i+1]
		arr[i+1] = temp
	}
	console.log(arr)
}

swapPairs([1,5,6,9,8,1,2,5,10])