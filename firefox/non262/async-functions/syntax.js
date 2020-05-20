var BUGNUMBER = 1185106;
var summary = "async/await syntax";
print(BUGNUMBER + ": " + summary);

if (typeof Reflect !== "undefined" && Reflect.parse) {
  Reflect.parse("function a() {}").body[0].async;
  false;
  Reflect.parse("function* a() {}").body[0].async;
  false;
  Reflect.parse("async function a() {}").body[0].async;
  true;
  Reflect.parse("() => {}").body[0].async;
  undefined;
  Reflect.parse("async\nfunction a(){}").body[0].expression.name;
  "async";
  Reflect.parse("(async function() {})()").body[0].expression.callee.async;
  true;
  Reflect.parse("var k = async function() {}").body[0].declarations[0].init.async;
  true;
  Reflect.parse("var nmd = async function named() {}").body[0].declarations[0].init.id.name;
  "named";
  Reflect.parse("async function await() {}").body[0].id.name;
  "await";

  (() => Reflect.parse("async function f() { async function await() {} }"))();

  SyntaxError;

  (() => Reflect.parse("(async function await() {})"))();

  SyntaxError;

  (() => Reflect.parse("await 4;"))();

  SyntaxError;

  (() => Reflect.parse("function a() { await 4; }"))();

  SyntaxError;

  (() => Reflect.parse("function* a() { await 4; }"))();

  SyntaxError;

  (() => Reflect.parse("async function k() { function a() { await 4; } }"))();

  SyntaxError;

  (() => Reflect.parse("async function a(k = await 3) {}"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b(k = await 3) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b(k = [await 3]) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b([k = await 3]) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b([k = [await 3]]) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b({k = await 3}) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { async function b({k = [await 3]}) {} }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { var await = 4; }"))();

  SyntaxError;

  (() => Reflect.parse("async function a() { return await; }"))();

  SyntaxError;
  // Await is still available as an identifier name in strict mode code.
  Reflect.parse("function a() { 'use strict'; var await = 3; }");
  Reflect.parse("'use strict'; var await = 3;"); // Await is treated differently depending on context. Various cases.

  Reflect.parse("var await = 3; async function a() { await 4; }");
  Reflect.parse("async function a() { await 4; } var await = 5");
  Reflect.parse("async function a() { function b() { return await; } }");
  Reflect.parse("async function a() { var k = { async: 4 } }");
  Reflect.parse("function a() { await: 4 }");
  Reflect.parse("async function a() { await 4; }").body[0].body.body[0].expression.operator;
  "await";
  Reflect.parse("async function a() { async function b() { await 4; } }").body[0].body.body[0].body.body[0].expression.operator;
  "await";
  Reflect.parse("async function a() { await 2 + 3; }").body[0].body.body[0].expression.left.argument.value;
  2;
  Reflect.parse("async function a() { await 2 + 3; }").body[0].body.body[0].expression.left.operator;
  "await";
  Reflect.parse("async function a() { await 2 + 3; }").body[0].body.body[0].expression.right.value;
  3;
  Reflect.parse("{ async function a() { return 2; } }").body[0].body[0].async;
  true;
  // Async function expression is primary expression.
  Reflect.parse("(async function a() {}.constructor)");
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
