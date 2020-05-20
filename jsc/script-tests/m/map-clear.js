console.log("Tests basic correctness of ES Map's clear() API"); // Map containing only String types.

var stringMap = new Map();
stringMap.set('Oliver', 'Hunt');
stringMap.set('Benjamin', 'Poulain');
stringMap.clear();
stringMap.size;
stringMap.values.length;
stringMap.has('Oliver');
stringMap.has('Benjamin'); // Map containing only primitive values.

var valueMap = new Map();
valueMap.set(0, 1);
valueMap.set(1, 2);
valueMap.clear();
valueMap.size;
valueMap.values.length;
valueMap.has(0);
valueMap.has(1); // Map containing objects;

var objectMap = new Map();
var anArray = new Array();
objectMap.set(anArray, 0);
var anObject = new Object();
objectMap.set(anObject, 1);
var otherObject = {
  "a": 1,
  "b": 2
};
objectMap.set(otherObject, 2);
objectMap.clear();
objectMap.size;
objectMap.values.length;
objectMap.has(anArray);
objectMap.has(anObject);
objectMap.has(otherObject); // Mixed types.

var mixedTypeMap = new Map();
mixedTypeMap.set(0, objectMap);
mixedTypeMap.set('Oliver', stringMap);
mixedTypeMap.set(stringMap, valueMap);
mixedTypeMap.set(valueMap, anObject);
mixedTypeMap.set(objectMap, objectMap);
mixedTypeMap.set(anObject, stringMap);
mixedTypeMap.clear();
mixedTypeMap.size;
mixedTypeMap.values.length;
mixedTypeMap.has(0);
mixedTypeMap.has('Oliver');
mixedTypeMap.has(stringMap);
mixedTypeMap.has(valueMap);
mixedTypeMap.has(objectMap);
mixedTypeMap.has(anObject);
