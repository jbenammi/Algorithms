##Monday##
###SList: Reverse###
Reverse the node sequence. Given an `SList` object, the `.head` property should point to the previously-last node, and the rest of the nodes should follow similary from back to front.

###SList: Kth-Last Node###
Given k, return the value that is 'k' nodes from the list's end. if given `(list, 1)`, return the list's last value. If given `(list, 4)`, return the value at the node that has exactly 3 nodes following it.

###SList: Is Palindrome###
Return whether a list is a palindrome. String palindromes read the same front-to-back and back-to-front. Here, compair node values.
N.B. - to be accurate in JavaScript, use **===** instead of **==**, since **1 == true == [1] == "1"**.

**Second:** Can you solve this without an additional list/array?

##Tuesday##

###SList: Shift Right###
Given a list, shift nodes to the right, by a given number shiftBy. these shifts are circular: when shifting a node off lists end, it reappears at list's start.
for list a=>b=>c, shift(1) should return c=>a=>b.

**Second:** also handle negative shiftBy (to left).

###SList: Sum Numerals###
You are given two lists, each representing a number. Every node value is a 0-9 digit, with first node representing least significant digit. Return a new list representing the sum. Given 2=>0=>1 & 8=>4, return 0=>5=>1 because 102 + 48 = 150.

**Second:** What if the first know is the most significant?


##Wednesday##
**Today's algorithms should be done as standalone functions.**

###SList: Flaten Children###
Why limit nodes to only contain one pointer? In this challange, each node has .next but also .child that is either NULL or points to another Head. In turn each child node could point to another list. Don't alter .child: arrange .next pointers to flatten the hierarchy into one linear list, from head through all others via .next.

###SList: Unflatten Children###
Take the output from your "flatten child lists" function (a linear linked list containing nodes with .child pointers), and restore it to its original state. Do you need to change your flatten functuon to enable this?

**Second:** for flatten & unflatten, in the case of really complex inputs, how many nested `FOR` (or `WHILE`) loops might you have? Can you solve without nested loops, even for complex inputs?

##Thursday##
###SList: Has Loop###
Ben sends linked lists to Emma, but she doesn't quite trust him. Is he trying to make her code spin infinitely? Given a linked list, determine whether it has a loop, and return a boolean accordingly.

###SList: Loop Start###
For Emma to expose Ben's nefarious intentions, she needs to locate the loops. Given a linked list, return a pointer to the node where a loop begins (where the last node points), or null if no loop.

###SList: Break Loop###
Even better than finding where the loops start would be to just fix them. You will be given a potentially loopy list; determine whether there is a loop, and if so, break it. Retain all nodes, in original order.

###SList: Number of Nodes###
Given a linked list with or without a loop, return toal number of nodes.
Given circular list k=>e=>l=>v=>i=>n=>l=>v=>..., return 6.

##Friday##

```
function DLNode(value){
	this.val = value;
	this.prev = null;
	this.next = null;
}

function DList(){
	this.head = null;
	this.tail = null;
}
```

###DList: Class###
Given the above reference implementations for doubly linked node and doubly linked list, can you construct the rest of a basic dList class? This would include dList methods push(),pop(), front(), back(), contains(), and size(). 

**Second:** Implement these so that they are available as standalone functions as well as methods on both dlNode and dList classes. 



