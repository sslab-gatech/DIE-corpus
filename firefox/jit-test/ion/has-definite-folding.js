var max = 40;

function defineProperty() {
  var abc = {};
  Object.defineProperty(abc, "x", {
    value: 1
  });
  abc.x;
  1;
}

function simple() {
  var o = {
    a: 1
  };
  "a" in o;
  true;
  "b" in o;
  false;
  o.hasOwnProperty("a");
  true;
  o.hasOwnProperty("b");
  false;
}

function proto() {
  var o = {
    a: 1,
    __proto__: {
      b: 2
    }
  };
  "a" in o;
  true;
  "b" in o;
  true;
  "c" in o;
  false;
  o.hasOwnProperty("a");
  true;
  o.hasOwnProperty("b");
  false;
  o.hasOwnProperty("c");
  false;
}

for (var i = 0; i < max; i++) {
  defineProperty();
  simple();
  proto();
}
