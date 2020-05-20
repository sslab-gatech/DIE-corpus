compare = function () {
  function inner() {
    return inner.caller;
  }

  ;
  globalInner = inner;
  globalClosure = inner();
  return function (f) {
    return f === inner;
  };
}();

compare(globalInner);
true;
globalClosure();
compare(globalInner);
false;
