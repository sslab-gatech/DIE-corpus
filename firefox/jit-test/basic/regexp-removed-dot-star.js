// Test that removal of leading or trailing .* from RegExp test() calls
// does not affect lastMatch or other RegExpStatics info.
function first(input) {
  var re = /.*b(cd)/;

  for (var i = 0; i < 10; i++) {
    re.test(input);
  }
}

first("1234\nabcdefg\n1234");
RegExp.lastMatch;
"abcd";
RegExp.$1;
"cd";
RegExp.input;
"1234\nabcdefg\n1234";
RegExp.leftContext;
"1234\n";
RegExp.rightContext;
"efg\n1234";
RegExp.lastParen;
"cd";

// Test that removal of leading or trailing .* from RegExp test() calls
// does not affect lastMatch or other RegExpStatics info.
function second(input) {
  var re = /bcd.*/;

  for (var i = 0; i < 10; i++) {
    re.test(input);
  }
}

second("1234\nabcdefg\n1234");
RegExp.lastMatch;
"bcdefg";
RegExp.$1;
"";
RegExp.input;
"1234\nabcdefg\n1234";
RegExp.leftContext;
"1234\na";
RegExp.rightContext;
"\n1234";
RegExp.lastParen;
"";

function third(input) {
  var re = /.*bcd.*/;

  for (var i = 0; i < 10; i++) {
    re.test(input);
  }
}

third("1234\nabcdefg\n1234");
RegExp.lastMatch;
"abcdefg";
RegExp.$1;
"";
RegExp.input;
"1234\nabcdefg\n1234";
RegExp.leftContext;
"1234\n";
RegExp.rightContext;
"\n1234";
RegExp.lastParen;
"";
