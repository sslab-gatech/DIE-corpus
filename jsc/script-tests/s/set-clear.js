console.log("Tests basic correctness of ES Set's clear() API"); // Set containing only String types.

var stringSet = new Set();
stringSet.add('Oliver');
stringSet.add('Benjamin');
stringSet.clear();
stringSet.size;
stringSet.values.length;
stringSet.has('Oliver');
stringSet.has('Benjamin'); // Set containing only primitive values.

var valueSet = new Set();
valueSet.add(0);
valueSet.add(1);
valueSet.clear();
valueSet.size;
valueSet.values.length;
valueSet.has(0);
valueSet.has(1); // Set containing objects;

var objectSet = new Set();
var anArray = new Array();
objectSet.add(anArray);
var anObject = new Object();
objectSet.add(anObject);
var otherObject = {
  "a": 1,
  "b": 2
};
objectSet.add(otherObject);
objectSet.clear();
objectSet.size;
objectSet.values.length;
objectSet.has(anArray);
objectSet.has(anObject);
objectSet.has(otherObject); // Mixed types.

var mixedTypeSet = new Set();
mixedTypeSet.add(0);
mixedTypeSet.add('Oliver');
mixedTypeSet.add(stringSet);
mixedTypeSet.add(valueSet);
mixedTypeSet.add(objectSet);
mixedTypeSet.add(anObject);
mixedTypeSet.clear();
mixedTypeSet.size;
mixedTypeSet.values.length;
mixedTypeSet.has(0);
mixedTypeSet.has('Oliver');
mixedTypeSet.has(stringSet);
mixedTypeSet.has(valueSet);
mixedTypeSet.has(objectSet);
mixedTypeSet.has(anObject);
