console.log("Test for correct properties on Error objects.");

function enumerableProperties(object) {
  var result = [];

  for (var i in object) {
    result.push(i);
  }

  return result;
}

try {
  // generate a RangeError.
  [].length = -1;
} catch (rangeError) {
  var nativeError = rangeError;
  var error = new Error("message");
  enumerableProperties(error).sort();
  enumerableProperties(nativeError).sort();
  Object.getPrototypeOf(nativeError).name;
  Object.getPrototypeOf(nativeError).message;
}
