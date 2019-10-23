var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var position = 0;
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    someInstance.storage[position] = value;
    position++;
    size++;
  };

  someInstance.dequeue = function() {
    var currentPosition = position;
    for (key in someInstance.storage) {
      if (key < currentPosition) {
        currentPosition = key;
      }
    }
    var dequeue = someInstance.storage[currentPosition];
    delete someInstance.storage[currentPosition];
    size--;
    return dequeue;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
      return size;
    } else {
      return size;
    }
  };

  return someInstance;
};
