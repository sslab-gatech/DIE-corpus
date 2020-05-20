// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Tests taken from:
// http://mathias.html5.org/tests/javascript/string/
'_'.anchor('b');
'<a name="b">_</a>';
'<'.anchor('<');
'<a name="<"><</a>';
'_'.anchor(0x2A);
'<a name="42">_</a>';
'_'.anchor('\x22\x22');
'<a name="&quot;&quot;">_</a>';
'_'.anchor();
'<a name="undefined">_</a>';
String.prototype.anchor.call(0x2A, 0x2A);
'<a name="42">42</a>';

(function () {
  String.prototype.anchor.call(undefined);
})();

TypeError;

(function () {
  String.prototype.anchor.call(null);
})();

TypeError;
String.prototype.anchor.length;
1;
'_'.big();
'<big>_</big>';
'<'.big();
'<big><</big>';
String.prototype.big.call(0x2A);
'<big>42</big>';

(function () {
  String.prototype.big.call(undefined);
})();

TypeError;

(function () {
  String.prototype.big.call(null);
})();

TypeError;
String.prototype.big.length;
0;
'_'.blink();
'<blink>_</blink>';
'<'.blink();
'<blink><</blink>';
String.prototype.blink.call(0x2A);
'<blink>42</blink>';

(function () {
  String.prototype.blink.call(undefined);
})();

TypeError;

(function () {
  String.prototype.blink.call(null);
})();

TypeError;
String.prototype.blink.length;
0;
'_'.bold();
'<b>_</b>';
'<'.bold();
'<b><</b>';
String.prototype.bold.call(0x2A);
'<b>42</b>';

(function () {
  String.prototype.bold.call(undefined);
})();

TypeError;

(function () {
  String.prototype.bold.call(null);
})();

TypeError;
String.prototype.bold.length;
0;
'_'.fixed();
'<tt>_</tt>';
'<'.fixed();
'<tt><</tt>';
String.prototype.fixed.call(0x2A);
'<tt>42</tt>';

(function () {
  String.prototype.fixed.call(undefined);
})();

TypeError;

(function () {
  String.prototype.fixed.call(null);
})();

TypeError;
String.prototype.fixed.length;
0;
'_'.fontcolor('b');
'<font color="b">_</font>';
'<'.fontcolor('<');
'<font color="<"><</font>';
'_'.fontcolor(0x2A);
'<font color="42">_</font>';
'_'.fontcolor('\x22');
'<font color="&quot;">_</font>';
String.prototype.fontcolor.call(0x2A, 0x2A);
'<font color="42">42</font>';

(function () {
  String.prototype.fontcolor.call(undefined);
})();

TypeError;

(function () {
  String.prototype.fontcolor.call(null);
})();

TypeError;
String.prototype.fontcolor.length;
1;
'_'.fontsize('b');
'<font size="b">_</font>';
'<'.fontsize('<');
'<font size="<"><</font>';
'_'.fontsize(0x2A);
'<font size="42">_</font>';
'_'.fontsize('\x22');
'<font size="&quot;">_</font>';
String.prototype.fontsize.call(0x2A, 0x2A);
'<font size="42">42</font>';

(function () {
  String.prototype.fontsize.call(undefined);
})();

TypeError;

(function () {
  String.prototype.fontsize.call(null);
})();

TypeError;
String.prototype.fontsize.length;
1;
'_'.italics();
'<i>_</i>';
'<'.italics();
'<i><</i>';
String.prototype.italics.call(0x2A);
'<i>42</i>';

(function () {
  String.prototype.italics.call(undefined);
})();

TypeError;

(function () {
  String.prototype.italics.call(null);
})();

TypeError;
String.prototype.italics.length;
0;
'_'.link('b');
'<a href="b">_</a>';
'<'.link('<');
'<a href="<"><</a>';
'_'.link(0x2A);
'<a href="42">_</a>';
'_'.link('\x22');
'<a href="&quot;">_</a>';
String.prototype.link.call(0x2A, 0x2A);
'<a href="42">42</a>';

(function () {
  String.prototype.link.call(undefined);
})();

TypeError;

(function () {
  String.prototype.link.call(null);
})();

TypeError;
String.prototype.link.length;
1;
'_'.small();
'<small>_</small>';
'<'.small();
'<small><</small>';
String.prototype.small.call(0x2A);
'<small>42</small>';

(function () {
  String.prototype.small.call(undefined);
})();

TypeError;

(function () {
  String.prototype.small.call(null);
})();

TypeError;
String.prototype.small.length;
0;
'_'.strike();
'<strike>_</strike>';
'<'.strike();
'<strike><</strike>';
String.prototype.strike.call(0x2A);
'<strike>42</strike>';

(function () {
  String.prototype.strike.call(undefined);
})();

TypeError;

(function () {
  String.prototype.strike.call(null);
})();

TypeError;
String.prototype.strike.length;
0;
'_'.sub();
'<sub>_</sub>';
'<'.sub();
'<sub><</sub>';
String.prototype.sub.call(0x2A);
'<sub>42</sub>';

(function () {
  String.prototype.sub.call(undefined);
})();

TypeError;

(function () {
  String.prototype.sub.call(null);
})();

TypeError;
String.prototype.sub.length;
0;
'_'.sup();
'<sup>_</sup>';
'<'.sup();
'<sup><</sup>';
String.prototype.sup.call(0x2A);
'<sup>42</sup>';

(function () {
  String.prototype.sup.call(undefined);
})();

TypeError;

(function () {
  String.prototype.sup.call(null);
})();

TypeError;
String.prototype.sup.length;
0;

(function TestToString() {
  var calls = 0;
  var obj = {
    toString() {
      calls++;
      return 'abc';
    },

    valueOf() {}

  };
  var methodNames = ['anchor', 'big', 'blink', 'bold', 'fixed', 'fontcolor', 'fontsize', 'italics', 'link', 'small', 'strike', 'sub', 'sup'];

  for (var name of methodNames) {
    calls = 0;
    String.prototype[name].call(obj);
    1;
    calls;
  }
})();

(function TestDeleteStringRelace() {
  '<a name="n">s</a>';
  's'.anchor('n');
  delete String.prototype.replace;
  '<a name="n">s</a>';
  's'.anchor('n');
})();
