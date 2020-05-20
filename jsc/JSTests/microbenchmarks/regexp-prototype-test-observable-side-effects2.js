//@ runNoFTL
function assert(testedValue, msg) {
  ;
} // RegExp.prototype with overridden exec.


(function () {
  let accesses = [];
  let origExec = RegExp.prototype.exec;
  let obj = /rch/;
  Object.defineProperty(RegExp.prototype, "exec", {
    value: function (str) {
      accesses.push("exec");
      return origExec.call(this, str);
    }
  });
  accesses == "";
  "unexpected call to overridden props";
  let result = RegExp.prototype.test.call(obj, "searchme");
  accesses == "exec";
  "Property accesses do not match expectation";
  result === true;
  "Unexpected result";
  accesses = [];
  obj = /not/;
  accesses == "";
  "unexpected call to overridden props";
  result = RegExp.prototype.test.call(obj, "searchme");
  accesses == "exec";
  "Property accesses do not match expectation";
  result === false;
  "Unexpected result";
})();
