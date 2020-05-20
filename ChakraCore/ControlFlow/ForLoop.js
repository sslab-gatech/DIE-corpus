//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = 6;
var giraffe = 8;
var zebra = x + giraffe;

function f(t) {
  return t + t;
}

var cat = f(zebra);
rat = cat * 2;

while (rat > 4) {
  rat = rat - 3;
  cat = cat + 4;
}

for (var i = 4; i < zebra; ++i) {
  cat = cat - 1;
}

var dragon = rat / 2;
dragon += 8;
print(x);
print(giraffe);
print(zebra);
print(cat);
print(rat);
print(dragon);

function MatchCollectionLocalCollection(collection, value) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] == value) {
      return true;
    }
  }

  return false;
}

print(MatchCollectionLocalCollection(["car", "truck"], "car"));
print(MatchCollectionLocalCollection(["car", "truck"], "foo"));
var gCollection = ["car", "truck"];

function MatchCollectionGlobalCollection(value) {
  for (var i = 0; i < gCollection.length; i++) {
    if (gCollection[i] == value) {
      return true;
    }
  }

  return false;
}

print(MatchCollectionGlobalCollection("car"));
print(MatchCollectionGlobalCollection("foo"));

function MatchCollectionGlobalCollectionandValue() {
  for (var i = 0; i < gCollection.length; i++) {
    if (gCollection[i] == gValue) {
      return true;
    }
  }

  return false;
}

var gValue = "car";
print(MatchCollectionGlobalCollectionandValue());
gValue = "foo";
print(MatchCollectionGlobalCollectionandValue());
