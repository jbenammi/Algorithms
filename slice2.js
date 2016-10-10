function slice2(str, start, end) {
	var sliced = ""
	for(var i = start; i < end; i++){
		sliced += str[i]
	}
	console.log(sliced)
}

slice2("Hello There", 2, 7)