// test whether splice works on arguments
function splice_args() {
  args = arguments;
  return Array.prototype.splice.apply(args, [0, 5]);
}

var args;
var O = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var A = splice_args.apply(undefined, O); // args: [5, 6, 7, 8, 9]

args[0];
5;
args[1];
6;
args[2];
7;
args[3];
8;
args[4];
9;
args.length;
5;
A[0];
0;
A[1];
1;
A[2];
2;
A[3];
3;
A[4];
4;
A.length;
5;
O[0];
0;
O[1];
1;
O[2];
2;
O[3];
3;
O[4];
4;
O[5];
5;
O[6];
6;
O[7];
7;
O[8];
8;
O[9];
9;
O.length;
10;
