/*
http://neerc.ifmo.ru/wiki/index.php?title=%D0%9E%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D1%8C
*/
function Queue() 
{
	this.queue = [];
	this.maxSize = 20;
}

Queue.prototype.empty = function () {
	return this.queue.length === 0;
}

Queue.prototype.size = function () {
	return this.queue.length ;
}

Queue.prototype.push = function (val) {
	if (this.size() !== this.maxSize) {
		this.queue.push(val);	
	}
}

Queue.prototype.pop = function () {
	if (this.empty()) {
		return null;
	}
	
	var element = this.queue[0];
	this.queue = this.queue.slice(1, this.size());
	
	return element;
}

var queue = new Queue;
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop());

// Queue based on list
function Node(value)
{
	this.value = value;
	this.next = null;
}

function QueueOnList()
{
	this.head = null;
	this.tail = null;
}

QueueOnList.prototype.push = function (val) {
	var node = this.tail;
	this.tail = new Node(val);
	if (!this.head) {
		this.head = this.tail;
	} else {
		node.next = this.tail;
	}
}

QueueOnList.prototype.pop = function () {
	var element = this.head;
	this.head = this.head.next;
	
	return element;
}

var ob = new QueueOnList;
ob.push(1);
ob.push(2);
ob.push(3);
console.log(ob.pop);
