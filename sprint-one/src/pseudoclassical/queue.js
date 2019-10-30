var Queue = function() {
  // this.newQueue = {};
};

Queue.prototype.storage = {};
Queue.prototype.position = 0;
Queue.prototype.sizeVal = 0;
Queue.prototype.enqueue = function(value) {
  this.storage[this.position] = value;
  this.position++;
  this.sizeVal++;
};
Queue.prototype.dequeue = function() {
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
Queue.prototype.size = function() {
  if (this.sizeVal < 0) {
    this.sizeVal = 0;
    return this.sizeVal;
  } else {
    return this.sizeVal;
  }
};



