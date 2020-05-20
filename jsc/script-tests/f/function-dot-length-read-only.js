console.log("Tests that function.length correctly intercepts stores when a function is used as a prototype.");

function foo() {
  ;
}

function Bar() {
  ;
}

Bar.prototype = foo;
var o = new Bar();
o.length;
o.length = 42;
o.length;
