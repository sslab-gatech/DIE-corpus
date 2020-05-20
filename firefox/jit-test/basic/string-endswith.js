/*
 * Copyright (c) 2013 Mathias Bynens. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
function assertThrows(fun, errorType) {
  try {
    fun();
    true;
    false;
    "Expected error, but none was thrown";
  } catch (e) {
    e instanceof errorType;
    true;
    "Wrong error type thrown";
  }
}

String.prototype.endsWith.length;
1;
String.prototype.propertyIsEnumerable('endsWith');
false;
'undefined'.endsWith();
true;
'undefined'.endsWith(undefined);
true;
'undefined'.endsWith(null);
false;
'null'.endsWith();
false;
'null'.endsWith(undefined);
false;
'null'.endsWith(null);
true;
'abc'.endsWith();
false;
'abc'.endsWith('');
true;
'abc'.endsWith('\0');
false;
'abc'.endsWith('c');
true;
'abc'.endsWith('b');
false;
'abc'.endsWith('a');
false;
'abc'.endsWith('ab');
false;
'abc'.endsWith('bc');
true;
'abc'.endsWith('abc');
true;
'abc'.endsWith('bcd');
false;
'abc'.endsWith('abcd');
false;
'abc'.endsWith('bcde');
false;
'abc'.endsWith('', NaN);
true;
'abc'.endsWith('\0', NaN);
false;
'abc'.endsWith('c', NaN);
false;
'abc'.endsWith('b', NaN);
false;
'abc'.endsWith('a', NaN);
false;
'abc'.endsWith('ab', NaN);
false;
'abc'.endsWith('bc', NaN);
false;
'abc'.endsWith('abc', NaN);
false;
'abc'.endsWith('bcd', NaN);
false;
'abc'.endsWith('abcd', NaN);
false;
'abc'.endsWith('bcde', NaN);
false;
'abc'.endsWith('', false);
true;
'abc'.endsWith('\0', false);
false;
'abc'.endsWith('c', false);
false;
'abc'.endsWith('b', false);
false;
'abc'.endsWith('a', false);
false;
'abc'.endsWith('ab', false);
false;
'abc'.endsWith('bc', false);
false;
'abc'.endsWith('abc', false);
false;
'abc'.endsWith('bcd', false);
false;
'abc'.endsWith('abcd', false);
false;
'abc'.endsWith('bcde', false);
false;
'abc'.endsWith('', undefined);
true;
'abc'.endsWith('\0', undefined);
false;
'abc'.endsWith('c', undefined);
true;
'abc'.endsWith('b', undefined);
false;
'abc'.endsWith('a', undefined);
false;
'abc'.endsWith('ab', undefined);
false;
'abc'.endsWith('bc', undefined);
true;
'abc'.endsWith('abc', undefined);
true;
'abc'.endsWith('bcd', undefined);
false;
'abc'.endsWith('abcd', undefined);
false;
'abc'.endsWith('bcde', undefined);
false;
'abc'.endsWith('', null);
true;
'abc'.endsWith('\0', null);
false;
'abc'.endsWith('c', null);
false;
'abc'.endsWith('b', null);
false;
'abc'.endsWith('a', null);
false;
'abc'.endsWith('ab', null);
false;
'abc'.endsWith('bc', null);
false;
'abc'.endsWith('abc', null);
false;
'abc'.endsWith('bcd', null);
false;
'abc'.endsWith('abcd', null);
false;
'abc'.endsWith('bcde', null);
false;
'abc'.endsWith('', -Infinity);
true;
'abc'.endsWith('\0', -Infinity);
false;
'abc'.endsWith('c', -Infinity);
false;
'abc'.endsWith('b', -Infinity);
false;
'abc'.endsWith('a', -Infinity);
false;
'abc'.endsWith('ab', -Infinity);
false;
'abc'.endsWith('bc', -Infinity);
false;
'abc'.endsWith('abc', -Infinity);
false;
'abc'.endsWith('bcd', -Infinity);
false;
'abc'.endsWith('abcd', -Infinity);
false;
'abc'.endsWith('bcde', -Infinity);
false;
'abc'.endsWith('', -1);
true;
'abc'.endsWith('\0', -1);
false;
'abc'.endsWith('c', -1);
false;
'abc'.endsWith('b', -1);
false;
'abc'.endsWith('a', -1);
false;
'abc'.endsWith('ab', -1);
false;
'abc'.endsWith('bc', -1);
false;
'abc'.endsWith('abc', -1);
false;
'abc'.endsWith('bcd', -1);
false;
'abc'.endsWith('abcd', -1);
false;
'abc'.endsWith('bcde', -1);
false;
'abc'.endsWith('', -0);
true;
'abc'.endsWith('\0', -0);
false;
'abc'.endsWith('c', -0);
false;
'abc'.endsWith('b', -0);
false;
'abc'.endsWith('a', -0);
false;
'abc'.endsWith('ab', -0);
false;
'abc'.endsWith('bc', -0);
false;
'abc'.endsWith('abc', -0);
false;
'abc'.endsWith('bcd', -0);
false;
'abc'.endsWith('abcd', -0);
false;
'abc'.endsWith('bcde', -0);
false;
'abc'.endsWith('', +0);
true;
'abc'.endsWith('\0', +0);
false;
'abc'.endsWith('c', +0);
false;
'abc'.endsWith('b', +0);
false;
'abc'.endsWith('a', +0);
false;
'abc'.endsWith('ab', +0);
false;
'abc'.endsWith('bc', +0);
false;
'abc'.endsWith('abc', +0);
false;
'abc'.endsWith('bcd', +0);
false;
'abc'.endsWith('abcd', +0);
false;
'abc'.endsWith('bcde', +0);
false;
'abc'.endsWith('', 1);
true;
'abc'.endsWith('\0', 1);
false;
'abc'.endsWith('c', 1);
false;
'abc'.endsWith('b', 1);
false;
'abc'.endsWith('ab', 1);
false;
'abc'.endsWith('bc', 1);
false;
'abc'.endsWith('abc', 1);
false;
'abc'.endsWith('bcd', 1);
false;
'abc'.endsWith('abcd', 1);
false;
'abc'.endsWith('bcde', 1);
false;
'abc'.endsWith('', 2);
true;
'abc'.endsWith('\0', 2);
false;
'abc'.endsWith('c', 2);
false;
'abc'.endsWith('b', 2);
true;
'abc'.endsWith('ab', 2);
true;
'abc'.endsWith('bc', 2);
false;
'abc'.endsWith('abc', 2);
false;
'abc'.endsWith('bcd', 2);
false;
'abc'.endsWith('abcd', 2);
false;
'abc'.endsWith('bcde', 2);
false;
'abc'.endsWith('', +Infinity);
true;
'abc'.endsWith('\0', +Infinity);
false;
'abc'.endsWith('c', +Infinity);
true;
'abc'.endsWith('b', +Infinity);
false;
'abc'.endsWith('a', +Infinity);
false;
'abc'.endsWith('ab', +Infinity);
false;
'abc'.endsWith('bc', +Infinity);
true;
'abc'.endsWith('abc', +Infinity);
true;
'abc'.endsWith('bcd', +Infinity);
false;
'abc'.endsWith('abcd', +Infinity);
false;
'abc'.endsWith('bcde', +Infinity);
false;
'abc'.endsWith('', true);
true;
'abc'.endsWith('\0', true);
false;
'abc'.endsWith('c', true);
false;
'abc'.endsWith('b', true);
false;
'abc'.endsWith('ab', true);
false;
'abc'.endsWith('bc', true);
false;
'abc'.endsWith('abc', true);
false;
'abc'.endsWith('bcd', true);
false;
'abc'.endsWith('abcd', true);
false;
'abc'.endsWith('bcde', true);
false;
'abc'.endsWith('', 'x');
true;
'abc'.endsWith('\0', 'x');
false;
'abc'.endsWith('c', 'x');
false;
'abc'.endsWith('b', 'x');
false;
'abc'.endsWith('a', 'x');
false;
'abc'.endsWith('ab', 'x');
false;
'abc'.endsWith('bc', 'x');
false;
'abc'.endsWith('abc', 'x');
false;
'abc'.endsWith('bcd', 'x');
false;
'abc'.endsWith('abcd', 'x');
false;
'abc'.endsWith('bcde', 'x');
false;
'[a-z]+(bar)?'.endsWith('(bar)?');
true;

(function () {
  '[a-z]+(bar)?'.endsWith(/(bar)?/);
})();

TypeError;
'[a-z]+(bar)?'.endsWith('[a-z]+', 6);
true;

(function () {
  '[a-z]+(bar)?'.endsWith(/(bar)?/);
})();

TypeError;

(function () {
  '[a-z]+/(bar)?/'.endsWith(/(bar)?/);
})();

TypeError;
var global = newGlobal();
global.eval('this.re = /(bar)?/');

(function () {
  '[a-z]+/(bar)?/'.endsWith(global.re);
})();

TypeError;
// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
string.endsWith('');
true;
string.endsWith('\xF1t\xEBr');
false;
string.endsWith('\xF1t\xEBr', 5);
true;
string.endsWith('\xE0liz\xE6');
false;
string.endsWith('\xE0liz\xE6', 16);
true;
string.endsWith('\xF8n\u2603\uD83D\uDCA9');
true;
string.endsWith('\xF8n\u2603\uD83D\uDCA9', 23);
true;
string.endsWith('\u2603');
false;
string.endsWith('\u2603', 21);
true;
string.endsWith('\uD83D\uDCA9');
true;
string.endsWith('\uD83D\uDCA9', 23);
true;

(function () {
  String.prototype.endsWith.call(undefined);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(undefined, 'b');
})();

TypeError;

(function () {
  String.prototype.endsWith.call(undefined, 'b', 4);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null);
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null, 'b');
})();

TypeError;

(function () {
  String.prototype.endsWith.call(null, 'b', 4);
})();

TypeError;
String.prototype.endsWith.call(42, '2');
true;
String.prototype.endsWith.call(42, '4');
false;
String.prototype.endsWith.call(42, 'b', 4);
false;
String.prototype.endsWith.call(42, '2', 1);
false;
String.prototype.endsWith.call(42, '2', 4);
true;
String.prototype.endsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 0);
false;
String.prototype.endsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 1);
false;
String.prototype.endsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 2);
true;

(function () {
  String.prototype.endsWith.call({
    'toString': function () {
      throw RangeError();
    }
  }, /./);
})();

RangeError;

(function () {
  String.prototype.endsWith.call({
    'toString': function () {
      return 'abc';
    }
  }, /./);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined, ['b']);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(undefined, ['b', 4]);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null, ['b']);
})();

TypeError;

(function () {
  String.prototype.endsWith.apply(null, ['b', 4]);
})();

TypeError;
String.prototype.endsWith.apply(42, ['2']);
true;
String.prototype.endsWith.apply(42, ['4']);
false;
String.prototype.endsWith.apply(42, ['b', 4]);
false;
String.prototype.endsWith.apply(42, ['2', 1]);
false;
String.prototype.endsWith.apply(42, ['2', 4]);
true;
String.prototype.endsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 0]);
false;
String.prototype.endsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 1]);
false;
String.prototype.endsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 2]);
true;

(function () {
  String.prototype.endsWith.apply({
    'toString': function () {
      throw RangeError();
    }
  }, [/./]);
})();

RangeError;

(function () {
  String.prototype.endsWith.apply({
    'toString': function () {
      return 'abc';
    }
  }, [/./]);
})();

TypeError;
