var Stack = function() {
  var newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {
  storage: {},
  sizeVal: 0,
  position: 0,
  push: function(value) {
    this.storage[this.position] = value;
    this.position++;
    this.sizeVal++;
  },
  pop: function() {
    var poppedVal = this.storage[this.position - 1];
    delete this.storage[this.position - 1];
    this.position--;
    this.sizeVal--;
    return poppedVal;
  },
  size: function() {
    if (this.sizeVal < 0) {
      this.sizeVal = 0;
      return this.sizeVal;
    } else {
      return this.sizeVal;
    }
  },
};