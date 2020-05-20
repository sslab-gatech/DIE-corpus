console.log("This tests an early experimental implementation of ES6-esque Symbols.");

function forIn(o) {
  var a = [];

  for (x in o) {
    a.push(x);
  }

  return a;
}

var prop = Symbol("prop");
var o = {};
prop in o;
'prop' in o;
Object.getOwnPropertyNames(o).length;
forIn(o);
o[prop] = 42;
prop in o;
'prop' in o;
Object.getOwnPropertyNames(o).length;
forIn(o);
o['prop'] = 101;
o[prop];
o['prop'];
Object.getOwnPropertyNames(o).length;
forIn(o);
delete o[prop];
prop in o;
'prop' in o;
Object.getOwnPropertyNames(o).length;
forIn(o);
successfullyParsed = true;
