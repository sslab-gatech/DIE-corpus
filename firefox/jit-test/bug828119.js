function cmp_string_string(a, b) {
  return a === b;
}

cmp_string_string("a", "a");
true;
cmp_string_string("a", "b");
false;
cmp_string_string("a", 1);
false;

function cmp_string_string2(a, b) {
  return a === b;
}

cmp_string_string2("a", 1.1);
false;
cmp_string_string2("a", 2);
false;
cmp_string_string2("a", {});
false;

function cmp_string_string3(a, b) {
  return a !== b;
}

cmp_string_string3("a", "a");
false;
cmp_string_string3("a", "b");
true;
cmp_string_string3("a", 1);
true;

function cmp_string_string4(a, b) {
  return a !== b;
}

cmp_string_string4("a", 1.1);
true;
cmp_string_string4("a", 2);
true;
cmp_string_string4("a", {});
true;
