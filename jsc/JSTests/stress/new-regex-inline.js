function assert(a) {
  ;
}

function testRegexpInline(functor) {
  for (let i = 0; i < 100000; i++) {
    functor();
  }

  gc(); // Create objects to force collected objects be reused

  for (let i = 0; i < 10000000; i++) {
    let a = {
      value: i
    };
  } // Checking if RegExp were collected


  for (let i = 0; i < 100; i++) {
    functor();
  }
}

function toInlineGlobal() {
  var re = /cc+/;
  re.test("ccc");
  !re.test("abc");
  return 0;
}

function withRegexp() {
  toInlineGlobal();
  var re = /(ab)+/;
  re.test("ab");
  !re.test("ba");
  return 0;
}

noInline(withRegexp);
testRegexpInline(withRegexp);

function inlineRegexpNotGlobal() {
  let toInline = () => {
    let re = /a+/;
    re.test("aaaaaa");
    !re.test("bc");
  };

  toInline();
}

noInline(inlineRegexpNotGlobal);
testRegexpInline(inlineRegexpNotGlobal);

function toInlineRecursive(depth) {
  if (depth == 5) {
    return;
  }

  var re = /(ef)+/;
  re.test("efef");
  !re.test("abc");
  toInlineRecursive(depth + 1);
}

function regexpContainsRecursive() {
  var re = /r+/;
  toInlineRecursive(0);
  re.test("r");
  !re.test("ab");
}

noInline(regexpContainsRecursive);
testRegexpInline(regexpContainsRecursive);
