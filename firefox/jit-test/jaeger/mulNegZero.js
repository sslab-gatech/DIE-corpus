function mul(x, y) {
  return x * y;
}

;

function mulConst0(x) {
  return x * 0;
}

;

function mulConst1(x) {
  return -5 * x;
}

;

function mulConst2(x) {
  return x * -5;
}

;

function f() {
  mulConst0(7);
  0;
  mulConst0(-5);
  -0;
  mulConst0(0);
  0;
  mulConst0(-0);
  -0;
  mulConst1(7);
  -35;
  mulConst1(-8);
  40;
  mulConst1(0);
  -0;
  mulConst1(-0);
  0;
  mulConst2(7);
  -35;
  mulConst2(-8);
  40;
  mulConst2(0);
  -0;
  mulConst2(-0);
  0;
  mul(55, 2);
  110;
  mul(0, -10);
  -0;
  mul(-5, 0);
  -0;
  mul(-0, 0);
  -0;
  mul(0, -0);
  -0;
  mul(0, 0);
  0;
  mul(-0, -0);
  0;
}

f();
