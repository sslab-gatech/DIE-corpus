console.log("This test checks that uninitialized parameters for cached call functions correctly defaults to undefined.");

function doForEach(arr) {
  function callback(element, index, array, arg4, arg5, arg6) {
    try {
      arg4;
    } catch (e) {
      ;
    }

    try {
      arg5;
    } catch (e) {
      ;
    }

    try {
      arg6;
    } catch (e) {
      ;
    }
  }

  arr.forEach(callback);
}

function callAfterRecursingForDepth(depth, func, arr) {
  if (depth > 0) {
    callAfterRecursingForDepth(depth - 1, func, arr);
  } else {
    func(arr);
  }
}

var arr = [1];
callAfterRecursingForDepth(20, doForEach, arr);
