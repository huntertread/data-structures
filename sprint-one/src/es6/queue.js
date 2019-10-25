class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
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
      for (var key in this.storage) {
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
  }
}


// stack = new Queue;
// console.log(stack);
// stack.enqueue('a');
// console.log(stack.storage);
// console.log(stack.sizeVal);
// console.log(stack.dequeue());
// stack.dequeue();
// console.log(stack.storage);
// stack.enqueue('b');
// stack.enqueue('c');
// console.log(stack.storage);
// stack.enqueue('d');
// console.log(stack.storage);
// console.log(stack.dequeue());
// stack.dequeue();
// console.log(stack.storage);
// console.log(stack);