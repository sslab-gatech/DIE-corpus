console.log("Tests that DFG inlining does not brak function.arguments.caller.");
var callCount = 0;
var resultArray = [];

function throwError() {
  throw {};
}

var object = {
  nonInlineable: function nonInlineable() {
    if (0) {
      return [arguments, function () {
        ;
      }];
    }

    if (++callCount == 999999) {
      var f = nonInlineable;

      while (f) {
        resultArray.push(f.name);
        f = f.arguments.callee.caller;
      }
    }
  },
  inlineable: function inlineable() {
    this.nonInlineable();
  }
};

function makeInlinableCall(o) {
  for (var i = 0; i < 1000; i++) {
    o.inlineable();
  }
}

function g() {
  var j = 0;

  for (var i = 0; i < 1000; i++) {
    j++;
    makeInlinableCall(object);
  }
}

g();
resultArray.length;
resultArray[3];
resultArray[2];
resultArray[1];
resultArray[0];
