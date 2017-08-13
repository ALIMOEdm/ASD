//Stack on array
function Stack()
{
	this.stack = [];
}

Stack.prototype.push = function (val) {
	this.stack.push(val);
}

Stack.prototype.empty = function () {
	return this.stack.length === 0;
}

Stack.prototype.pop = function () {
	if (this.empty()) {
		return ;
	}
	
	var stackLength = this.stack.length;
	var top = this.stack[stackLength - 1];
	this.stack = this.stack.slice(0, stackLength - 1);
	
	return top;
}

var stack = new Stack;
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());

//Stack on list
function Node(value)
{
	this.value = value;
	this.next = null;
}

function StackOnList()
{
	this.head = null;
}

StackOnList.prototype.push = function (val) {
	var node = new Node(val);
	if (!this.head) {
		this.head = node;
	} else {
		var temp = this.head;
		this.head  = node;
		this.head.next = temp;
	}
}

StackOnList.prototype.empty = function () {
	return !this.head;
}

StackOnList.prototype.pop = function () {
	if (this.empty()) {
		throw new Error('Stack is empty');
	}
	
	var temp = this.head;
	this.head = this.head.next;
	
	return temp.value;
}

var stackList = new StackOnList;
stackList.push(1);
stackList.push(2);
stackList.push(3);
console.log(stackList.pop());
