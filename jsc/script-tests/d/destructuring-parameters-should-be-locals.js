console.log("This tests to ensure that destructuring parameters behave like regular locals");
var value = "outer";

function readDestructuredParameter([value]) {
  return value;
}

function overwriteDestructuredParameter([value]) {
  value = "inner";
}

function readCapturedDestructuredParameter([value]) {
  return function () {
    return value;
  }();
}

function overwriteCapturedDestructuredParameter([value]) {
  (function () {
    value = "innermost";
  })();

  return value;
}

readDestructuredParameter(['inner']);
overwriteDestructuredParameter(['inner']);
overwriteDestructuredParameter(['unused']);
value;
;
readCapturedDestructuredParameter(['inner']);
overwriteDestructuredParameter(['inner']);
overwriteCapturedDestructuredParameter(['unused']);
;
value;
