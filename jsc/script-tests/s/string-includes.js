console.log("This test checks the ES6 string functions startsWith(), endsWith(), and includes()."); // Test includes

String.prototype.includes.name;
String.prototype.includes.length;
'foo bar'.includes('bar');
'foo bar'.includes('bar', 4);
'foo bar'.includes('ar', 5);
'foo bar'.includes('qux');
'foo bar'.includes('foo');
'foo bar'.includes('foo', 0);
'foo bar'.includes('foo', -1);
'foo bar'.includes('');
'foo bar'.includes();
'foo bar qux'.includes('qux', 7);
'foo bar qux'.includes('bar', 7);
'foo null bar'.includes();
'foo null bar'.includes(null);
'foo null bar'.includes(null);
'foo undefined bar'.includes();
'foo undefined bar'.includes(undefined);
'foo undefined bar'.includes();
'foo undefined bar'.includes();
'foo true bar'.includes(true);
'foo false bar'.includes(false);
'foo 1 bar'.includes(1);
'foo 1.1 bar'.includes(1.1);
'foo NaN bar'.includes(NaN);
'foo 1.0 bar'.includes(1.0);
'foo 1e+100 bar'.includes(1e+100);
'foo 1e100 bar'.includes(1e100);
'フーバー'.includes('ーバ');
'フーバー'.includes('クー');
'abc'.includes('a', 'abc'.length);
'abc'.includes('a', Math.pow(2, 33));
'abc'.includes('a', Infinity);
'abc'.includes('ab', -Infinity);
'abc'.includes('cd', -Infinity);
'abc'.includes('ab', 0);
'abc'.includes('cd', 0); // Test startsWith

String.prototype.startsWith.name;
String.prototype.startsWith.length;
'foo bar'.startsWith('foo');
'foo bar'.startsWith('foo', 0);
'foo bar'.startsWith('foo', -1);
'foo bar'.startsWith('oo', 1);
'foo bar'.startsWith('qux');
'foo bar'.startsWith('');
'foo bar'.startsWith();
'null'.startsWith();
'null'.startsWith(null);
'null bar'.startsWith(null);
'undefined'.startsWith();
'undefined'.startsWith(undefined);
'undefined bar'.startsWith();
'undefined bar'.startsWith();
'true bar'.startsWith(true);
'false bar'.startsWith(false);
'1 bar'.startsWith(1);
'1.1 bar'.startsWith(1.1);
'NaN bar'.startsWith(NaN);
'1e+100 bar'.startsWith(1e+100);
'1e100 bar'.startsWith(1e100);
'フーバー'.startsWith('フー');
'フーバー'.startsWith('バー');
'フーバー'.startsWith('abc');
'フーバー'.startsWith('abc', 1);
'foo bar'.startsWith('フー');
'foo bar'.startsWith('フー', 1);
'abc'.startsWith('a', Infinity);
'abc'.startsWith('a', 1);
'abc'.startsWith('b', 1);
'abc'.startsWith('b', 2);
'abc'.startsWith('c', 2);
'abc'.startsWith('a', Math.pow(2, 33)); // Test endsWith

String.prototype.endsWith.name;
String.prototype.endsWith.length;
'foo bar'.endsWith('bar');
'foo bar'.endsWith('ba', 6);
'foo bar'.endsWith(' ba', 6);
'foo bar'.endsWith('foo bar');
'foo bar'.endsWith('foo bar', 7);
'foo bar'.endsWith('foo bar', 8);
'foo bar'.endsWith('foo bar', -1);
'foo bar'.endsWith('qux');
'foo bar'.endsWith('');
'foo bar'.endsWith();
'foo null'.endsWith();
'foo null'.endsWith(null);
'foo null'.endsWith(null);
'foo undefined'.endsWith();
'foo undefined'.endsWith(undefined);
'foo undefined'.endsWith();
'foo undefined'.endsWith();
'foo true'.endsWith(true);
'foo false'.endsWith(false);
'foo 1'.endsWith(1);
'foo 1.1'.endsWith(1.1);
'foo NaN'.endsWith(NaN);
'foo 1e+100'.endsWith(1e+100);
'foo 1e100'.endsWith(1e100);
'フーバー'.endsWith('バー');
'フーバー'.endsWith('フー');
'フーバー'.endsWith('abc');
'フーバー'.endsWith('abc');
'foo bar'.endsWith('フー');
'foo bar'.endsWith('フー', 3);
'abc'.endsWith('bc', Infinity);
'abc'.endsWith('bc', Math.pow(2, 33));
'abc'.endsWith('a', 0);
'abc'.endsWith('a', 1);
'abc'.endsWith('b', 1);
'abc'.endsWith('b', 2);
'abc'.endsWith('bc', 2);
'abc'.endsWith('bc', 3); // Call functions with an environment record as 'this'.

