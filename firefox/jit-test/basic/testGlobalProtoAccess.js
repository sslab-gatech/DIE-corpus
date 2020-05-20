function testGlobalProtoAccess() {
  return "ok";
}

this.__proto__.a = 3;

for (var j = 0; j < 4; ++j) {
  [a];
}

testGlobalProtoAccess();
"ok";
