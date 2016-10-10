function GenerateCoinChange(num) {
	quarter = num%25
	q = (num-quarter)/25
	dime = quarter%10
	d = (quarter-dime)/10
	nickle = dime%5
	n = (dime-nickle)/5
	penny = nickle%1
	p = (nickle-penny)/1

	console.log("Quarter(s):", q, "Dime(s):", d, "Nickle(s):", n, "Penny(ies):", p)
}

// GenerateCoinChange(86)


function rChange(num, values, change){
	change = change || {}
	if(values.length == 0){
		console.log(change)
		return
	}
	remainder = num%values[values.length-1]
	change[values[values.length-1]] = (num-remainder)/values[values.length-1]
	values.length -= 1
	rChange(remainder, values, change)
}

var values = [1,5,10,25]
// rChange(99, values)



console.log(values.reduce(getSum))