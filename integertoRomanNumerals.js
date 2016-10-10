function integerToRomanNumerls(int) {
		var str = ""
	if(int>=1000){
		var TH = int % 1000
		console.log(TH)
		var thousands = (int - TH) / 1000
		console.log(thousands)
		for(var i = 0; i<thousands; i++){
			str += "M"
		}
		console.log(str)
	}
	if(TH>=500 && TH<1000){
		var FH = remainder % 500
		console.log(remainder)
		var fivehundred = ()
	}

}

integerToRomanNumerls(2516)