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

Object.prototype[1] = 2; // try to break `arguments[1]`

String.prototype.startsWith.length;
1;
String.prototype.propertyIsEnumerable('startsWith');
false;
'undefined'.startsWith();
true;
'undefined'.startsWith(undefined);
true;
'undefined'.startsWith(null);
false;
'null'.startsWith();
false;
'null'.startsWith(undefined);
false;
'null'.startsWith(null);
true;
'abc'.startsWith();
false;
'abc'.startsWith('');
true;
'abc'.startsWith('\0');
false;
'abc'.startsWith('a');
true;
'abc'.startsWith('b');
false;
'abc'.startsWith('ab');
true;
'abc'.startsWith('bc');
false;
'abc'.startsWith('abc');
true;
'abc'.startsWith('bcd');
false;
'abc'.startsWith('abcd');
false;
'abc'.startsWith('bcde');
false;
'abc'.startsWith('', NaN);
true;
'abc'.startsWith('\0', NaN);
false;
'abc'.startsWith('a', NaN);
true;
'abc'.startsWith('b', NaN);
false;
'abc'.startsWith('ab', NaN);
true;
'abc'.startsWith('bc', NaN);
false;
'abc'.startsWith('abc', NaN);
true;
'abc'.startsWith('bcd', NaN);
false;
'abc'.startsWith('abcd', NaN);
false;
'abc'.startsWith('bcde', NaN);
false;
'abc'.startsWith('', false);
true;
'abc'.startsWith('\0', false);
false;
'abc'.startsWith('a', false);
true;
'abc'.startsWith('b', false);
false;
'abc'.startsWith('ab', false);
true;
'abc'.startsWith('bc', false);
false;
'abc'.startsWith('abc', false);
true;
'abc'.startsWith('bcd', false);
false;
'abc'.startsWith('abcd', false);
false;
'abc'.startsWith('bcde', false);
false;
'abc'.startsWith('', undefined);
true;
'abc'.startsWith('\0', undefined);
false;
'abc'.startsWith('a', undefined);
true;
'abc'.startsWith('b', undefined);
false;
'abc'.startsWith('ab', undefined);
true;
'abc'.startsWith('bc', undefined);
false;
'abc'.startsWith('abc', undefined);
true;
'abc'.startsWith('bcd', undefined);
false;
'abc'.startsWith('abcd', undefined);
false;
'abc'.startsWith('bcde', undefined);
false;
'abc'.startsWith('', null);
true;
'abc'.startsWith('\0', null);
false;
'abc'.startsWith('a', null);
true;
'abc'.startsWith('b', null);
false;
'abc'.startsWith('ab', null);
true;
'abc'.startsWith('bc', null);
false;
'abc'.startsWith('abc', null);
true;
'abc'.startsWith('bcd', null);
false;
'abc'.startsWith('abcd', null);
false;
'abc'.startsWith('bcde', null);
false;
'abc'.startsWith('', -Infinity);
true;
'abc'.startsWith('\0', -Infinity);
false;
'abc'.startsWith('a', -Infinity);
true;
'abc'.startsWith('b', -Infinity);
false;
'abc'.startsWith('ab', -Infinity);
true;
'abc'.startsWith('bc', -Infinity);
false;
'abc'.startsWith('abc', -Infinity);
true;
'abc'.startsWith('bcd', -Infinity);
false;
'abc'.startsWith('abcd', -Infinity);
false;
'abc'.startsWith('bcde', -Infinity);
false;
'abc'.startsWith('', -1);
true;
'abc'.startsWith('\0', -1);
false;
'abc'.startsWith('a', -1);
true;
'abc'.startsWith('b', -1);
false;
'abc'.startsWith('ab', -1);
true;
'abc'.startsWith('bc', -1);
false;
'abc'.startsWith('abc', -1);
true;
'abc'.startsWith('bcd', -1);
false;
'abc'.startsWith('abcd', -1);
false;
'abc'.startsWith('bcde', -1);
false;
'abc'.startsWith('', -0);
true;
'abc'.startsWith('\0', -0);
false;
'abc'.startsWith('a', -0);
true;
'abc'.startsWith('b', -0);
false;
'abc'.startsWith('ab', -0);
true;
'abc'.startsWith('bc', -0);
false;
'abc'.startsWith('abc', -0);
true;
'abc'.startsWith('bcd', -0);
false;
'abc'.startsWith('abcd', -0);
false;
'abc'.startsWith('bcde', -0);
false;
'abc'.startsWith('', +0);
true;
'abc'.startsWith('\0', +0);
false;
'abc'.startsWith('a', +0);
true;
'abc'.startsWith('b', +0);
false;
'abc'.startsWith('ab', +0);
true;
'abc'.startsWith('bc', +0);
false;
'abc'.startsWith('abc', +0);
true;
'abc'.startsWith('bcd', +0);
false;
'abc'.startsWith('abcd', +0);
false;
'abc'.startsWith('bcde', +0);
false;
'abc'.startsWith('', 1);
true;
'abc'.startsWith('\0', 1);
false;
'abc'.startsWith('a', 1);
false;
'abc'.startsWith('b', 1);
true;
'abc'.startsWith('ab', 1);
false;
'abc'.startsWith('bc', 1);
true;
'abc'.startsWith('abc', 1);
false;
'abc'.startsWith('bcd', 1);
false;
'abc'.startsWith('abcd', 1);
false;
'abc'.startsWith('bcde', 1);
false;
'abc'.startsWith('', +Infinity);
true;
'abc'.startsWith('\0', +Infinity);
false;
'abc'.startsWith('a', +Infinity);
false;
'abc'.startsWith('b', +Infinity);
false;
'abc'.startsWith('ab', +Infinity);
false;
'abc'.startsWith('bc', +Infinity);
false;
'abc'.startsWith('abc', +Infinity);
false;
'abc'.startsWith('bcd', +Infinity);
false;
'abc'.startsWith('abcd', +Infinity);
false;
'abc'.startsWith('bcde', +Infinity);
false;
'abc'.startsWith('', true);
true;
'abc'.startsWith('\0', true);
false;
'abc'.startsWith('a', true);
false;
'abc'.startsWith('b', true);
true;
'abc'.startsWith('ab', true);
false;
'abc'.startsWith('bc', true);
true;
'abc'.startsWith('abc', true);
false;
'abc'.startsWith('bcd', true);
false;
'abc'.startsWith('abcd', true);
false;
'abc'.startsWith('bcde', true);
false;
'abc'.startsWith('', 'x');
true;
'abc'.startsWith('\0', 'x');
false;
'abc'.startsWith('a', 'x');
true;
'abc'.startsWith('b', 'x');
false;
'abc'.startsWith('ab', 'x');
true;
'abc'.startsWith('bc', 'x');
false;
'abc'.startsWith('abc', 'x');
true;
'abc'.startsWith('bcd', 'x');
false;
'abc'.startsWith('abcd', 'x');
false;
'abc'.startsWith('bcde', 'x');
false;
'[a-z]+(bar)?'.startsWith('[a-z]+');
true;

