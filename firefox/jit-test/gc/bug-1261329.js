// |jit-test| skip-if: !('oomTest' in this)
print = function () {
  ;
};

function k() {
  return print();
}

function j() {
  return k();
}

function h() {
  return j();
}

function f() {
  return h();
}

f();
oomTest(() => f());
