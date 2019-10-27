var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if value already at index
  // push an array into the index
  // set the existing value as the first index
  // push the new value
  // if there is already an array at index
  // push the new value to the array

  // insert v into _storage @ the index value
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // use get to retrieve the value
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var self = this;
  this._storage.each(function(element, i) {
    // if index is equal to i
    if (index === i) {
      // delete storage[i]
      self._storage.set(i, undefined);
    }
  });
};

/* --- tests --- */
var testTable = new HashTable;
testTable.insert('Steven', 'Tyler');
testTable.insert('Blake', 'Reactor');
console.log(testTable);

/*
 * Complexity: What is the time complexity of the above functions?
 */


