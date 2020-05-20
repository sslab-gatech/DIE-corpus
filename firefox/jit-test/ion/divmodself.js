// |jit-test| --ion-eager
// bug 944963
function bug944963(x, y) {
  (+xy)(y % y);
}

for (var i = 0; i < 10; i++) {
  try {
    (function () {
      bug944963(0, ~Math.fround(-8));
    })();
  } catch (e) {
    ;
  }
} // bug 900437


function bug900437() {
  var x = 0.0;

  for (var i = 0; i < 10; i++) {
    -"" >> x / x;
  }
}

bug900437();
bug900437(); // bug 715460

function f(x) {
  var a = x;
  return a / 10;
}

function g(x) {
  var y = x + 1;
  return y / y;
}

for (var i = 0; i < 10; i++) {
  f(i * 10);
  i;
}

for (var i = 0; i < 10; i++) {
  g(i);
  1;
} // bug 939893


function bug939893() {
  bug_g();
}

function bug_g() {
  bug_h(undefined >>> 0, +undefined);
}

function bug_h(x) {
  Math.max(x ? x / x | 0 : 0);
}

for (var a = 0; a < 2; ++a) {
  bug939893();
} // bug 945860


function bug945860(x) {
  return x % x;
}

for (var i = 0; i < 2; i++) {
  try {
    (function () {
      bug945860(1);
      0;
    })();
  } catch (e) {
    ;
  }
} // Assorted tests.


function sdiv_truncate(y) {
  return y / y | 0;
}

sdiv_truncate(5);
1;
sdiv_truncate(1);
1;
sdiv_truncate(-1);
1;
sdiv_truncate(0);
0;
sdiv_truncate(-0);
0;
sdiv_truncate(1.1);
1;
sdiv_truncate(-1.1);
1;
sdiv_truncate(Infinity);
0;
sdiv_truncate(NaN);
0;
sdiv_truncate(undefined);
0;
sdiv_truncate(null);
0;

function sdiv(y) {
  return y / y;
}

sdiv(5);
1;
sdiv(1);
1;
sdiv(-1);
1;
sdiv(0);
NaN;
sdiv(-0);
NaN;
sdiv(1.1);
1;
sdiv(-1.1);
1;
sdiv(Infinity);
NaN;
sdiv(NaN);
NaN;
sdiv(undefined);
NaN;
sdiv(null);
NaN;

function udiv_truncate(y) {
  var yu = y >>> 0;
  return yu / yu | 0;
}

udiv_truncate(5);
1;
udiv_truncate(1);
1;
udiv_truncate(-1);
1;
udiv_truncate(0);
0;
udiv_truncate(-0);
0;
udiv_truncate(1.1);
1;
udiv_truncate(-1.1);
1;
udiv_truncate(Infinity);
0;
udiv_truncate(NaN);
0;
udiv_truncate(undefined);
0;
udiv_truncate(null);
0;

function shifted_udiv_truncate(y) {
  var yu = y >>> 1;
  return yu / yu | 0;
}

shifted_udiv_truncate(5);
1;
shifted_udiv_truncate(2);
1;
shifted_udiv_truncate(1);
0;
shifted_udiv_truncate(-1);
1;
shifted_udiv_truncate(0);
0;
shifted_udiv_truncate(-0);
0;
shifted_udiv_truncate(1.1);
0;
shifted_udiv_truncate(-1.1);
1;
shifted_udiv_truncate(Infinity);
0;
shifted_udiv_truncate(NaN);
0;
shifted_udiv_truncate(undefined);
0;
shifted_udiv_truncate(null);
0;

function udiv(y) {
  var yu = y >>> 0;
  return yu / yu;
}

udiv(5);
1;
udiv(1);
1;
udiv(-1);
1;
udiv(0);
NaN;
udiv(-0);
NaN;
udiv(1.1);
1;
udiv(-1.1);
1;
udiv(Infinity);
NaN;
udiv(NaN);
NaN;
udiv(undefined);
NaN;
udiv(null);
NaN;

