console.log("This test checks String.prototype.repeat.");
String.prototype.repeat.length;
String.prototype.repeat.name;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").configurable;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").enumerable;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").writable;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").get;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").set;
Object.getOwnPropertyDescriptor(String.prototype, "repeat").value;
'foo bar'.repeat(+0);
'foo bar'.repeat(-0);
'foo bar'.repeat(1);
'foo bar'.repeat(2);
'フーバー'.repeat(0);
'フーバー'.repeat(1);
'フーバー'.repeat(2);
'foo barfoo bar'.repeat(2);
'foo barfoo bar'.repeat(2.2);
'foo barfoo bar'.repeat(2.8);
'foo'.repeat(3.1);
'foo'.repeat('2');
'foo'.repeat(NaN);
'foo'.repeat(null);
'foo'.repeat(true);
'foo'.repeat(false);
'foo'.repeat(undefined);
'foo'.repeat();
'f'.repeat(0);
'f'.repeat(1);
'f'.repeat(10);
'フ'.repeat(0);
'フ'.repeat(1);
'フ'.repeat(2); // Repeat empty strings.

''.repeat(1000);
''.repeat(0xFFFFFFFF);
''.repeat(0xFFFFFFFF + 1); // Check range errors.

try {
  'x'.repeat(-1);
} catch (e) {
  ;
}

try {
  'x'.repeat(Infinity);
} catch (e) {
  ;
}

try {
  'x'.repeat(-Infinity);
} catch (e) {
  ;
}

try {
  'foo bar'.repeat(-1);
} catch (e) {
  ;
}

try {
  'foo bar'.repeat(Infinity);
} catch (e) {
  ;
}

try {
  'foo bar'.repeat(-Infinity);
} catch (e) {
  ;
} // Check out of memory errors.


try {
  'f'.repeat(0xFFFFFFFF);
} catch (e) {
  ;
}

try {
  'f'.repeat(0xFFFFFFFF + 1);
} catch (e) {
  ;
}

try {
  'foo'.repeat(0xFFFFFFFFF);
} catch (e) {
  ;
}

try {
  'foo'.repeat(0xFFFFFFFFF + 1);
} catch (e) {
  ;
}

try {
  'foo bar'.repeat(0xFFFFFFFF);
} catch (e) {
  ;
}

try {
  'foo bar'.repeat(0xFFFFFFFF + 1);
} catch (e) {
  ;
}

var sideEffect, stringRepeated, count;

function checkSideEffects(str) {
  // Check side effects in repeat.
  sideEffect = "";
  stringRepeated = new String(str);

  stringRepeated.toString = function () {
    sideEffect += "A";
    return this;
  };

  count = new Number(2);

  count.valueOf = function () {
    sideEffect += "B";
    return this;
  }; // Calling stringRepeated.repeat implicitly calls stringRepeated.toString(),
  // and count.valueOf(), in that respective order.


  stringRepeated.repeat(count);
  sideEffect == 'AB'; // If stringRepeated.toString() throws an exception count.valueOf() is not called.

  stringRepeated.toString = function () {
    throw "error";
  };

  sideEffect = "";

  try {
    stringRepeated.repeat(count);
  } catch (e) {
    ;
  }

  sideEffect == ''; // If count throws an exception stringRepeated.toString() was called.

  stringRepeated.toString = function () {
    sideEffect += "A";
    return this;
  };

  count.valueOf = function () {
    throw "error";
  };

  sideEffect = "";

  try {
    stringRepeated.repeat(count);
  } catch (e) {
    ;
  }

  sideEffect == 'A';
} // Fast path for single character string.


checkSideEffects("x"); // Slow path for any other string.

checkSideEffects("foo bar");
