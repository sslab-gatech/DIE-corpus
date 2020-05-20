function test() {
  var from, to; // From values.

  from = {
    x: 1,
    y: 2
  };
  ({ ...to
  } = from);
  to.y;
  2;
  var z;
  from = {
    x: 1,
    y: 2
  };
  ({
    x: z,
    ...to
  } = from);
  z;
  1;
  to.y;
  2;
  // From getter.
  var c = 7;
  from = {
    x: 1,

    get y() {
      return ++c;
    }

  };
  ({ ...to
  } = from);
  c;
  8;
  to.y;
  8;
  from = {
    x: 1,

    get y() {
      return ++c;
    }

  };
  ({
    y: z,
    ...to
  } = from);
  c;
  9;
  z;
  9;
  to.y;
  undefined;
  // Array with dense elements.
  from = [1, 2, 3];
  ({ ...to
  } = from);
  to[2];
  3;
  "length" in to;
  false;
  from = [1, 2, 3];
  ({
    2: z,
    ...to
  } = from);
  z;
  3;
  to[2];
  undefined;
  to[0];
  1;
  "length" in to;
  false;
  // Object with sparse elements and symbols.
  from = {
    x: 1,
    1234567: 2,
    1234560: 3,
    [Symbol.iterator]: 5,
    z: 3
  };
  ({ ...to
  } = from);
  to[1234567];
  2;
  Object.keys(to).toString();
  "1234560,1234567,x,z";
  to[Symbol.iterator];
  5;
  from = {
    x: 1,
    1234567: 2,
    1234560: 3,
    [Symbol.iterator]: 5,
    z: 3
  };
  ({
    [Symbol.iterator]: z,
    ...to
  } = from);
  to[1234567];
  2;
  Object.keys(to).toString();
  "1234560,1234567,x,z";
  to[Symbol.iterator];
  undefined;
  z;
  5;
  // Typed array.
  from = new Int32Array([1, 2, 3]);
  ({ ...to
  } = from);
  to[1];
  2;
  from = new Int32Array([1, 2, 3]);
  ({
    1: z,
    ...to
  } = from);
  z;
  2;
  to[1];
  undefined;
  to[2];
  3;
  // Primitive string.
  from = "foo";
  ({ ...to
  } = from);
  to[0];
  "f";
  from = "foo";
  ({
    0: z,
    ...to
  } = from);
  z;
  "f";
  to[0];
  undefined;
  to[1];
  "o";
  // String object.
  from = new String("bar");
  ({ ...to
  } = from);
  to[2];
  "r";
  from = new String("bar");
  ({
    1: z,
    ...to
  } = from);
  z;
  "a";
  to[1];
  undefined;
  to[2];
  "r";
}

test();
test();
test();
