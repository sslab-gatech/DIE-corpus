//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  var _this = 'value';
  var property = 'any string with a quote " longer than 32 characters';
  console.log('<a href="any string with a quote &quot; longer than 32 characters">value</a>', _this.link(property));
  _this = '""""""""""""""""';
  property = '""""""""""""""""';
  console.log('<a name="&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;&quot;">""""""""""""""""</a>', _this.anchor(property));
  _this = 'value';
  property = 'long string with " multiple " quote characters " and " the final character is a quote "';
  console.log('<font size="long string with &quot; multiple &quot; quote characters &quot; and &quot; the final character is a quote &quot;">value</font>', _this.fontsize(property));
}

t1();

function t2() {
  var _this = 'value';
  var property = "-\"";
  console.log('<a href="-">value</a>', _this.link(property.substring(1, 0)));
}

t2();

function t3() {
  var _this = 'value';
  var property = " a string with quotes \"\" and an embedded null \0 character";

  var result = _this.fontcolor(property);

  console.log("<font color=\" a string with quotes &quot;&quot; and an embedded null \0 character\">value</font>", result);
  console.log(94, result.length);
  result = "\0".fontsize("\0");
  console.log("<font size=\"\0\">\0</font>", result);
  console.log(23, result.length);
}

t3();

function t4() {
  var _this = 'value';
  var property = '';
  console.log("<font size=\"\">value</font>", _this.fontsize(property));
  _this = '';
  console.log("<a href=\"\"></a>", _this.link(property));
}

t4();

function t5() {
  var _this = 'value';
  console.log("<blink>value</blink>", _this.blink());
}

t5();
