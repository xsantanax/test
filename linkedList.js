//build linked list
function LinkedList() {
  this.head = null;
  this.tail = null;
}

//build node
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

//add to head
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

//add to tail
LinkedList.prototype.addToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

//traverse list
LinkedList.prototype.traverse = function (fn) {
  var currentNode = this.head;
  while (currentNode) {
    fn(currentNode);
    currentNode = currentNode.next;
  }
};

//create list
var list = new LinkedList();

list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);

list.traverse(function (node) {
  console.log(node.value);
});
