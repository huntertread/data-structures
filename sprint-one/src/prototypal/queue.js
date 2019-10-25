var Queue = function() {
  var newStack = Object.create(queueMethods);
  return newStack;
};

var queueMethods = {
  storage: {},
  position: 0,
  sizeVal: 0,
  enqueue: function(value) {
    this.storage[this.position] = value;
    this.position++;
    this.sizeVal++;
  },
  dequeue: function() {
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
  },
  size: function() {
    if (this.sizeVal < 0) {
      this.sizeVal = 0;
      return this.sizeVal;
    } else {
      return this.sizeVal;
    }
  }
};


