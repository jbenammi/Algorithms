function list(val) {
	this.head = new Node(val)

	this.push = function(val){
		var runner = this.head
		while(runner.next){
			runner = runner.next
		}
		runner.next = new Node(val)
	}

	this.pop = function(){
		var runner = this.head
		while(runner.next.next){
			runner = runner.next
		}
		runner.next = null
	}

	this.shift = function(){
		var temp = this.head.next
		this.head.next = null
		this.head = temp
	}

	this.unshift = function(val){
		var temp = this.head
		this.head = new Node(val)
		this.head.next = temp
	}

	this.insert = function(pos, val){
		var runner = this.head
		var count = 0
		while(count != pos){
			runner = runner.next
			count ++
		}
		var temp = runner.next
		runner.next = new Node(val)
		runner.next.next = temp
	}
}

function Node(val){
	this.val = val;
	this.next = null;
}

var NewList = new list(10)

NewList.push(15)
NewList.push(20)
NewList.push(25)
NewList.shift()
NewList.unshift(2)
NewList.insert(2, 30)
// console.log(NewList.head.next)

function bubbleSort(arr){
	for(var i=0; i<arr.length-1; i++){
		for(var j = 0; j < arr.length; j++)
			if(arr[j]>arr[j+1]){
				var temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
	}
	console.log(arr)
}

var array = [9,5,20,15,8,2,16]

// bubbleSort(array)

function selectionSort(arr){
	for (var i = 0; i < arr.length; i++) {
		var min = arr[i]
		var point
		for (var j = i+1; j < arr.length; j++) {
			if(arr[j] < min){
				min = arr[j]
				point = j
			}
		}
		arr[point] = arr[i]
		arr[i] = min
	}
	console.log(arr)
}
// selectionSort(array)
// [9,5,20,15,8,2,16]
function insertionSort(arr){
	for(var i=0; i < arr.length-1; i++){
		var item = arr[i+1]
		for(var j = i+1; j >= 0; j--){
			if(arr[j-1]> item){
				arr[j] = arr[j-1]
			}
			else{
				arr[j] = item
				j = 0
			}	
		}
		console.log(arr)
	}
	// console.log(arr)
}
insertionSort(array)