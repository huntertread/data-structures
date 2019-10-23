var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  var position = 1;
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[position] = value;
    position++;
    size++;
  };

  someInstance.pop = function() {
    var poppedValue = someInstance.storage[position - 1];
    delete someInstance.storage[position - 1];
    position--;
    size--;
    return poppedValue;
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

// stack = new Stack;
// stack.push('a');
// console.log(stack.storage);
// console.log(stack.pop());
// stack.pop();
// console.log(stack.storage);
// stack.push('b');
// stack.push('c');
// console.log(stack.storage);
// console.log(stack.pop());
// stack.pop();
// console.log(stack.storage);

