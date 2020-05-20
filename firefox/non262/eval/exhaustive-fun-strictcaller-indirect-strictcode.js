// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 514568;
var summary = "eval in all its myriad flavors";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var x = 17;

function globalX() {
  return x;
}

var y = 42;

function globalY() {
  return y;
}

var ev = eval;

function testX() {
  "use strict";

  var x = 2;
  var xcode = "'use strict';" + "var x = 4;" + "function actX(action)" + "{" + "  switch (action)" + "  {" + "    case 'get':" + "      return x;" + "    case 'set1':" + "      x = 9;" + "      return;" + "    case 'set2':" + "      x = 23;" + "      return;" + "    case 'delete':" + "      try { return eval('delete x'); }" + "      catch (e) { return e.name; }" + "  }" + "}" + "actX;";
  var local0 = x;
  var global0 = globalX();
  var f = ev(xcode);
  var inner1 = f("get");
  var local1 = x;
  var global1 = globalX();
  x = 7;
  var inner2 = f("get");
  var local2 = x;
  var global2 = globalX();
  f("set1");
  var inner3 = f("get");
  var local3 = x;
  var global3 = globalX();
  var del = f("delete");
  var inner4 = f("get");
  var local4 = x;
  var global4 = globalX();
  f("set2");
  var inner5 = f("get");
  var local5 = x;
  var global5 = globalX();
  return {
    local0: local0,
    global0: global0,
    inner1: inner1,
    local1: local1,
    global1: global1,
    inner2: inner2,
    local2: local2,
    global2: global2,
    inner3: inner3,
    local3: local3,
    global3: global3,
    del: del,
    inner4: inner4,
    local4: local4,
    global4: global4,
    inner5: inner5,
    local5: local5,
    global5: global5
  };
}

var resultsX = testX();
resultsX.local0;
2;
resultsX.global0;
17;
resultsX.inner1;
4;
resultsX.local1;
2;
resultsX.global1;
17;
resultsX.inner2;
4;
resultsX.local2;
7;
resultsX.global2;
17;
resultsX.inner3;
9;
resultsX.local3;
7;
resultsX.global3;
17;
resultsX.del;
"SyntaxError";
resultsX.inner4;
9;
resultsX.local4;
7;
resultsX.global4;
17;
resultsX.inner5;
23;
resultsX.local5;
7;
resultsX.global5;
17;

function testY() {
  "use strict";

  var ycode = "'use strict';" + "var y = 5;" + "function actY(action)" + "{" + "  switch (action)" + "  {" + "    case 'get':" + "      return y;" + "    case 'set1':" + "      y = 2;" + "      return;" + "    case 'set2':" + "      y = 71;" + "      return;" + "    case 'delete':" + "      try { return eval('delete y'); }" + "      catch (e) { return e.name; }" + "  }" + "}" + "actY;";
  var local0 = y;
  var global0 = globalY();
  var f = ev(ycode);
  var inner1 = f("get");
  var local1 = y;
  var global1 = globalY();
  y = 8;
  var inner2 = f("get");
  var local2 = y;
  var global2 = globalY();
  f("set1");
  var inner3 = f("get");
  var local3 = y;
  var global3 = globalY();
  var del = f("delete");
  var inner4 = f("get");
  var local4 = y;
  var global4 = globalY();
  f("set2");
  var inner5 = f("get");
  var local5 = y;
  var global5 = globalY();
  return {
    local0: local0,
    global0: global0,
    inner1: inner1,
    local1: local1,
    global1: global1,
    inner2: inner2,
    local2: local2,
    global2: global2,
    inner3: inner3,
    local3: local3,
    global3: global3,
    del: del,
    inner4: inner4,
    local4: local4,
    global4: global4,
    inner5: inner5,
    local5: local5,
    global5: global5
  };
}

var resultsY = testY();
resultsY.local0;
42;
resultsY.global0;
42;
resultsY.inner1;
5;
resultsY.local1;
42;
resultsY.global1;
42;
resultsY.inner2;
5;
resultsY.local2;
8;
resultsY.global2;
8;
resultsY.inner3;
2;
resultsY.local3;
8;
resultsY.global3;
8;
resultsY.del;
"SyntaxError";
resultsY.inner4;
2;
resultsY.local4;
8;
resultsY.global4;
8;
resultsY.inner5;
71;
resultsY.local5;
8;
resultsY.global5;
8;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete!");