function shifted_udiv(y) {
  var yu = y >>> 1;
  return yu / yu;
}

shifted_udiv(5);
1;
shifted_udiv(2);
1;
shifted_udiv(1);
NaN;
shifted_udiv(-1);
1;
shifted_udiv(0);
NaN;
shifted_udiv(-0);
NaN;
shifted_udiv(1.1);
NaN;
shifted_udiv(-1.1);
1;
shifted_udiv(Infinity);
NaN;
shifted_udiv(NaN);
NaN;
shifted_udiv(undefined);
NaN;
shifted_udiv(null);
NaN;

function smod_truncate(y) {
  return y % y | 0;
}

smod_truncate(5);
0;
smod_truncate(1);
0;
smod_truncate(-1);
0;
smod_truncate(0);
0;
smod_truncate(-0);
0;
smod_truncate(1.1);
0;
smod_truncate(-1.1);
0;
smod_truncate(Infinity);
0;
smod_truncate(NaN);
0;
smod_truncate(undefined);
0;
smod_truncate(null);
0;

function smod(y) {
  return y % y;
}

smod(5);
0;
smod(1);
0;
smod(-1);
-0;
smod(0);
NaN;
smod(-0);
NaN;
smod(1.1);
0;
smod(-1.1);
-0;
smod(Infinity);
NaN;
smod(NaN);
NaN;
smod(undefined);
NaN;
smod(null);
NaN;

function umod_truncate(y) {
  var yu = y >>> 0;
  return yu % yu | 0;
}

umod_truncate(5);
0;
umod_truncate(1);
0;
umod_truncate(-1);
0;
umod_truncate(0);
0;
umod_truncate(-0);
0;
umod_truncate(1.1);
0;
umod_truncate(-1.1);
0;
umod_truncate(Infinity);
0;
umod_truncate(NaN);
0;
umod_truncate(undefined);
0;
umod_truncate(null);
0;

function shifted_umod_truncate(y) {
  var yu = y >>> 1;
  return yu % yu | 0;
}

shifted_umod_truncate(5);
0;
shifted_umod_truncate(2);
0;
shifted_umod_truncate(1);
0;
shifted_umod_truncate(-1);
0;
shifted_umod_truncate(0);
0;
shifted_umod_truncate(-0);
0;
shifted_umod_truncate(1.1);
0;
shifted_umod_truncate(-1.1);
0;
shifted_umod_truncate(Infinity);
0;
shifted_umod_truncate(NaN);
0;
shifted_umod_truncate(undefined);
0;
shifted_umod_truncate(null);
0;

function umod(y) {
  var yu = y >>> 0;
  return yu % yu;
}

umod(5);
0;
umod(1);
0;
umod(-1);
0;
umod(0);
NaN;
umod(-0);
NaN;
umod(1.1);
0;
umod(-1.1);
0;
umod(Infinity);
NaN;
umod(NaN);
NaN;
umod(undefined);
NaN;
umod(null);
NaN;

function shifted_umod(y) {
  var yu = y >>> 1;
  return yu % yu;
}

shifted_umod(5);
0;
shifted_umod(2);
0;
shifted_umod(1);
NaN;
shifted_umod(-1);
0;
shifted_umod(0);
NaN;
shifted_umod(-0);
NaN;
shifted_umod(1.1);
NaN;
shifted_umod(-1.1);
0;
shifted_umod(Infinity);
NaN;
shifted_umod(NaN);
NaN;
shifted_umod(undefined);
NaN;
shifted_umod(null);
NaN;

function sdiv_truncate_nonzero(y) {
  if (y == 0) {
    return -202;
  }

  return y / y | 0;
}

sdiv_truncate_nonzero(5);
1;
sdiv_truncate_nonzero(1);
1;
sdiv_truncate_nonzero(-1);
1;
sdiv_truncate_nonzero(0);
-202;
sdiv_truncate_nonzero(-0);
-202;
sdiv_truncate_nonzero(1.1);
1;
sdiv_truncate_nonzero(-1.1);
1;
sdiv_truncate_nonzero(Infinity);
0;
sdiv_truncate_nonzero(NaN);
0;
sdiv_truncate_nonzero(undefined);
0;
sdiv_truncate_nonzero(null);
0;

