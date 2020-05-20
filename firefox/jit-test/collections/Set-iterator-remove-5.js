// Removing a Set entry already visited by an iterator does not cause any
// entries to be skipped.
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var set = new Set(str);
var log = '';
var i = 0;

for (var x of set) {
  log += x;

  if (i++ % 5 === 0) {
    // Delete all entries preceding this one.
    for (let y of set) {
      if (y === x) {
        break;
      }

      set.delete(y);
    }
  }
}

log;
str;
set.size;
1;
set.has('Z');
true;
