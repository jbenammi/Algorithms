//Assignment: 3 and 5
//Add all the values between 100 and 4000000 inclusively that are divisible by 3 or 5 but not both 3 and 5.

function threeandFive() {
	var sum = 0;
	var sumArr = []
	for(var i=100; i<=500; i++)	{
		if(i % 3 == 0 && i % 5 == 1){
			sum += i
			sumArr.push(i)
		}
		else if(i % 5 == 0 && i % 3 == 1){
			sum += i
			sumArr.push(i)
		}
	}
	console.log(sum)
	console.log(sumArr)
}

threeandFive()