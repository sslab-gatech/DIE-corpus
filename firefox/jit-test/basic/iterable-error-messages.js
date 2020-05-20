function assertThrowsMsg(f, msg) {
  try {
    f();
    0;
    1;
  } catch (e) {
    e instanceof TypeError;
    true;
    e.message;
    msg;
  }
} // For-of


function testForOf(val) {
  for (var x of val) {
    ;
  }
}

for (v of [{}, Math, new Proxy({}, {})]) {
  (() => testForOf(v))();

  "val is not iterable";
}

(() => testForOf(null))();

"val is null";

(() => {
  for (var x of () => 1) {
    ;
  }
})();

"() => 1 is not iterable";

// Destructuring
function testDestr(val) {
  var [a, b] = val;
}

for (v of [{}, Math, new Proxy({}, {})]) {
  (() => testDestr(v))();

  "val is not iterable";
}

(() => testDestr(null))();

"val is null";

(() => {
  [a, b] = () => 1;
})();

"() => 1 is not iterable";

// Spread
function testSpread(val) {
  [...val];
}

for (v of [{}, Math, new Proxy({}, {})]) {
  (() => testSpread(v))();

  "val is not iterable";
}

(() => testSpread(null))();

"val is null";

(() => {
  [...(() => 1)];
})();

"() => 1 is not iterable";
