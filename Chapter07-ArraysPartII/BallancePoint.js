function ballancePoint(arr) {
	var point = 1
	var right = 0
	var left = 0
	while(point < arr.length){
		for(var i=0; i<point; i++){
			left += arr[i]
		}
		for(var j=point; j<arr.length; j++){
			right += arr[j]
		}
		if(right == left){
			console.log('ballanced at array point '+point)
			return
		}
		else{
			right = 0
			left = 0
			point++
		}
	}
	console.log('no ballance point in array')
}

ballancePoint([2,4,6,3,3,18])