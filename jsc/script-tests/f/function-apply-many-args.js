//@ skip if $architecture !~ /x86/i and $hostOS == "darwin"
console.log("Tests that we throw an error when passing a number of arguments beyond a certain threshold.");

function f() {
  return arguments.length;
}

function fPrint() {
  debug(arguments.length);
}

function g() {
  return f.apply(null, arguments);
}

function h() {
  arguments;
  return f.apply(null, arguments);
}

function i() {
  arguments[arguments.length] = 0;
  return f.apply(null, arguments);
}

var bigArray = [];

for (var j = 0; j < 100000; j++) {
  bigArray.push(null);
}

f.apply(null);
f.apply(null, []);
f.apply(null, [1]);
f.apply(null, new Array(10));
f.apply(null, new Array(1000));
f.apply(null, new Array(65536));

try {
  f.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  f.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  f.apply(null, bigArray);
} catch (e) {
  ;
}

g.apply(null);
g.apply(null, []);
g.apply(null, [1]);
g.apply(null, new Array(10));
g.apply(null, new Array(1000));

try {
  g.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  g.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  g.apply(null, bigArray);
} catch (e) {
  ;
}

h.apply(null);
h.apply(null, []);
h.apply(null, [1]);
h.apply(null, new Array(10));
h.apply(null, new Array(1000));

try {
  h.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  h.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  h.apply(null, bigArray);
} catch (e) {
  ;
}

i.apply(null);
i.apply(null, []);
i.apply(null, [1]);
i.apply(null, new Array(10));
i.apply(null, new Array(1000));

try {
  i.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  i.apply(null, new Array(65537));
} catch (e) {
  ;
}

try {
  i.apply(null, bigArray);
} catch (e) {
  ;
}
