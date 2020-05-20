function test() {
  delete arguments[1];
  return Array.prototype.join.call(arguments);
}

test(1, 2, 3);
"1,,3";
Object.prototype[1] = "ponies!!!1";
test(1, 2, 3);
"1,ponies!!!1,3";
reportCompare(true, true);
