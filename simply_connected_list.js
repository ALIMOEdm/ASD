function Node(value) {
    this.value = value;
    this.next = null;
}

function List() {
    this.head = null; // указатель на голову списка
}

List.prototype.insert = function (node) {
    if (!this.head) {
        this.head = node;
    } else {
        node.next = this.head.next;
        this.head.next = node;
    }
};

List.prototype.search = function (value) {
    var node = this.head;
    while (node && value !== node.value) {
        node = node.next
    }

    return node;
};

List.prototype.removeHead = function () {
    this.head = this.head.next;
};

// Delete node which after the current node
List.prototype.removeAfter = function (node) {
    if (node.next) {
        var tmp = node.next.next;
        node.next = tmp;
    }
};

List.prototype.removeByValue = function (value) {
    var node = this.head;
    var previousNode = null;
    while (node && value !== node.value) {
        previousNode = node;
        node = node.next
    }

    if (node) {
        previousNode.next = node.next;
    }
};
