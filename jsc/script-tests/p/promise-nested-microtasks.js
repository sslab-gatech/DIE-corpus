console.log('Test Promise nested microtasks.');
var globalObject = this;
globalObject.jsTestIsAsync = true;
var value1;
var value2;
var result;
Promise.resolve(42).then(function (v1) {
  value1 = v1;
  value1;

  try {
    value2;
  } catch (e) {
    ;
  }

  try {
    result;
  } catch (e) {
    ;
  }

  return Promise.resolve(84).then(function (v2) {
    value2 = v2;
    value2;

    try {
      result;
    } catch (e) {
      ;
    }

    return v2 * v1;
  });
}).then(function (r) {
  result = r;
  result;
  finishJSTest();
});
console.log('The promise is not fulfilled until after this function call executes.');