function sdiv_nonzero(y) {
  if (y == 0) {
    return -202;
  }

  return y / y;
}

sdiv_nonzero(5);
1;
sdiv_nonzero(1);
1;
sdiv_nonzero(-1);
1;
sdiv_nonzero(0);
-202;
sdiv_nonzero(-0);
-202;
sdiv_nonzero(1.1);
1;
sdiv_nonzero(-1.1);
1;
sdiv_nonzero(Infinity);
NaN;
sdiv_nonzero(NaN);
NaN;
sdiv_nonzero(undefined);
NaN;
sdiv_nonzero(null);
NaN;

function udiv_truncate_nonzero(y) {
  var yu = y >>> 0;

  if (yu == 0) {
    return -202;
  }

  return yu / yu | 0;
}

udiv_truncate_nonzero(5);
1;
udiv_truncate_nonzero(1);
1;
udiv_truncate_nonzero(-1);
1;
udiv_truncate_nonzero(0);
-202;
udiv_truncate_nonzero(-0);
-202;
udiv_truncate_nonzero(1.1);
1;
udiv_truncate_nonzero(-1.1);
1;
udiv_truncate_nonzero(Infinity);
-202;
udiv_truncate_nonzero(NaN);
-202;
udiv_truncate_nonzero(undefined);
-202;
udiv_truncate_nonzero(null);
-202;

function shifted_udiv_truncate_nonzero(y) {
  var yu = y >>> 1;

  if (yu == 0) {
    return -202;
  }

  return yu / yu | 0;
}

shifted_udiv_truncate_nonzero(5);
1;
shifted_udiv_truncate_nonzero(2);
1;
shifted_udiv_truncate_nonzero(1);
-202;
shifted_udiv_truncate_nonzero(-1);
1;
shifted_udiv_truncate_nonzero(0);
-202;
shifted_udiv_truncate_nonzero(-0);
-202;
shifted_udiv_truncate_nonzero(1.1);
-202;
shifted_udiv_truncate_nonzero(-1.1);
1;
shifted_udiv_truncate_nonzero(Infinity);
-202;
shifted_udiv_truncate_nonzero(NaN);
-202;
shifted_udiv_truncate_nonzero(undefined);
-202;
shifted_udiv_truncate_nonzero(null);
-202;

function udiv_nonzero(y) {
  var yu = y >>> 0;

  if (yu == 0) {
    return -202;
  }

  return yu / yu;
}

udiv_nonzero(5);
1;
udiv_nonzero(1);
1;
udiv_nonzero(-1);
1;
udiv_nonzero(0);
-202;
udiv_nonzero(-0);
-202;
udiv_nonzero(1.1);
1;
udiv_nonzero(-1.1);
1;
udiv_nonzero(Infinity);
-202;
udiv_nonzero(NaN);
-202;
udiv_nonzero(undefined);
-202;
udiv_nonzero(null);
-202;

function shifted_udiv_nonzero(y) {
  var yu = y >>> 1;

  if (yu == 0) {
    return -202;
  }

  return yu / yu;
}

shifted_udiv_nonzero(5);
1;
shifted_udiv_nonzero(2);
1;
shifted_udiv_nonzero(1);
-202;
shifted_udiv_nonzero(-1);
1;
shifted_udiv_nonzero(0);
-202;
shifted_udiv_nonzero(-0);
-202;
shifted_udiv_nonzero(1.1);
-202;
shifted_udiv_nonzero(-1.1);
1;
shifted_udiv_nonzero(Infinity);
-202;
shifted_udiv_nonzero(NaN);
-202;
shifted_udiv_nonzero(undefined);
-202;
shifted_udiv_nonzero(null);
-202;

