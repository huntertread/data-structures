var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  newTree.children = []; // fix me <- we fixed? changed null to []
  return newTree;
};

var treeMethods = {

  addChild: function(value) {
    var child = Tree(value);
    this.children.push(child);
    return child;
    //constant: O(1)
  },

  contains: function(target, currentNode) {
    // currentNode = root node || current node
    var currentNode = currentNode || this;
    // if current node contains target value
    if (currentNode.value === target) {
      // return true
      return true;
    // if current node has children
    } else if (currentNode.children.length > 0) {
      // iterate over the children
      for (var i = 0; i < currentNode.children.length; i++) {
        // recurse over each child
        // if any of the recursive calls return true
        if (currentNode.contains(target, currentNode.children[i])) {
          // return true
          return true;
        }
      }
    }
    return false;
  }
  //linear: O(n)
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

// var tree1 = Tree(1); // original tree
// console.log(tree1);
// tree1.addChild(2); // original tree's child
// console.log(tree1.children);
// tree1.children[0].addChild(3); // childs child
// console.log(tree1.children[0]);
// console.log(tree1.contains(2));