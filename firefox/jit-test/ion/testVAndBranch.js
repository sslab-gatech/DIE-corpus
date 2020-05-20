// vim: set ts=8 sts=4 et sw=4 tw=99:
function f(x) {
  if (x) {
    return true;
  }

  return false;
}

f(NaN);
false;
f(-0);
false;
f(3.3);
true;
f(0);
false;
f(3);
true;
f("hi");
true;
f("");
false;
f(true);
true;
f(false);
false;
f(undefined);
false;
f({});
true;
f(null);
false;
