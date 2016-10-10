function SumofSquares(int){
	var stack = []
	var build = []
	var possib = []
	sum = 0
	number = 1
	while(number*number <= int){
		stack.push(number * number)
		number ++
	}
	console.log(stack)
	for(var i = stack.length-1; i>= 0; i--){
		sum = stack[i]
		if(sum == int){
			build.push(stack[i])
			possib.push(build)
			build = []
			continue
		}
		for(var j = i-1; j >=0; j--){
			sum += stack[j]
			if(sum == int){
				build.push(stack[i])
				build.push(stack[j])
				possib.push(build)
				build = []
				break
			}
			else if(sum < int){
				build.push(stack[j])
			}
			else if(sum> int && j == 0){
				build = []
				sum = stack[i]
			}
			else if(sum> int && j > 0){
				sum -= stack[j]
			}
		}
		if(sum<int){
			build = []
		}
		console.log(possib)
	}
}

SumofSquares(30)


function rSumofSquares(int, num, build, possib) {
build = build || []
possib = possib || []
num = num || Math.floor(Math.sqrt(int))
var sum = (num*num)
  if(num === 1){
    return build
  }
  if(sum == int){
    build.push(sum)
    possib.push(build)
    build = []
  }
  build.push(sum)
 rInnerSumofSquares(int, sum, num-1, build, possib)
 if(build.reduce(getSum) == int){
   possib.push(build)
   build = []
 }
 else{
  build = []
 }
 rSumofSquares(int, num-1, build, possib)
 return possib
}

function getSum(total, num) {
    return total + num;
}

function rInnerSumofSquares(int, sum, num, build, possib) {

  if(num == 0){
    return
  }
  sum += (num*num)
  if(sum == int){
    build.push(num*num)
    return build
  }
  else if(sum < int){
    build.push(num*num)
  }
  else if(sum>int && num == 1){
    build = []
    return build
  }
  else if(sum>int && num > 1){
      sum -= (num*num)
  }
  rInnerSumofSquares(int, sum, num-1, build, possib)
  return
}

console.log(rSumofSquares(200))