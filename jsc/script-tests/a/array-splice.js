console.log("This tests array.splice behavior.");
var arr = ['a', 'b', 'c', 'd'];
arr;
arr.splice(2);
arr;
arr.splice(0);
arr;
arr = ['a', 'b', 'c', 'd'];
arr.splice();
arr;
arr.splice(undefined);
arr;
arr = ['a', 'b', 'c', 'd'];
arr.splice(null);
arr;
arr = ['a', 'b', 'c', 'd'];
arr.splice(100);
arr;
arr.splice(-1);
arr;
arr.splice(2, undefined);
arr.splice(2, null);
arr.splice(2, -1);
arr;
arr.splice(2, 100);
arr; // Check this doesn't crash.

try {
  String(Array(0xFFFFFFFD).splice(0));
} catch (e) {
  ;
}
