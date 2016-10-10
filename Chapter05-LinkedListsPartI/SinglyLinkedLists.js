function singlyLinkedList() {
	this.head = null;


//This function adds a new node to the front of a list. if there are no nodes yet in the list, it will add it to the head.
	this.addToFront = function(value){
		if(!this.head){
			this.head = new node(value)
		}
		else{
			var newNode = new node(value)
			newNode.next = this.head
			this.head = newNode
		}
		return this
	}

	this.addToEnd = function(value){
		if(!this.head){
			this.head = new node(value)
		}
		else{
			var current = this.head
			while(current.next){
				current = current.next
			}
			current.next = new node(value)
		}
		return this
	}

	this.getLength = function(){
		if(!this.head){
			return null
		}
		else{
			var length = 0
			var current = this.head
			while(current){
				length ++
				console.log(current.value)
				current = current.next
			}
			return length
		}
	};

	this.nthFromEnd = function(nth){
		if(!this.head){
			return null
		}
		else{
			var current = this.head
			var length = this.getLength() - nth
			var pointer = 0
			while(length != pointer){
				current = current.next
				pointer ++
			}
			return current.value
		}
	};
}

function node(value){
	this.value = value;
	this.next = null;
}


function secondToEnd(node){
	if(!node.next.next){
		return null
	}
	else{
		var runner = node.next
		var current = node
		while(runner.next){
			runner = runner.next
			current = current.next
		}
		return current.value
	}
}

function filterSLL(headNode, lowVal, highVal){
	var newList = new singlyLinkedList()
	newList.head = new node('start')
	var listTwo = newList.head
	var current = headNode
	while(current){
		if(current.value > lowVal && current.value < highVal){
			listTwo.next = current
			listTwo = listTwo.next
		}
		current = current.next
	}
	newList.head = newList.head.next
	return newList
}

function removeNode(node){
	var current = node
	console.log(current)
	while(current.next.next) {
		current.value = current.next.value
		current = current.next
		console.log("current in the while:", current)
	}
	current.value = current.next.value
	current.next = current.next.next
}

function reverse(slist){
	if(!slist.head || !slist.head.next){
		return slist
	}
	var runner1 = slist.head
	var hold = new node("hold")
	var runner2 = hold
	var previous;
	while(slist.head.next){
		if(!runner1.next){
			runner2.next = runner1
			runner2 = runner2.next
			runner1 = slist.head
			previous.next = null
		}
		else{
			previous = runner1
			runner1 = runner1.next
		}
	}
	runner2.next = runner1
	slist.head = hold.next
	return slist
}

var myList = new singlyLinkedList()

myList.addToEnd(10).addToEnd(5).addToEnd(30).addToEnd(40).addToFront(22).addToFront(4).addToFront(7)
console.log("The length of this list is: ", myList.getLength())

reverse(myList)
// console.log("The Nth from the end is: ", myList.nthFromEnd(1))
console.log("The length of this list is: ", myList.getLength())
reverse(myList)
console.log("The length of this list is: ", myList.getLength())

// console.log("the secondToEnd value is: ",secondToEnd(myList.head))
// newList = filterSLL(myList.head, 7, 30)
// console.log(myList)
// console.log(newList.head.next)

// removeNode(myList.head.next.next)

// console.log("The length of this list is: ", myList.getLength())
