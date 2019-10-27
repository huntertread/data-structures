var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if nothing @ index
  if (this._storage.get(index) === undefined) {
    // create a tupleBucket variable with value of [k, v]
    var tupleBucket = [[k, v]];
    // push key/value tuple in to bucket
    this._storage.set(index, tupleBucket);
  // if k already exists at index
  } else if (this.retrieve(k)) {
    // delete the current value
    this.remove(k);
    return this._storage.get(index).push([k, v]);
  // if there is already a bucket array at index
  } else if (this._storage.get(index) !== undefined) {
    // push the new key/value tuple to the array
    return this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // iterate over bucket @ index
  for (var i = 0; i < bucket.length; i++) {
    // if bucket[i] is defined
    if (bucket[i] !== undefined) {
      // check for k @ each index[0]
      if (bucket[i][0] === k) {
        // if match found return index[1]
        return bucket[i][1];
      }
    }
  }
};


HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var self = this;
  // iterate over index
  for (var i = 0; i < this._storage.get(index).length; i++) {
    // if index[i][0] equals k
    if (this._storage.get(index)[i][0] === k) {
      // delete index[i]
      delete this._storage.get(index)[i];
    }
  }
};
// console.log(this._storage.get(index)[0].includes(k), 'hi');

/* --- tests --- */
var testTable = new HashTable;
testTable.insert('Steven', 'Tyler');
testTable.insert('Blake', 'Reactor');
console.log(testTable);

/*
 * Complexity: What is the time complexity of the above functions?
 */