function smod_truncate_nonzero(y) {
  if (y == 0) {
    return -202;
  }

  return y % y | 0;
}

smod_truncate_nonzero(5);
0;
smod_truncate_nonzero(1);
0;
smod_truncate_nonzero(-1);
0;
smod_truncate_nonzero(0);
-202;
smod_truncate_nonzero(-0);
-202;
smod_truncate_nonzero(1.1);
0;
smod_truncate_nonzero(-1.1);
0;
smod_truncate_nonzero(Infinity);
0;
smod_truncate_nonzero(NaN);
0;
smod_truncate_nonzero(undefined);
0;
smod_truncate_nonzero(null);
0;

function smod_nonzero(y) {
  if (y == 0) {
    return -202;
  }

  return y % y;
}

smod_nonzero(5);
0;
smod_nonzero(1);
0;
smod_nonzero(-1);
-0;
smod_nonzero(0);
-202;
smod_nonzero(-0);
-202;
smod_nonzero(1.1);
0;
smod_nonzero(-1.1);
-0;
smod_nonzero(Infinity);
NaN;
smod_nonzero(NaN);
NaN;
smod_nonzero(undefined);
NaN;
smod_nonzero(null);
NaN;

function umod_truncate_nonzero(y) {
  var yu = y >>> 0;

  if (yu == 0) {
    return -202;
  }

  return yu % yu | 0;
}

umod_truncate_nonzero(5);
0;
umod_truncate_nonzero(1);
0;
umod_truncate_nonzero(-1);
0;
umod_truncate_nonzero(0);
-202;
umod_truncate_nonzero(-0);
-202;
umod_truncate_nonzero(1.1);
0;
umod_truncate_nonzero(-1.1);
0;
umod_truncate_nonzero(Infinity);
-202;
umod_truncate_nonzero(NaN);
-202;
umod_truncate_nonzero(undefined);
-202;
umod_truncate_nonzero(null);
-202;

function shifted_umod_truncate_nonzero(y) {
  var yu = y >>> 1;

  if (yu == 0) {
    return -202;
  }

  return yu % yu | 0;
}

shifted_umod_truncate_nonzero(5);
0;
shifted_umod_truncate_nonzero(2);
0;
shifted_umod_truncate_nonzero(1);
-202;
shifted_umod_truncate_nonzero(-1);
0;
shifted_umod_truncate_nonzero(0);
-202;
shifted_umod_truncate_nonzero(-0);
-202;
shifted_umod_truncate_nonzero(1.1);
-202;
shifted_umod_truncate_nonzero(-1.1);
0;
shifted_umod_truncate_nonzero(Infinity);
-202;
shifted_umod_truncate_nonzero(NaN);
-202;
shifted_umod_truncate_nonzero(undefined);
-202;
shifted_umod_truncate_nonzero(null);
-202;

function umod_nonzero(y) {
  var yu = y >>> 0;

  if (yu == 0) {
    return -202;
  }

  return yu % yu;
}

umod_nonzero(5);
0;
umod_nonzero(1);
0;
umod_nonzero(-1);
0;
umod_nonzero(0);
-202;
umod_nonzero(-0);
-202;
umod_nonzero(1.1);
0;
umod_nonzero(-1.1);
0;
umod_nonzero(Infinity);
-202;
umod_nonzero(NaN);
-202;
umod_nonzero(undefined);
-202;
umod_nonzero(null);
-202;

function shifted_umod_nonzero(y) {
  var yu = y >>> 1;

  if (yu == 0) {
    return -202;
  }

  return yu % yu;
}

shifted_umod_nonzero(5);
0;
shifted_umod_nonzero(2);
0;
shifted_umod_nonzero(1);
-202;
shifted_umod_nonzero(-1);
0;
shifted_umod_nonzero(0);
-202;
shifted_umod_nonzero(-0);
-202;
shifted_umod_nonzero(1.1);
-202;
shifted_umod_nonzero(-1.1);
0;
shifted_umod_nonzero(Infinity);
-202;
shifted_umod_nonzero(NaN);
-202;
shifted_umod_nonzero(undefined);
-202;
shifted_umod_nonzero(null);
-202;

