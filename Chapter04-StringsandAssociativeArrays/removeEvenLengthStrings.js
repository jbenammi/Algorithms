function removeEvenLengthStrings(arr) {
	var count = 0
	var point = 0
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length % 2 != 0){
			arr[point] = arr[i]
			count ++
			point ++
		}
	}
	arr.length -= arr.length - count
}

var array = ["Nope!", "Its", "Kris", "starting", "with", "K!", "(instead", "of", "Chris", "with", "C", "."]
removeEvenLengthStrings(array)
console.log(array)