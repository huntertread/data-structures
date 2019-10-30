var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.position = 0;
  someInstance.sizeVal = 0;
  // someInstance.enqueue = enqueue;
  // someInstance.dequeue = dequeue;
  // someInstance.size = size;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

/* shared functions */

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var position = this.position;
  this.storage[position] = value;
  this.position++;
  this.sizeVal++;
};

queueMethods.dequeue = function() {
  var currentPosition = this.position;
  for (key in this.storage) {
    if (key < currentPosition) {
      currentPosition = key;
    }
  }
  var dequeue = this.storage[currentPosition];
  delete this.storage[currentPosition];
  this.sizeVal--;
  return dequeue;
};

queueMethods.size = function() {
  if (this.sizeVal < 0) {
    this.sizeVal = 0;
    return this.sizeVal;
  } else {
    return this.sizeVal;
  }
};


