var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  newTree.children = [];  // fix me <- we fixed? changed null to []
  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    var child = Tree(value);
    this.children.push(child);
    return child;
  },

  contains: function(target, currentNode) {
    // currentNode = root node || current node
    var currentNode = currentNode || this;
    var containsValue = false;
    // if currentNode contains target
    if (currentNode.value === target) {
      // return true
      containsValue = true;
    // else if currentNode.children
    } else if (currentNode.value !== target && currentNode.children.length) {
      for (var i = 0; i < currentNode.children.length; i++) {
        return currentNode.children[i].contains(target, currentNode.children[i]);
      }
      // // iterate over the children array
      // currentNode.children.forEach(function(element) {
      //   // recurse contains fn on each index
      //   if (element.contains(target, element)) {
      //     return true;
      //   } else {
      //     element.contains(target, element);
      //   }
      // });
    // if value is never found
    } else {
      // return false
      return containsValue;
    }
  }
};

/* --- extend function --- */

var extend = function (destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

/* --- tests ---*/

var tree1 = Tree(1); // original tree
console.log(tree1);
tree1.addChild(2); // original tree's child
console.log(tree1.children);
tree1.children[0].addChild(3); // childs child
console.log(tree1.children[0]);
console.log(tree1.contains(2));