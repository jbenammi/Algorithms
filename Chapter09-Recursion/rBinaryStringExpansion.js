function rBinaryStringExpansion(str, all) {
	all = all || []

	if(!str.includes("?")){
		all.push(str)
		return
	}

	rBinaryStringExpansion(str.replace("?", "0"), all)
	rBinaryStringExpansion(str.replace("?", "1"), all)

	return all
}

var answer = rBinaryStringExpansion("?0?1?")

console.log(answer)