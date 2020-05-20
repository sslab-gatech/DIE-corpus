//@ runNoFTL
function assert(testedValue, msg) {
  ;
} // RegExp.prototype with overridden exec: Testing ES6 21.2.5.11: 19.b. Let z be ? RegExpExec(splitter, S).


(function () {
  let accesses = [];
  let origDescriptor = Object.getOwnPropertyDescriptor(RegExp.prototype, "exec");
  let origExec = origDescriptor.value;
  let obj = /it/;
  Object.defineProperty(RegExp.prototype, "exec", {
    value: function (str) {
      accesses.push("exec");
      return origExec.call(this, str);
    }
  }); // The @@split slow path should only call the internal version of substr. Make sure
  // that it's not calling the public version which can be overridden.

  String.prototype.substr = function (start, length) {
    ;
  }; // The @@split slow path should only call the internal version of includes. Make sure
  // that it's not calling the public version which can be overridden.


  String.prototype.includes = function (pattern) {
    ;
  };

  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype[Symbol.split].call(obj, "splitme");
  accesses == "exec,exec,exec,exec,exec,exec";
  "Property accesses do not match expectation";
  result == "spl,me";
  "Unexpected result";
})();
