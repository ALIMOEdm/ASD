/*
http://neerc.ifmo.ru/wiki/index.php?title=%D0%A1%D1%82%D0%B5%D0%BA
*/
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
