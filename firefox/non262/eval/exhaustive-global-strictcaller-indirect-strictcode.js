// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
"use strict"; //-----------------------------------------------------------------------------

var BUGNUMBER = 514568;
var summary = "eval in all its myriad flavors";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var x = 17;
var ev = eval;
var xcode = "'use strict';" + "var x = 4;" + "function actX(action)" + "{" + "  switch (action)" + "  {" + "    case 'get':" + "      return x;" + "    case 'set1':" + "      x = 9;" + "      return;" + "    case 'set2':" + "      x = 23;" + "      return;" + "    case 'delete':" + "      try { return eval('delete x'); }" + "      catch (e) { return e.name; }" + "  }" + "}" + "actX;";
var local0 = x;
var f = ev(xcode);
var inner1 = f("get");
var local1 = x;
x = 7;
var inner2 = f("get");
var local2 = x;
f("set1");
var inner3 = f("get");
var local3 = x;
var del = f("delete");
var inner4 = f("get");
var local4 = x;
f("set2");
var inner5 = f("get");
var local5 = x;
var resultsX = {
  local0: local0,
  inner1: inner1,
  local1: local1,
  inner2: inner2,
  local2: local2,
  inner3: inner3,
  local3: local3,
  del: del,
  inner4: inner4,
  local4: local4,
  inner5: inner5,
  local5: local5
};
resultsX.local0;
17;
resultsX.inner1;
4;
resultsX.local1;
17;
resultsX.inner2;
4;
resultsX.local2;
7;
resultsX.inner3;
9;
resultsX.local3;
7;
resultsX.del;
"SyntaxError";
resultsX.inner4;
9;
resultsX.local4;
7;
resultsX.inner5;
23;
resultsX.local5;
7;
var ycode = "'use strict';" + "var y = 5;" + "function actY(action)" + "{" + "  switch (action)" + "  {" + "    case 'get':" + "      return y;" + "    case 'set1':" + "      y = 2;" + "      return;" + "    case 'set2':" + "      y = 71;" + "      return;" + "    case 'delete':" + "      try { return eval('delete y'); }" + "      catch (e) { return e.name; }" + "  }" + "}" + "actY;";

try {
  var local0 = y;
} catch (e) {
  local0 = e.name;
}

var f = ev(ycode);
var inner1 = f("get");

try {
  var local1 = y;
} catch (e) {
  local1 = e.name;
}

try {
  y = 8;
} catch (e) {
  e.name;
  "ReferenceError";
}

var inner2 = f("get");

try {
  var local2 = y;
} catch (e) {
  local2 = e.name;
}

f("set1");
var inner3 = f("get");

try {
  var local3 = y;
} catch (e) {
  local3 = e.name;
}

var del = f("delete");

try {
  var inner4 = f("get");
} catch (e) {
  inner4 = e.name;
}

try {
  var local4 = y;
} catch (e) {
  local4 = e.name;
}

f("set2");

try {
  var inner5 = f("get");
} catch (e) {
  inner5 = e.name;
}

try {
  var local5 = y;
} catch (e) {
  local5 = e.name;
}

var resultsY = {
  local0: local0,
  inner1: inner1,
  local1: local1,
  inner2: inner2,
  local2: local2,
  inner3: inner3,
  local3: local3,
  del: del,
  inner4: inner4,
  local4: local4,
  inner5: inner5,
  local5: local5
};
resultsY.local0;
"ReferenceError";
resultsY.inner1;
5;
resultsY.local1;
"ReferenceError";
resultsY.inner2;
5;
resultsY.local2;
"ReferenceError";
resultsY.inner3;
2;
resultsY.local3;
"ReferenceError";
resultsY.del;
"SyntaxError";
resultsY.inner4;
2;
resultsY.local4;
"ReferenceError";
resultsY.inner5;
71;
resultsY.local5;
"ReferenceError";

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete!");
