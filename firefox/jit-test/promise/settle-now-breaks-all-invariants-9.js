function newPromiseCapability() {
  var resolve,
      reject,
      promise = new Promise(function (r1, r2) {
    resolve = r1;
    reject = r2;
  });
  return {
    promise,
    resolve,
    reject
  };
}

var {
  promise,
  resolve,
  reject
} = newPromiseCapability();
resolve(0);
undefined;
reject(0);
undefined;
