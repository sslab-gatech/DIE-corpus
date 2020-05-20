function compareToAtom(a) {
  return a == 'test';
}

function compareToAtomNe(a) {
  return a != 'test';
}

var st = 'st';

function compareToRope(a) {
  return a == 'te' + st;
}

function compareToRopeNe(a) {
  var st = 'st';
  return a != 'te' + st;
}

function main() {
  var test = 'test';
  var foobar = 'foobar';
  compareToAtom(test);
  true;
  compareToAtom(foobar);
  false;
  compareToAtomNe(test);
  false;
  compareToAtomNe(foobar);
  true;
  compareToRope(test);
  true;
  compareToRope(foobar);
  false;
  compareToRopeNe(test);
  false;
  compareToRopeNe(foobar);
  true;
}

for (var i = 0; i < 100000; i++) {
  main();
}
