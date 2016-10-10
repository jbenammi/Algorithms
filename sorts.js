//bubble sort


function bubble(arr) {
	
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length; j++) {
			if(arr[j] > arr[j+1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
		console.log(arr)
	}
	console.log('finished sorting ' +arr)
}

// bubble(array)

function selection(arr) {
	for (var i = 0; i < arr.length; i++) {
		var curMin = arr[i]
		var point = i
		for (var j = i+1; j < arr.length; j++) {
			if(arr[j]< curMin){
				point = j
				curMin = arr[j]
				console.log('Point is '+point)
				console.log('curMin is '+ curMin)
			}
		}
		arr[point] = arr[i]
		arr[i] = curMin
		console.log(arr)
	}
	console.log(arr)
}

// selection(array)
var array = [1,5,9,25,9,3,15,17,100]

function insertion(arr){
	for (var i = 1; i < arr.length; i++) {
		var pointer = arr[i]
		for (var j = i; j >= 0; j--) {
			if(pointer < arr[j-1]){
				arr[j] = arr[j-1]
			}
			else{
				arr[j] = pointer
				j = -1
			}

		}
		console.log(arr)
	}
}

insertion(array)