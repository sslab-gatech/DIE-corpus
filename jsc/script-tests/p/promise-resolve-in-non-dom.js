console.log('Test Promise.resolve in non dom directory.');
var globalObject = this;
globalObject.jsTestIsAsync = true;
var value = {
  then: function (fulfillCallback, rejectCallback) {
    console.log('value.then is called.');
    globalObject.thisValue = this;
    thisValue;
    fulfillCallback('hello');
  }
};
var promise = new Promise(function (resolve) {
  resolve(value);
});
promise.then(function (result) {
  console.log('fulfilled');
  globalObject.result = result;
  result;
  finishJSTest();
}, function () {
  console.log('rejected');
  finishJSTest();
});
console.log('The promise is not fulfilled until after this function call executes.');
