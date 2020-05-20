console.log("This test makes sure we aren't putting the iterator constructors on the global object.");
var global = this;
'ArrayIterator' in this;
'ArgumentsIterator' in this;
'MapIterator' in this;
'SetIterator' in this;
