// [ARM] jsc-layout-tests.yaml/js/script-tests/array-from.js fails on Aarch64
// https://bugs.webkit.org/show_bug.cgi?id=142272
//@ skip if $architecture == "arm64"
console.log("Tests for Array.from");

function section(title) {
  console.log("");
  console.log(title);
  console.log("-------");
}

section("Length of Array.from");
Array.from.length;
section("Simple construction");
Array.from instanceof Function;
Array.from([1]);
Array.from([1, 2, 3]);
Array.from([1, 2, 3]).length;
Array.from('abc');
Array.from('abc').length;
Array.from(Array.from([4, 5, 6]));
Array.from([null, null]);
Array.from([]).length;
Array.from(new Uint8Array([1, 2, 3]));
section("Incorrect construction");

try {
  Array.from();
} catch (e) {
  ;
}

try {
  Array.from(null);
} catch (e) {
  ;
}

try {
  Array.from(undefined);
} catch (e) {
  ;
}

console.log("Declare wayTooSmall = { length: -1 }");
wayTooSmall = {
  length: -1
};
Array.from(wayTooSmall);
console.log("Declare wayTooBig = { length: Infinity }");
wayTooBig = {
  length: Infinity
};

try {
  Array.from(wayTooBig);
} catch (e) {
  ;
}

section("Mapped construction");
Array.from([1, 2, 3], function (x) {
  return x * 10;
});
Array.from([1, 2, 3], function (x) {
  return null;
});
Array.from([1, 2, 3], function (x) {
  ;
}).length;
Array.from({
  length: 5
}, function (v, k) {
  return k;
});
console.log("Declare var bacon = { eggs: 5 }");
var bacon = {
  eggs: 5
};
Array.from([1, 2, 3], function (x) {
  return x * this.eggs;
}, bacon);
section("Incorrect mapped construction");

try {
  Array.from([1, 2, 3], null);
} catch (e) {
  ;
}

try {
  Array.from([1, 2, 3], []);
} catch (e) {
  ;
}

try {
  Array.from([1, 2, 3], [1]);
} catch (e) {
  ;
}

section("Weird construction");
Array.from(Math).length;
console.log("Declare wayTooWrong = { length: NaN }");
wayTooWrong = {
  length: NaN
};
Array.from(wayTooWrong);
section("Array with holes");
arrayWithHoles = [];
arrayWithHoles[3] = true;
arrayWithHoles[9] = "hi";
Array.from(arrayWithHoles);
section("Modify length during construction");
var crazyPants = {
  _length: 3,

  get 0() {
    return "one";
  },

  get 1() {
    return "two";
  },

  get 2() {
    return "three";
  },

  get 3() {
    return "four";
  },

  get 4() {
    return "ERROR: this should never be called";
  },

  get length() {
    return ++crazyPants._length;
  }

};
Array.from(crazyPants);
section("Modify length during mapping");
crazyPants._length = 3; // Reset the length

Array.from(crazyPants, function (x) {
  crazyPants.length = x;
  return x;
});
section("Construction using Set object");
var set = new Set();
set.add("zero");
set.add("one");
set.add("two");
Array.from(set);
section("\"this\" is a constructor");

var CustomConstructor = function (length) {
  this.givenLength = length;
};

Array.from.call(CustomConstructor, ['WebKit']).constructor;
Object.getPrototypeOf(Array.from.call(CustomConstructor, ['WebKit']));
Array.from.call(nonConstructor, ['WebKit']).length;
Array.from.call(nonConstructor, ['WebKit'])[0];
var nonIterable = {
  get 0() {
    return "one";
  },

  get 1() {
    return 2;
  },

  get 2() {
    throw "ERROR: this should never be called";
  },

  get length() {
    return 2;
  }

};
Array.from.call(CustomConstructor, nonIterable).constructor;
Object.getPrototypeOf(Array.from.call(CustomConstructor, nonIterable));
Array.from.call(nonConstructor, nonIterable).length;
Array.from.call(nonConstructor, nonIterable)[0];
Array.from.call(nonConstructor, nonIterable)[1];
section("\"this\" is not a constructor");
var nonConstructorWasCalled = false;

var nonConstructor = () => {
  nonConstructorWasCalled = true;
};

Array.from.call(nonConstructor, ['WebKit']).constructor;
Object.getPrototypeOf(Array.from.call(nonConstructor, ['WebKit']));
Array.from.call(nonConstructor, ['WebKit']).length;
Array.from.call(nonConstructor, ['WebKit'])[0];
nonConstructorWasCalled;
Array.from.call(nonConstructor, nonIterable).constructor;
Object.getPrototypeOf(Array.from.call(nonConstructor, nonIterable));
Array.from.call(nonConstructor, nonIterable).length;
Array.from.call(nonConstructor, nonIterable)[0];
Array.from.call(nonConstructor, nonIterable)[1];
