// function tree(val) {
// 	this.root = new Node(val)

// 	this.add = function(val){
// 		var runner = this.root
// 		while(runner){
// 			if(val>runner.val && runner.right){
// 				runner = runner.right
// 			}
// 			else if(val>runner.val && !runner.right){
// 				runner.right = new Node(val)
// 				return
// 			}
// 			if(val<runner.val && runner.left){
// 				runner = runner.left
// 			}
// 			else if(val<runner.val && !runner.left){
// 				runner.left = new Node(val)
// 				return
// 			}
// 		}
// 	}

// 	this.find = function(val){
// 		var runner = this.root
// 		while(runner){
// 			if (runner.val == val) {
// 				return runner
// 			}
// 			if(val > runner.val){
// 				runner = runner.right
// 			}
// 			if(val < runner.val){
// 				runner = runner.left
// 			}
// 		}
// 		return false
// 	}
	

// 	this.height = function(node){
// 		if(!node){
// 			return 0
// 		}
// 		return (Math.max(this.height(node.left), this.height(node.right)) +1)
// 	}

// }

// function Node(val){
// 	this.val = val
// 	this.right = null
// 	this.left = null
// }

// var CherryTree = new tree(15)
// CherryTree.add(10)
// CherryTree.add(20)
// CherryTree.add(8)
// CherryTree.add(23)
// CherryTree.add(28)
// console.log(CherryTree.find(23))
// console.log(CherryTree.height(CherryTree.root))
// console.log(CherryTree.root)


function BST(){
	this.root = null;

	this.add = function(val){
		if(!this.root){
			this.root = new Node(val)
			return this
		}
		var current = this.root
		while(current){
			if(val>=current.value && current.right){
				current = current.right
			}
			else if(val>=current.value && !current.right){
				current.right = new Node(val)
				return this
			}
			if(val<current.value && current.left){
				current = current.left
			}
			else if(val<current.value && !current.left){
				current.left = new Node(val)
				return this
			}
		}
	}

	// this.delete = function(value){
	// 	var current = this.root

	// }

	this.minVal = function(node){
		var current = node || this.root
		while(current.left){
			current = current.left
		}
		return current.value
	}

	this.maxVal = function(node){
		var current = node || this.root
		while(current.right){
			current = current.right
		}
		return current.value
	}

	this.isValid = function(node){
		node = node || this.root
		if (!node) {
			return true
		}

		if(node.left != null && maxVal(node.left)> node.value){
			return false
		}
		if(node.right != null && minVal(node.right)< node.value){
			return false
		}
		if(!isValid(node.right) || !isValid(node.left)){
			return false
		}

		return true
	}

	this.isEmpty = function(){
		if(!this.root){
			return true
		}
		return false
	}

	this.containsVal = function(val){
		if(!this.root){
			return false
		}
		var current = this.root
		while(current){
			if(current.value == val){
				return true
			}
			else if(val>current.value){
				current = current.right
			}
			else{
				current = current.left
			}
		}
		return false
	}

	this.max = function(){
		if(!this.root){
			return false
		}
		current = this.root
		while(current.right){
			current = current.right
		}
		return current.value
	}

	this.min = function(){
		if(!this.root){
			return false
		}
		current = this.root
		while(current.left){
			current = current.left
		}
		return current.value
	}	
}

function Node(val){
	this.value = val;
	this.right = null;
	this.left = null;
}

var tree = new BST()
tree.add(10).add(5).add(15).add(20).add(1)

// console.log(tree.root.left)

function BSTSize(node) {
	sum = 0
	if(!node){
		return 0
	}
	sum += (BSTSize(node.left)) + (BSTSize(node.right))+1
	return sum

}


function height(node){

	if(!node){
		return 0
	}

	left = height(node.left)+1
	right= height(node.right)+1

	if(left>=right){
		return left
	}
	else{
		return right
	}
}

function isBallanced(node){

	if(!node){
		return true
	}

	leftHeight = height(node.left)
	rightHeight = height(node.right)

	if(Math.abs(leftHeight - rightHeight)<=1 && isBallanced(node.left) && isBallanced(node.right)){
		return true
	}
	else{
		return false
	}
}

console.log(isBallanced(tree.root))