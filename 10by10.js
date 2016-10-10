function tenbyten(){
	var tenarr = []
	var de = ['D', 'E']
	for(var i = 0; i<10; i++){
		var row = [];
		for(var j=0; j<10; j++){
			row.push(de[Math.floor(Math.random() * 2)])
		}
		tenarr.push(row)
	}
	console.log(tenarr)
}

tenbyten();
