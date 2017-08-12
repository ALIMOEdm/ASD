/*
http://neerc.ifmo.ru/wiki/index.php?title=Hashed_Array_Tree
http://www.keithschwarz.com/interesting/code/?dir=hashed-array-tree

In computer science, a hashed array tree (HAT) is a dynamic array data-structure published by Edward Sitarski in 1996,[1] maintaining an array of separate memory fragments (or "leaves") to store the data elements, unlike simple dynamic arrays which maintain their data in one contiguous memory area. Its primary objective is to reduce the amount of element copying due to automatic array resizing operations, and to improve memory usage patterns.

Whereas simple dynamic arrays based on geometric expansion waste linear (Ω(n)) space, where n is the number of elements in the array, hashed array trees waste only order O(√n) storage space. An optimization of the algorithm allows to eliminate data copying completely, at a cost of increasing the wasted space.

It can perform access in constant (O(1)) time, though slightly slower than simple dynamic arrays. The algorithm has O(1) amortized performance when appending a series of objects to the end of a hashed array tree. Contrary to its name, it does not use hash functions.
*/

function HAT(power)
{
	this._size = Math.pow(2, power);
	this.top = new Array(this._size);
	
	this.mSize = 0; // Number of elements in the array
	
	this.scale = 2; // Whe array is filled just increase the size of it in 2 times
}
HAT.prototype.size = function () {
	return this.mSize;
};

HAT.prototype.add = function (val) {
	if (this.size() === Math.pow(this._size, 2)) {
		this._grow();
	}
	
	var offset = this.computeOffset(this.size());
	var index = this.computeIndex(this.size());
	
	if (!this.top[offset]) {
		this.top[offset] = new Array(this._size);
	}
	
	this.top[offset][index] = val;
	
	this.mSize++;
	
	return true;
}

HAT.prototype.remove = function (index) {
	
}

HAT.prototype.set = function (index, element) {
	
}

HAT.prototype.set = function (index) {
	
}

// Offset in main array(array of pointers)
HAT.prototype.computeOffset = function (index) {
	return Math.floor(index / this._size);
}
// Index in a leaf
HAT.prototype.computeIndex = function (index) {
	return index % this._size;
}

HAT.prototype._grow = function () {
	var cacheSize = this._size;

	this._size *= this.scale;

	var cache = this.top;

	this.top = new Array(this._size);
	var counter = 0;
	// For scale 2 step will be 2, for 4 will be 4
	for (var i = this.scale - 1; i < cache.length; i = i + this.scale) {
		var j = i - this.scale + 1;
		if (!this.top[counter]) {
			this.top[counter] = new Array(this._size);
		}
		// For scale 2 we will do 2 iteration, and fill every array in new top.
		var counter2 = 0;
		while (j <= i) {
			for (var k = 0; k < cacheSize; k++) {
				this.top[counter][counter2] = cache[j][k];
				counter2++;
			}
			j++;
		}
		
		counter++;
	}
}

// Decreases the size of the HAT by shrinking into a better fit.
HAT.prototype.shrink = function () {
	// If the old array was size 8, it can contains 64 items. new array will contain 16 items
	// For size 4 number of items - 16, and it decrease to 2 size with only 4 items
	if (this.size() > Math.pow(2, this._size) / 4) {
		return;
	}
	
	var newSize = this._size / this.scale;

	if (newSize < 2) {
		return;
	}
	
	var cache = this.top;
	var cacheSize = this._size;
	this._size = newSize;
	this.top = new Array(this._size);
	
	var counter = 0;
	var counter2 = 0;
	for (var i = 0; i < this._size; i++) {
		if (!cache[counter]) {
			break;
		}
		
		for (var j = 0; j < this._size; j++) {
			if (!cache[counter][counter2]) {
				break;
			}
			
			if (!this.top[i]) {
				this.top[i] = new Array(this._size);
			}
			
			this.top[i][j] = cache[counter][counter2];
			counter2++;
		}
		// Increase index of the old array once in this.scale staps
		if (i && !(i % this.scale)) {
			counter++;
		}
		
		// Flush the once in index of the old subArrays cacheSize times
		if (counter2 === cacheSize) {
			counter2 = 0;
		}
	}
}

/*
var hat = new HAT(2);
hat.add(1);
hat.add(2);
hat.add(3);
hat.add(4);
hat.add(5);
hat.add(6);
hat.add(7);
hat.add(9);
hat.add(8);
hat.add(10);
hat.add(11);
hat.add(12);
hat.add(13);
hat.add(14);
hat.add(15);
hat.add(16);
hat.add(17);
*/
