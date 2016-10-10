function rTrib(n) {
	arr = [0,0,1,1]

	amt = n - (arr.length-1)
	for(var i = 0; i < amt; i++){
		arr.push(arr[arr.length-1]+arr[arr.length-2]+arr[arr.length-3])
	}
	console.log(arr[arr.length-1])
}
rTrib(7)
