// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a new node object
  var newNode = {
    value: node,
    edges: []
  };
  // push new node in to the graph.nodes array
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // iterate over this.nodes
  for (var i = 0; i < this.nodes.length; i++) {
    // if this.nodes[i].value === node
    if (this.nodes[i].value === node) {
      // return true
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if graph contains node
  if (this.contains(node)) {
    // run filter using contains method
    // remove node from graph
    this.nodes = this.nodes.filter(function(element) {
      (!element.value === node);
    });
    // return nodes array
    return this.nodes;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if fromNode.edges contains toNode && toNode.edges contains fromNode
  if (this.getNode(fromNode).edges.includes(toNode) && this.getNode(toNode).edges.includes(fromNode)) {
    // return true
    return true;
  }
  // return false
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var graphClass = this.nodes;
  // push toNode into fromNode.edges array
  this.getNode(fromNode).edges.push(toNode);
  // push fromNode into toNode.edges array
  this.getNode(toNode).edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/* --- helper function --- */

Graph.prototype.getNode = function(node) {
  // iterate over this.nodes
  for (var i = 0; i < this.nodes.length; i++) {
    // if this.nodes[i].value === node
    if (this.nodes[i].value === node) {
      // return this.nodes[i];
      return this.nodes[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/* --- tests --- */
var testGraph = new Graph;
testGraph.addNode(33);
testGraph.addNode(66);
testGraph.addEdge(66, 33);
console.log(testGraph.nodes[0].edges);
console.log(testGraph.nodes[1].edges);
console.log(testGraph);
console.log(testGraph.nodes);
console.log(testGraph.nodes[0]);
console.log(testGraph.contains(33));


