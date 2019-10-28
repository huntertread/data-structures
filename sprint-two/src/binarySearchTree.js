var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(childValue, currentNode) {
  // accepts a value and places it in the tree in the correct position
  var currentNode = currentNode || this;
  var childNode = new BinarySearchTree(childValue);
  // if child value is less than parent value
  if (childValue < currentNode.value) {
    // if child value left already has a value
    if (currentNode.left !== null) {
      // recurse on the left node
      return currentNode.insert(childValue, currentNode.left);
    } else {
      // place in left node
      currentNode.left = childNode;
    }
  }
  // if child value is greater than parent value
  if (childValue > currentNode.value) {
    // if child value right already has a value
    if (currentNode.right !== null) {
      // recurse on the right node
      return currentNode.insert(childValue, currentNode.right);
    } else {
      // place in right node
      currentNode.right = childNode;
    }
  }
};

BinarySearchTree.prototype.contains = function(targetValue, currentNode) {
  // accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  var currentNode = currentNode || this;
  // if current node contains target value
  if (currentNode.value === targetValue) {
    // return true
    return true;
  // if currentNode has children and target is less than current
  } else if (currentNode.value > targetValue && currentNode.left) {
    // recurse on currentNode.left
    return this.contains(targetValue, currentNode.left);
  // if currentNode has children and target is greater than current
  } else if (currentNode.value < targetValue && currentNode.right) {
    // recurse on currentNode.right
    return this.contains(targetValue, currentNode.right);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callBack, currentNode) {
  // accepts a callback and executes it on every value contained in the tree.
  var currentNode = currentNode || this;
  // run call back on current node value
  callBack(currentNode.value);
  // if current node has property @ left
  if (currentNode.left !== null) {
    // recurse callback on left
    currentNode.depthFirstLog(callBack, currentNode.left);
  }
  // if current node has property @ right
  if (currentNode.right !== null) {
    // recurse callback on right
    currentNode.depthFirstLog(callBack, currentNode.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* --- tests --- */

var newTree = new BinarySearchTree(100);
newTree.insert(50);
newTree.insert(200);
newTree.insert(25);
newTree.insert(10);
newTree.insert(150);
console.log(newTree);
console.log(newTree.contains(10));
