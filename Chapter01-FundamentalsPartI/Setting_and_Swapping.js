//Setting and Swapping
//Set myNumber to 42. Set myName to your name.
//Now swap myNumber into myName & vice versa.

function SetandSwap() {
	var myNumber = 42
	var myName = "Jonathan"

	var temp = myNumber
	myNumber = myName
	myName = temp

	console.log("myName:", myName, "myNumber:", myNumber)
}

SetandSwap()