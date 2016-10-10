function arrToHash(arr1, arr2) {
	var newHash = {}
	for(var i=0; i < arr1.length; i++){
		newHash[arr1[i]] = arr2[i]
	}
	console.log(newHash)
}

arrToHash(['this', 'new', 'thing'], ['other', 'old', 'nothing'])