(function () {
  '[a-z]+(bar)?'.startsWith(/[a-z]+/);
})();

TypeError;
'[a-z]+(bar)?'.startsWith('(bar)?', 6);
true;

(function () {
  '[a-z]+(bar)?'.startsWith(/(bar)?/);
})();

TypeError;

(function () {
  '[a-z]+/(bar)?/'.startsWith(/(bar)?/);
})();

TypeError;
var global = newGlobal();
global.eval('this.re = /(bar)?/');

(function () {
  '[a-z]+/(bar)?/'.startsWith(global.re);
})();

TypeError;
// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
string.startsWith('');
true;
string.startsWith('\xF1t\xEBr');
false;
string.startsWith('\xF1t\xEBr', 1);
true;
string.startsWith('\xE0liz\xE6');
false;
string.startsWith('\xE0liz\xE6', 11);
true;
string.startsWith('\xF8n\u2603\uD83D\uDCA9');
false;
string.startsWith('\xF8n\u2603\uD83D\uDCA9', 18);
true;
string.startsWith('\u2603');
false;
string.startsWith('\u2603', 20);
true;
string.startsWith('\uD83D\uDCA9');
false;
string.startsWith('\uD83D\uDCA9', 21);
true;

(function () {
  String.prototype.startsWith.call(undefined);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(undefined, 'b');
})();

TypeError;

(function () {
  String.prototype.startsWith.call(undefined, 'b', 4);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null);
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null, 'b');
})();

TypeError;

(function () {
  String.prototype.startsWith.call(null, 'b', 4);
})();

TypeError;
String.prototype.startsWith.call(42, '2');
false;
String.prototype.startsWith.call(42, '4');
true;
String.prototype.startsWith.call(42, 'b', 4);
false;
String.prototype.startsWith.call(42, '2', 1);
true;
String.prototype.startsWith.call(42, '2', 4);
false;
String.prototype.startsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 0);
false;
String.prototype.startsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 1);
true;
String.prototype.startsWith.call({
  'toString': function () {
    return 'abc';
  }
}, 'b', 2);
false;

(function () {
  String.prototype.startsWith.call({
    'toString': function () {
      throw RangeError();
    }
  }, /./);
})();

RangeError;

(function () {
  String.prototype.startsWith.call({
    'toString': function () {
      return 'abc';
    }
  }, /./);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined, ['b']);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(undefined, ['b', 4]);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null, ['b']);
})();

TypeError;

(function () {
  String.prototype.startsWith.apply(null, ['b', 4]);
})();

TypeError;
String.prototype.startsWith.apply(42, ['2']);
false;
String.prototype.startsWith.apply(42, ['4']);
true;
String.prototype.startsWith.apply(42, ['b', 4]);
false;
String.prototype.startsWith.apply(42, ['2', 1]);
true;
String.prototype.startsWith.apply(42, ['2', 4]);
false;
String.prototype.startsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 0]);
false;
String.prototype.startsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 1]);
true;
String.prototype.startsWith.apply({
  'toString': function () {
    return 'abc';
  }
}, ['b', 2]);
false;

(function () {
  String.prototype.startsWith.apply({
    'toString': function () {
      throw RangeError();
    }
  }, [/./]);
})();

RangeError;

(function () {
  String.prototype.startsWith.apply({
    'toString': function () {
      return 'abc';
    }
  }, [/./]);
})();

TypeError;