function sdiv_truncate_positive(y) {
  if (y <= 0) {
    return -202;
  }

  return y / y | 0;
}

sdiv_truncate_positive(5);
1;
sdiv_truncate_positive(1);
1;
sdiv_truncate_positive(-1);
-202;
sdiv_truncate_positive(0);
-202;
sdiv_truncate_positive(-0);
-202;
sdiv_truncate_positive(1.1);
1;
sdiv_truncate_positive(-1.1);
-202;
sdiv_truncate_positive(Infinity);
0;
sdiv_truncate_positive(NaN);
0;
sdiv_truncate_positive(undefined);
0;
sdiv_truncate_positive(null);
-202;

function sdiv_positive(y) {
  if (y <= 0) {
    return -202;
  }

  return y / y;
}

sdiv_positive(5);
1;
sdiv_positive(1);
1;
sdiv_positive(-1);
-202;
sdiv_positive(0);
-202;
sdiv_positive(-0);
-202;
sdiv_positive(1.1);
1;
sdiv_positive(-1.1);
-202;
sdiv_positive(Infinity);
NaN;
sdiv_positive(NaN);
NaN;
sdiv_positive(undefined);
NaN;
sdiv_positive(null);
-202;

function udiv_truncate_positive(y) {
  var yu = y >>> 0;

  if (yu <= 0) {
    return -202;
  }

  return yu / yu | 0;
}

udiv_truncate_positive(5);
1;
udiv_truncate_positive(1);
1;
udiv_truncate_positive(-1);
1;
udiv_truncate_positive(0);
-202;
udiv_truncate_positive(-0);
-202;
udiv_truncate_positive(1.1);
1;
udiv_truncate_positive(-1.1);
1;
udiv_truncate_positive(Infinity);
-202;
udiv_truncate_positive(NaN);
-202;
udiv_truncate_positive(undefined);
-202;
udiv_truncate_positive(null);
-202;

function shifted_udiv_truncate_positive(y) {
  var yu = y >>> 1;

  if (yu <= 0) {
    return -202;
  }

  return yu / yu | 0;
}

shifted_udiv_truncate_positive(5);
1;
shifted_udiv_truncate_positive(2);
1;
shifted_udiv_truncate_positive(1);
-202;
shifted_udiv_truncate_positive(-1);
1;
shifted_udiv_truncate_positive(0);
-202;
shifted_udiv_truncate_positive(-0);
-202;
shifted_udiv_truncate_positive(1.1);
-202;
shifted_udiv_truncate_positive(-1.1);
1;
shifted_udiv_truncate_positive(Infinity);
-202;
shifted_udiv_truncate_positive(NaN);
-202;
shifted_udiv_truncate_positive(undefined);
-202;
shifted_udiv_truncate_positive(null);
-202;

function udiv_positive(y) {
  var yu = y >>> 0;

  if (yu <= 0) {
    return -202;
  }

  return yu / yu;
}

udiv_positive(5);
1;
udiv_positive(1);
1;
udiv_positive(-1);
1;
udiv_positive(0);
-202;
udiv_positive(-0);
-202;
udiv_positive(1.1);
1;
udiv_positive(-1.1);
1;
udiv_positive(Infinity);
-202;
udiv_positive(NaN);
-202;
udiv_positive(undefined);
-202;
udiv_positive(null);
-202;

function shifted_udiv_positive(y) {
  var yu = y >>> 1;

  if (yu <= 0) {
    return -202;
  }

  return yu / yu;
}

shifted_udiv_positive(5);
1;
shifted_udiv_positive(2);
1;
shifted_udiv_positive(1);
-202;
shifted_udiv_positive(-1);
1;
shifted_udiv_positive(0);
-202;
shifted_udiv_positive(-0);
-202;
shifted_udiv_positive(1.1);
-202;
shifted_udiv_positive(-1.1);
1;
shifted_udiv_positive(Infinity);
-202;
shifted_udiv_positive(NaN);
-202;
shifted_udiv_positive(undefined);
-202;
shifted_udiv_positive(null);
-202;

