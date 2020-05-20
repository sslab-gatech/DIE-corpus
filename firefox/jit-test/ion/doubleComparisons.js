function gen_f(x) {
  var f = "{\n" + "    var x = " + x + ";\n" + "    if (x)\n" + "        return true;\n" + "    return false;\n" + "}";
  return new Function(f);
}

function run_f(x) {
  return gen_f(x)();
}

function gen_k(x, op, y) {
  var f = "{\n" + "    var x = " + x + ";\n" + "    var y = " + y + ";\n" + "    if (x " + op + " y)\n" + "        return true;\n" + "    return false;\n" + "}";
  return new Function(f);
}

function run_k(x, op, y) {
  return gen_k(x, op, y)();
}

function gen_r(x, op, y) {
  var f = "{\n" + "    var x = " + x + ";\n" + "    var y = " + y + ";\n" + "    return x " + op + " y;\n" + "}";
  return new Function(f);
}

function run_r(x, op, y) {
  return gen_r(x, op, y)();
}

run_f("1 / 0");
true;
run_f("0 / 0");
false;
run_f("-0");
false;
run_f(1.3);
true;
run_k(1.3, ">", 2.3);
false;
run_k(2.3, ">", 2.3);
false;
run_k(2.4, ">", 2.3);
true;
run_k(1.3, ">=", 2.3);
false;
run_k(2.3, ">=", 2.3);
true;
run_k(2.4, ">=", 2.3);
true;
run_k(1.3, "<", 2.3);
true;
run_k(2.3, "<", 2.3);
false;
run_k(2.4, "<", 2.3);
false;
run_k(1.3, "<", 2.3);
true;
run_k(2.3, "<=", 2.3);
true;
run_k(2.4, "<", 2.3);
false;
run_k("NaN", "<", 2.5);
false;
run_k("NaN", "<=", 2.5);
false;
run_k("NaN", ">", 2.5);
false;
run_k("NaN", ">=", 2.5);
false;
run_r(1.3, ">", 2.3);
false;
run_r(2.3, ">", 2.3);
false;
run_r(2.4, ">", 2.3);
true;
run_r(1.3, ">=", 2.3);
false;
run_r(2.3, ">=", 2.3);
true;
run_r(2.4, ">=", 2.3);
true;
run_r(1.3, "<", 2.3);
true;
run_r(2.3, "<", 2.3);
false;
run_r(2.4, "<", 2.3);
false;
run_r(1.3, "<", 2.3);
true;
run_r(2.3, "<=", 2.3);
true;
run_r(2.4, "<", 2.3);
false;
run_r("NaN", "<", 2.5);
false;
run_r("NaN", "<=", 2.5);
false;
run_r("NaN", ">", 2.5);
false;
run_r("NaN", ">=", 2.5);
false;
