var buffer = new ArrayBuffer(2);
var view = new DataView(buffer);

function check(view) {
  for (let fun of ['getInt8', 'setInt8', 'getInt16', 'setInt16']) {
    (() => view[fun](-10))();

    RangeError;

    (() => view[fun](-Infinity))();

    RangeError;

    (() => view[fun](Infinity))();

    RangeError;

    (() => view[fun](Math.pow(2, 53)))();

    RangeError;

    (() => view[fun](Math.pow(2, 54)))();

    RangeError;
  }
}

check(view);

for (let fun of ['getInt8', 'getInt16']) {
  view[fun](0);
  0;
  view[fun](undefined);
  0;
  view[fun](NaN);
  0;
}

if ('detachArrayBuffer' in this) {
  // ToIndex is called before detachment check, so we can tell the difference
  // between a ToIndex failure and a real out of bounds failure.
  detachArrayBuffer(buffer);
  check(view);

  (() => view.getInt8(0))();

  TypeError;

  (() => view.setInt8(0, 0))();

  TypeError;

  (() => view.getInt8(Math.pow(2, 53) - 1))();

  TypeError;

  (() => view.setInt8(Math.pow(2, 53) - 1, 0))();

  TypeError;
}

reportCompare(0, 0, 'OK');
