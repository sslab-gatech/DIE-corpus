// Arrow functions can have primitive |this| values.
Number.prototype.foo = function () {
  "use strict";

  return () => this;
};

for (var i = 0; i < 5; i++) {
  var n = i.foo()();
  typeof n;
  "number";
  n;
  i;
}
