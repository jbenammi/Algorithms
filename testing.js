function qsort(arr, start, end) {
	start = start || 0
	end = end || arr.length
	var pivot = start
	if(end-start <= 1){
		return
	}

	for (var idx = start; idx < end; idx++) {
		if(arr[idx] < arr[start]){
			pivot ++
			var temp = arr[idx]
			arr[idx] = arr[pivot]
			arr[pivot] = temp
		}
	}
	var temp = arr[start]
	arr[start] = arr[pivot]
	arr[pivot] = temp
	qsort(arr, start, pivot)
	qsort(arr, pivot+1, end)
}

var array1 = [4,10,3,20,7,1,9,8,5,2,15]
qsort(array1)

console.log(array1)

function quicksort(arr) {
    if (arr.length <= 1){
    	return arr;
    }
  
    var left = []
    var right = []
    var pivot = arr[0]
  
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < pivot)
            left.push(arr[i])
        else
            right.push(arr[i]);
    }
    return quicksort(left).concat(pivot, quicksort(right));
}
var array2 = [4,10,3,20,7,1,9,8,5,2,15]

console.log(quicksort(array2))




