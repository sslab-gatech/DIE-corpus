console.log('Tests for scoping of variables in ES6 class syntax');
var local = "FAIL";

function test() {
  var local = "PASS";

  class A {
    getLocal(x) {
      return local;
    }

  }

  ;
  return new A().getLocal();
}

test();
var successfullyParsed = true;
