//Print and Count
//Print all integer multiples of 5, from 512 to 4096.
//Aterward, also log how many there were.

function PrintandCount() {
	var count = 0;
	for (var i = 512; i < 4096; i++) {
		if(i % 5 == 0){
			console.log(i)
			count = count + 1
		}
	}
	console.log("number of integers multiple of 5:", count)
}

PrintandCount()