console.log("This test ensures that regeular expression literals are constants, and so persist over multiple executions");

for (var i = 0; i < 2; i++) {
  currentRegExp = /a/;

  if (i) {
    currentRegExp === lastRegExp;
  }

  lastRegExp = currentRegExp;
}

function test1() {
  for (var i = 0; i < 2; i++) {
    currentRegExp = /a/;

    if (i) {
      currentRegExp === lastRegExp;
    }

    lastRegExp = currentRegExp;
  }
}

test1();

function returnRegExpLiteral() {
  return /a/;
}

returnRegExpLiteral() === returnRegExpLiteral();

function returnConditionalRegExpLiteral(first) {
  if (first) {
    return /a/;
  }

  return /a/;
}

returnConditionalRegExpLiteral(true) === returnConditionalRegExpLiteral(true);
returnConditionalRegExpLiteral(false) === returnConditionalRegExpLiteral(false);
returnConditionalRegExpLiteral(true) === returnConditionalRegExpLiteral(false);
returnRegExpLiteral().someAddedProperty = true;

try {
  returnRegExpLiteral().someAddedProperty;
} catch (e) {
  ;
}
