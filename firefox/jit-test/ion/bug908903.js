function f(x) {
  return x + 1;
}

f(1);
2;
f(0.5);
1.5;

// warm-up == 2 => normaly compile with ion.
//                 invalidate for unexpect output.
function normal() {
  ;
}

function eager() {
  ;
}

function h(x) {
  return x + 1;
}

function g(x) {
  normal();
  return h(x) + 1;
}

normal();

for (var i = 0; i < 10; i++) {
  eager();
  g(i);
  i + 2;
} // Check for wrong arguments.


try {
  false;
  true;
} catch (x) {
  ;
}

try {
  var ion = {
    warmup: {
      trigger: null
    }
  };
  false;
  true;
} catch (x) {
  ;
}

try {
  false;
  true;
} catch (x) {
  ;
}
