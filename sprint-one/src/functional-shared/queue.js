var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.position = 0;
  someInstance.sizeVal = 0;
  someInstance.enqueue = enqueue;
  someInstance.dequeue = dequeue;
  someInstance.size = size;
  return someInstance;
};

/* shared functions */

var enqueue = function(value) {
  var position = this.position;
  this.storage[position] = value;
  this.position++;
  this.sizeVal++;
};

var dequeue = function() {
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

var size = function() {
  if (this.sizeVal < 0) {
    this.sizeVal = 0;
    return this.sizeVal;
  } else {
    return this.sizeVal;
  }
};


