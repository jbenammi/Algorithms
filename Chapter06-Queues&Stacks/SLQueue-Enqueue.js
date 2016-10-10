function SLQueue() {
	this.head = null
	this.tail = null


	this.enqueue = function(value) {
		var newNode = new Node(value)
		if(!this.head){
			this.head = newNode
		}
		else{
			this.tail.next = newNode
		}
		this.tail = newNode
		return this
	}

	this.dequeue = function() {
		var removed = this.head.val
		this.head = this.head.next
		return removed
	}

	this.front = function() {
		return this.head.val
	}

	this.contains = function(value){
		if(!this.head){
			return false
		}
		var cur = this.head
		while(cur){
			if(cur.val == value){
				return true
			}
			cur = cur.next
		}
		return false
	}

	this.isEmpty = function() {
		if(!this.head){
			return true
		}
		else{
			return false
		}
	}

	this.size = function(){
		var cur = this.head
		var count = 0
		while(cur){
			count++
			cur = cur.next
		}
		return count
	}
}

function Node(value) {
	this.val = value
	this.next = null
}

var Queue_1 = new SLQueue()
var Queue_2 = new SLQueue()

Queue_1.enqueue(4).enqueue(10).enqueue(13).enqueue(15).enqueue(4).enqueue(13).enqueue(20).enqueue(3)
Queue_2.enqueue(4).enqueue(10).enqueue(13).enqueue(15).enqueue(4).enqueue(13).enqueue(20)
console.log(Queue_1.size())


function compare(Q1, Q2) {
	var cur_1 = Q1.head
	var cur_2 = Q2.head
	while(cur_1 && cur_2){
		if(cur_1.val == cur_2.val){
			cur_1 = cur_1.next
			cur_2 = cur_2.next			
		}
		else{
			return "Queues are not equal"
		}
	}
	if(cur_1 || cur_2){
		return "Queues are not equal"
	}
	else{
		return "Queues are equal"
	}
}

console.log(compare(Queue_1, Queue_2))


function removeMin(Q) {
	if(!Q.head){
		return false
	}
	var cur = Q.head
	var lowest = Q.head.val

	while(cur){
		if(cur.val < )
	}

}