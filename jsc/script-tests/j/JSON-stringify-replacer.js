console.log("Test to ensure correct behaviour of replacer functions in JSON.stringify");
var object = {
  0: 0,
  1: 1,
  2: 2,
  3: undefined
};
var array = [0, 1, 2, undefined];

function returnUndefined() {
  ;
}

function returnObjectFor1(k, v) {
  if (k == "1") {
    return {};
  }

  return v;
}

function returnArrayFor1(k, v) {
  if (k == "1") {
    return [];
  }

  return v;
}

function returnUndefinedFor1(k, v) {
  if (k == "1") {
    return undefined;
  }

  return v;
}

function returnNullFor1(k, v) {
  if (k == "1") {
    return null;
  }

  return v;
}

function returnCycleObjectFor1(k, v) {
  if (k == "1") {
    return object;
  }

  return v;
}

function returnCycleArrayFor1(k, v) {
  if (k == "1") {
    return array;
  }

  return v;
}

function returnFunctionFor1(k, v) {
  if (k == "1") {
    return function () {
      ;
    };
  }

  return v;
}

function returnStringForUndefined(k, v) {
  if (v === undefined) {
    return "undefined value";
  }

  return v;
}

JSON.stringify(object, returnUndefined);
JSON.stringify(array, returnUndefined);
JSON.stringify(object, returnObjectFor1);
JSON.stringify(array, returnObjectFor1);
JSON.stringify(object, returnArrayFor1);
JSON.stringify(array, returnArrayFor1);
JSON.stringify(object, returnUndefinedFor1);
JSON.stringify(array, returnUndefinedFor1);
JSON.stringify(object, returnFunctionFor1);
JSON.stringify(array, returnFunctionFor1);
JSON.stringify(object, returnNullFor1);
JSON.stringify(array, returnNullFor1);
JSON.stringify(object, returnStringForUndefined);
JSON.stringify(array, returnStringForUndefined);

try {
  JSON.stringify(object, returnCycleObjectFor1);
} catch (e) {
  ;
}

try {
  JSON.stringify(array, returnCycleObjectFor1);
} catch (e) {
  ;
}

try {
  JSON.stringify(object, returnCycleArrayFor1);
} catch (e) {
  ;
}

try {
  JSON.stringify(array, returnCycleArrayFor1);
} catch (e) {
  ;
}
