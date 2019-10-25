var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    // if list.head is null
    if (list.head === null) {
      // set new node to head (and tail)
      list.head = newNode;
      list.tail = newNode;
    // if list.head ! null
    } else {
      // set current tail's next value to the newly created node
      list.tail.next = newNode;
      // set new node to tail
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    // save the tbd node to a variable to be returned at end of func
    var toBeRemoved = list.head.value;
    // if list.head is null
    if (list.head === null) {
      // do nothing
      return "THIS LIST IS EMPTY FOOL";
    }
    // if list.head ! null
    if (list.head !== null) {
      // list.head = list.head.next
      list.head = list.head.next;
    }
    // return tbd node
    return toBeRemoved;
  };

  list.contains = function(target, inputNode) {
    var currentNode = inputNode || list.head;
    // if current node contains target (if list.head.value === target)
    if (currentNode.value === target) {
      // return true
      return true;
    // else if current node does NOT contain target
    } else if (currentNode.value !== target && currentNode.next) {
      // recurse on currentNode.next
      return list.contains(target, currentNode.next);
    // if it gets all the way through the list and doesnt find target
    } else {
      // return false
      return false;
    }
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var newLinkedList = LinkedList();
// console.log(newLinkedList.addToTail('88'));
var firstLinkedList = LinkedList();
console.log(firstLinkedList);
var testNode = Node('test val');
console.log(testNode);

