function FerinheitToCelcius(fdeg) {
	console.log((fdeg - 32) * 5/9)
}

FerinheitToCelcius(90)


function CelciustoFerinheit(cdeg){
	console.log((9/5 * cdeg) +32)
}

CelciustoFerinheit(100)

function equalTemp(){
	for (var i = 200; i > -201; i--) {
		var f = (9/5 * i) + 32
		if(i === f){
			console.log(i)
		}
	}
}

equalTemp()