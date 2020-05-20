var assert = function (result, expected, message = "") {
  ;
};

let error = false;

async function* foo(value = obj) {
  yield '1';
  return 'end';
}

try {
  var f = foo();
} catch (e) {
  ;
}
