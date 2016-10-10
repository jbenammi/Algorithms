//List: Add Front
//Rudy isn't as nice as other kids. Generally he just cuts in line, in front of everyone else.
//Given a pointer to the first ListNode and a value, create a new node, assign it to the list head and return a pointer to the new head node.


function singlyLinkedList() {
	this.head = null;


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

}

function node(value){
	this.value = value;
	this.next = null;
}

var myList = new singlyLinkedList()

myList.addToFront(10).addToFront(3)

console.log(myList)


function singlyLinkedList2() {
	this.head = null;
}

function node2(value){
	this.value = value;
	this.next = null;
}

function addToFront2(pointer, value){
	var newNode = new node2(value)
	if(!pointer){
		pointer = newNode
	}
	else{
		newNode.next = pointer
		pointer = newNode
	}
	return pointer
}

var myList2 = new singlyLinkedList2()

myList2.head = addToFront2(myList2.head, 12)
myList2.head = addToFront2(myList2.head, 5)
myList2.head = addToFront2(myList2.head, 16)

console.log(myList2)