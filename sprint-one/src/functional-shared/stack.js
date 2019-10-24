var Stack = function() {
  var newStack = {};
  newStack.storage = {};
  newStack.sizeVal = 0;
  newStack.position = 0;
  newStack.push = push;
  newStack.pop = pop;
  newStack.size = size;
  return newStack;
};

var push = function(value) {
  var position = this.position;
  var sizeVal = this.sizeVal;
  this.storage[position] = value;
  this.position++;
  this.sizeVal++;
};

var pop = function() {
  var position = this.position;
  var sizeVal = this.sizeVal;
  var poppedVal = this.storage[position - 1];
  delete this.storage[position - 1];
  this.position--;
  this.sizeVal--;
  return poppedVal;
};

var size = function() {
  var sizeVal = this.sizeVal;
  if (sizeVal < 0) {
    sizeVal = 0;
    return sizeVal;
  } else {
    return sizeVal;
  }
};

// stack = new Stack;
// stack.push('a');
// console.log(stack.storage);
// console.log(stack.sizeVal);
// console.log(stack.pop());
// stack.pop();
// console.log(stack.storage);
// stack.push('b');
// stack.push('c');
// console.log(stack.storage);
// stack.push('d');
// console.log(stack.storage);
// console.log(stack.pop());
// stack.pop();
// console.log(stack.storage);
// console.log(stack);