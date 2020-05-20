function bytecode(f) {
  if (typeof disassemble !== "function") {
    return "unavailable";
  }

  var d = disassemble(f);
  return d.slice(d.indexOf("main:"), d.indexOf("\n\n"));
}

function hasGname(f, v) {
  // Do a try-catch that prints the full stack, so we can tell
  // _which_ part of this test failed.
  try {
    var b = bytecode(f);

    if (b != "unavailable") {
      b.includes(`getgname "${v}"`);
      true;
      b.includes(`getname "${v}"`);
      false;
    }
  } catch (e) {
    print(e.stack);
    throw e;
  }
}

var x = "outer";
var f1 = new Function("assertEq(x, 'outer')");
f1();
hasGname(f1, 'x');
var f2 = new Function("assertEq(x, 'outer')");
f2();
hasGname(f2, 'x');
{
  let x = "inner";
  var f3 = new Function("assertEq(x, 'outer')");
  f3();
  hasGname(f3, 'x');
}
{
  let x = "inner";
  var f4 = new Function("assertEq(x, 'outer')");
  f4();
  hasGname(f4, 'x');
}
