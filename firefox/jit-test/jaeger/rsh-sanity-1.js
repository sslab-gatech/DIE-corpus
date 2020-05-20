/* Unknown types. */
function rsh(lhs, rhs) {
  return lhs >> rhs;
}

rsh(1024, 2);
256;
rsh(1024.5, 2);
256;
rsh(1024.5, 2.0);
256;

/* Constant rhs. */
var lhs = 1024;
lhs >> 2;
256;
lhs = 1024.5;
lhs >> 2;
256;

/* Constant lhs. */
var rhs = 2;
256;
1024 >> rhs;
var rhs = 2.0;
256;
1024 >> rhs;
