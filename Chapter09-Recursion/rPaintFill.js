function rPaintFill(arr2D, start, num, checked) {
	var checked = checked || {}
	if(start[0]+"-"+start[1] in checked){
		return
	}
	var N,S,E,W;
	checked[start[0]+"-"+start[1]] = true
	console.log(checked)
	if(start[0]-1 >= 0){
		N = [start[0]-1, start[1]]
	}
	else{
		N = false
	}
	console.log('N = ', N)
	if(start[0]+1 < arr2D.length){
		S = [start[0]+1, start[1]]
	}
	else{
		S = false
	}
	console.log('S = ', S)
	if(start[1]+1 < arr2D[start[0]].length){
		E = [start[0], start[1]+1]
	}
	else{
		E = false
	}
	console.log('E = ', E)
	if(start[1]-1 >= 0){
		W = [start[0], start[1]-1]
	}
	else{
		W = false
	}
	console.log('W = ', W)

	if(N && arr2D[N[0]][N[1]] == arr2D[start[0]][start[1]]){
		rPaintFill(arr2D, N, 1, checked)
	}
	if(S && arr2D[S[0]][S[1]] == arr2D[start[0]][start[1]]){
		rPaintFill(arr2D, S, 1, checked)
	}
	if(E && arr2D[E[0]][E[1]] == arr2D[start[0]][start[1]]){
		rPaintFill(arr2D, E, 1, checked)
	}
	if(W && arr2D[W[0]][W[1]] == arr2D[start[0]][start[1]]){
		rPaintFill(arr2D, W, 1, checked)
	}

	arr2D[start[0]][start[1]] = num

	return

}


canvas = [[3,2,3,4,3],
		  [2,3,3,4,0],
		  [7,3,3,5,3],
		  [6,5,3,4,1],
		  [1,2,3,3,3]]


rPaintFill(canvas, [2,2], 1)

console.log(canvas)