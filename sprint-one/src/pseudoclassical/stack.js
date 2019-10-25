var Stack = function() {
  this.newStack = {};
};

Stack.prototype.storage = {};
Stack.prototype.sizeVal = 0;
Stack.prototype.position = 0;
Stack.prototype.push = function(value) {
  this.storage[this.position] = value;
  this.position++;
  this.sizeVal++;
};
Stack.prototype.pop = function() {
  var poppedVal = this.storage[this.position - 1];
  delete this.storage[this.position - 1];
  this.position--;
  this.sizeVal--;
  return poppedVal;
};
Stack.prototype.size = function() {
  if (this.sizeVal < 0) {
    this.sizeVal = 0;
    return this.sizeVal;
  } else {
    return this.sizeVal;
  }
};


// stack = new Stack;
// console.log(stack);
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