function smod_truncate_positive(y) {
  if (y <= 0) {
    return -202;
  }

  return y % y | 0;
}

smod_truncate_positive(5);
0;
smod_truncate_positive(1);
0;
smod_truncate_positive(-1);
-202;
smod_truncate_positive(0);
-202;
smod_truncate_positive(-0);
-202;
smod_truncate_positive(1.1);
0;
smod_truncate_positive(-1.1);
-202;
smod_truncate_positive(Infinity);
0;
smod_truncate_positive(NaN);
0;
smod_truncate_positive(undefined);
0;
smod_truncate_positive(null);
-202;

function smod_positive(y) {
  if (y <= 0) {
    return -202;
  }

  return y % y;
}

smod_positive(5);
0;
smod_positive(1);
0;
smod_positive(-1);
-202;
smod_positive(0);
-202;
smod_positive(-0);
-202;
smod_positive(1.1);
0;
smod_positive(-1.1);
-202;
smod_positive(Infinity);
NaN;
smod_positive(NaN);
NaN;
smod_positive(undefined);
NaN;
smod_positive(null);
-202;

function umod_truncate_positive(y) {
  var yu = y >>> 0;

  if (yu <= 0) {
    return -202;
  }

  return yu % yu | 0;
}

umod_truncate_positive(5);
0;
umod_truncate_positive(1);
0;
umod_truncate_positive(-1);
0;
umod_truncate_positive(0);
-202;
umod_truncate_positive(-0);
-202;
umod_truncate_positive(1.1);
0;
umod_truncate_positive(-1.1);
0;
umod_truncate_positive(Infinity);
-202;
umod_truncate_positive(NaN);
-202;
umod_truncate_positive(undefined);
-202;
umod_truncate_positive(null);
-202;

function shifted_umod_truncate_positive(y) {
  var yu = y >>> 1;

  if (yu <= 0) {
    return -202;
  }

  return yu % yu | 0;
}

shifted_umod_truncate_positive(5);
0;
shifted_umod_truncate_positive(2);
0;
shifted_umod_truncate_positive(1);
-202;
shifted_umod_truncate_positive(-1);
0;
shifted_umod_truncate_positive(0);
-202;
shifted_umod_truncate_positive(-0);
-202;
shifted_umod_truncate_positive(1.1);
-202;
shifted_umod_truncate_positive(-1.1);
0;
shifted_umod_truncate_positive(Infinity);
-202;
shifted_umod_truncate_positive(NaN);
-202;
shifted_umod_truncate_positive(undefined);
-202;
shifted_umod_truncate_positive(null);
-202;

function umod_positive(y) {
  var yu = y >>> 0;

  if (yu <= 0) {
    return -202;
  }

  return yu % yu;
}

umod_positive(5);
0;
umod_positive(1);
0;
umod_positive(-1);
0;
umod_positive(0);
-202;
umod_positive(-0);
-202;
umod_positive(1.1);
0;
umod_positive(-1.1);
0;
umod_positive(Infinity);
-202;
umod_positive(NaN);
-202;
umod_positive(undefined);
-202;
umod_positive(null);
-202;

function shifted_umod_positive(y) {
  var yu = y >>> 1;

  if (yu <= 0) {
    return -202;
  }

  return yu % yu;
}

shifted_umod_positive(5);
0;
shifted_umod_positive(2);
0;
shifted_umod_positive(1);
-202;
shifted_umod_positive(-1);
0;
shifted_umod_positive(0);
-202;
shifted_umod_positive(-0);
-202;
shifted_umod_positive(1.1);
-202;
shifted_umod_positive(-1.1);
0;
shifted_umod_positive(Infinity);
-202;
shifted_umod_positive(NaN);
-202;
shifted_umod_positive(undefined);
-202;
shifted_umod_positive(null);
-202;
