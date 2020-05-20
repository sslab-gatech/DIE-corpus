console.log("Tests to make sure we call forEach callback with right arguments");
var m = new Map();
m.set('key', 'value');
var called = false;
var actual = {};
var receiver = {
  receiver: true
};
m.forEach(function (value, key, map) {
  called = true;
  actual.value = value;
  actual.key = key;
  actual.map = map;
  actual.receiver = this;
}, receiver);
called;
actual.value;
actual.key;
actual.map;
actual.receiver;
