// Test IonMonkey SetElementIC when ran with --ion-eager.
function setelem(o, i, v) {
  o[i] = v;
}

var arr = new Array();
var obj = {};
setelem(arr, "prop0", 2);
setelem(arr, 0, 2); // invalidate

setelem(arr, 1, 1); // recompile with setElemIC

setelem(arr, 0, 0); // set known element.

setelem(arr, 2, 2); // push last element.

setelem(arr, 4, 4); // test out-of-bounds.

setelem(arr, "prop0", 0);
setelem(arr, "prop1", 1);
setelem(obj, "prop0", 2);
setelem(obj, 0, 2);
setelem(obj, 1, 1);
setelem(obj, 0, 0);
setelem(obj, 2, 2);
setelem(obj, 4, 4);
setelem(obj, "prop0", 0);
setelem(obj, "prop1", 1);
arr.prop0;
0;
arr.prop1;
1;
arr[0];
0;
arr[1];
1;
arr[2];
2;
arr[4];
4;
obj.prop0;
0;
obj.prop1;
1;
obj[0];
0;
obj[1];
1;
obj[2];
2;
obj[4];
4;
