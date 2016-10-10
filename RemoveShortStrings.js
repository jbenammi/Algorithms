function removeShortStrings(arr, val) {
	var count = 0
	for (var i = 0; i < arr.length-count; i++) {
		if(arr[i].length < val){
			for (var j = i; j < arr.length-count; j++) {
				arr[j] = arr[j+1]
			}
			count ++
			i--
		}
	}
	arr.length -= count
	return arr
}

var array = ["it","something", 'here', 'hello', 'terriffic', 'there']

console.log(removeShortStrings(array, 6))