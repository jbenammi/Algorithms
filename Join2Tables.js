var city = [
	{'id': 1, 'c_name': 'Bellevue', 'mayor': 'John Stokes', 'state_id': 1},
	{'id': 2, 'c_name': 'Salem', 'mayor': 'Anna Peterson', 'state_id': 2},
	{'id': 3, 'c_name': 'Bellingham', 'mayor': 'Kelli Linville', 'state_id': 1}
]
var state = [
	{'id': 1, 's_name': 'Washington', 'gov': 'Jay'},
	{'id': 2, 's_name': 'Oregon', 'gov': 'Kate'},
	{'id': 3, 's_name': 'California', 'gov': 'Jerry'}
]

function joinOn(city, state, sid) {
	var newJoin = {}
	for (var srow = 0; srow < state.length; srow++){
		newJoin[state[srow]['id']] = state[srow]
		newJoin[state[srow]['id']]['cities'] = []
	}
	for (var crow = 0; crow < city.length; crow++){
		if (city[crow]['state_id'] == sid){
			newJoin[sid]['cities'].push(city[crow]) 
		}
	}
	console.log(newJoin[sid])

}

joinOn(city, state, 1)