try {
  (function () {
    var f = String.prototype.startsWith;

    (function () {
      f('a');
    })();
  })();
} catch (e) {
  ;
}

try {
  (function () {
    var f = String.prototype.endsWith;

    (function () {
      f('a');
    })();
  })();
} catch (e) {
  ;
}

try {
  (function () {
    var f = String.prototype.includes;

    (function () {
      f('a');
    })();
  })();
} catch (e) {
  ;
} // ES6 spec says a regex as argument should throw an Exception.


try {
  'foo bar'.startsWith(/w+/);
} catch (e) {
  ;
}

try {
  'foo bar'.endsWith(/w+/);
} catch (e) {
  ;
}

try {
  'foo bar'.includes(/w+/);
} catch (e) {
  ;
} // Check side effects in startsWith.


var sideEffect = "";
var stringToSearchIn = new String("foo bar");

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

var searchString = new String("foo");

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

var startOffset = new Number(0);

startOffset.valueOf = function () {
  sideEffect += "C";
  return this;
}; // Calling stringToSearchIn.startsWith implicitly calls stringToSearchIn.toString(),
// searchString.toString() and startOffset.valueOf(), in that respective order.


stringToSearchIn.startsWith(searchString, startOffset);
sideEffect == 'ABC'; // If stringToSearchIn throws an exception searchString.toString() and
// startOffset.valueOf() are not called.

stringToSearchIn.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.startsWith(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == ''; // If searchString throws an exception stringToSearchIn.toString() is called but
// startOffset.valueOf() is not.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.startsWith(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == 'A'; // If startOffset.valueOf() throws an exception stringToSearchIn.toString() and
// searchString.toString() were called.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

startOffset.valueOf = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.startsWith(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == 'AB'; // Check side effects in endsWith.

sideEffect = "";
stringToSearchIn = new String('foo bar');

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString = new String('bar');

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

var endOffset = new Number(stringToSearchIn.length);

endOffset.valueOf = function () {
  sideEffect += "C";
  return this;
}; // Calling stringToSearchIn.endsWith implicitly calls stringToSearchIn.toString(),
// searchString.toString() and endOffset.valueOf(), in that respective order.


stringToSearchIn.endsWith(searchString, endOffset);
sideEffect == 'ABC'; // If stringToSearchIn throws an exception searchString.toString() and
// endOffset.valueOf() are not called.

stringToSearchIn.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.endsWith(searchString, endOffset);
} catch (e) {
  ;
}

sideEffect == ''; // If searchString throws an exception stringToSearchIn.toString() is called but
// endOffset.valueOf() is not.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.endsWith(searchString, endOffset);
} catch (e) {
  ;
}

sideEffect == 'A'; // If endOffset.valueOf() throws an exception stringToSearchIn.toString() and
// searchString.toString() were called.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

endOffset.valueOf = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.endsWith(searchString, endOffset);
} catch (e) {
  ;
}

sideEffect == 'AB'; // Check side effects in includes.

var sideEffect = "";
stringToSearchIn = new String("foo bar");

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString = new String("foo");

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

var startOffset = new Number(0);

startOffset.valueOf = function () {
  sideEffect += "C";
  return this;
}; // Calling stringToSearchIn.includes implicitly calls stringToSearchIn.toString(),
// searchString.toString() and startOffset.valueOf(), in that respective order.


stringToSearchIn.includes(searchString, startOffset);
sideEffect == 'ABC'; // If stringToSearchIn throws an exception searchString.toString() and
// startOffset.valueOf() are not called.

stringToSearchIn.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.includes(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == ''; // If searchString throws an exception stringToSearchIn.toString() is called but
// startOffset.valueOf() is not.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.includes(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == 'A'; // If startOffset.valueOf() throws an exception stringToSearchIn.toString() and
// searchString.toString() were called.

stringToSearchIn.toString = function () {
  sideEffect += "A";
  return this;
};

searchString.toString = function () {
  sideEffect += "B";
  return this;
};

startOffset.valueOf = function () {
  throw "error";
};

sideEffect = "";

try {
  stringToSearchIn.includes(searchString, startOffset);
} catch (e) {
  ;
}

sideEffect == 'AB';
