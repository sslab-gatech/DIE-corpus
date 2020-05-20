/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
// Ensure the |arguments| object works as expected when a destructuring rest
// parameter is present.
// |arguments.length| with destructuring rest array.
function argsLengthEmptyRestArray(...[]) {
  return arguments.length;
}

argsLengthEmptyRestArray();
0;
argsLengthEmptyRestArray(10);
1;
argsLengthEmptyRestArray(10, 20);
2;

function argsLengthRestArray(...[a]) {
  return arguments.length;
}

argsLengthRestArray();
0;
argsLengthRestArray(10);
1;
argsLengthRestArray(10, 20);
2;

function argsLengthRestArrayWithDefault(...[a = 0]) {
  return arguments.length;
}

argsLengthRestArrayWithDefault();
0;
argsLengthRestArrayWithDefault(10);
1;
argsLengthRestArrayWithDefault(10, 20);
2;

// |arguments.length| with destructuring rest object.
function argsLengthEmptyRestObject(...{}) {
  return arguments.length;
}

argsLengthEmptyRestObject();
0;
argsLengthEmptyRestObject(10);
1;
argsLengthEmptyRestObject(10, 20);
2;

function argsLengthRestObject(...{
  a
}) {
  return arguments.length;
}

argsLengthRestObject();
0;
argsLengthRestObject(10);
1;
argsLengthRestObject(10, 20);
2;

function argsLengthRestObjectWithDefault(...{
  a = 0
}) {
  return arguments.length;
}

argsLengthRestObjectWithDefault();
0;
argsLengthRestObjectWithDefault(10);
1;
argsLengthRestObjectWithDefault(10, 20);
2;

// |arguments| access with destructuring rest array.
function argsAccessEmptyRestArray(...[]) {
  return arguments[0];
}

argsAccessEmptyRestArray();
undefined;
argsAccessEmptyRestArray(10);
10;
argsAccessEmptyRestArray(10, 20);
10;

function argsAccessRestArray(...[a]) {
  return arguments[0];
}

argsAccessRestArray();
undefined;
argsAccessRestArray(10);
10;
argsAccessRestArray(10, 20);
10;

function argsAccessRestArrayWithDefault(...[a = 0]) {
  return arguments[0];
}

argsAccessRestArrayWithDefault();
undefined;
argsAccessRestArrayWithDefault(10);
10;
argsAccessRestArrayWithDefault(10, 20);
10;

// |arguments| access with destructuring rest object.
function argsAccessEmptyRestObject(...{}) {
  return arguments[0];
}

argsAccessEmptyRestObject();
undefined;
argsAccessEmptyRestObject(10);
10;
argsAccessEmptyRestObject(10, 20);
10;

function argsAccessRestObject(...{
  a
}) {
  return arguments[0];
}

argsAccessRestObject();
undefined;
argsAccessRestObject(10);
10;
argsAccessRestObject(10, 20);
10;

function argsAccessRestObjectWithDefault(...{
  a = 0
}) {
  return arguments[0];
}

argsAccessRestObjectWithDefault();
undefined;
argsAccessRestObjectWithDefault(10);
10;
argsAccessRestObjectWithDefault(10, 20);
10;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
