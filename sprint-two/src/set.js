var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {

  add: function(item) {
    // if item does not exist in storage
    if (!this.contains(item)) {
      // add item to storage
      this._storage.push(item);
    }
  },

  contains: function(item) {
    // if set includes item
    if (this._storage.includes(item)) {
      // return true
      return true;
      // else
    } else {
      // return false
      return false;
    }
  },

  remove: function(item) {
    // remove item from set
    this._storage = this._storage.filter(function(element) {
      return element !== item;
    });
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
