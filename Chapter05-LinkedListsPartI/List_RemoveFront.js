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


function removeFront(pointer){
	
}

removeFront(myList.head)