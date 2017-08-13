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
