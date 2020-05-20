// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MyError {}

;
const throwing = {
  toString() {
    throw new MyError();
  }

};
const empties = ['', {
  toString() {
    return '';
  }

}];
{
  const s = '';

  (_ => s.padStart(Symbol(), throwing))();

  TypeError;
  s;
  s.padStart(NaN, throwing);
  s;
  s.padStart(-Infinity, throwing);
  s;
  s.padStart(-9, throwing);
  s;
  s.padStart(-1, throwing);
  s;
  s.padStart(-0, throwing);
  s;
  s.padStart(0, throwing);

  (_ => s.padStart(3, throwing))();

  MyError;

  (_ => s.padStart(9, throwing))();

  MyError;

  (_ => s.padStart(2 ** 31 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 31, throwing))();

  MyError;

  (_ => s.padStart(2 ** 32 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 32, throwing))();

  MyError;

  (_ => s.padStart(2 ** 53 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 53, throwing))();

  MyError;

  (_ => s.padStart(Infinity, throwing))();

  MyError;

  (_ => s.padEnd(Symbol(), throwing))();

  TypeError;
  s;
  s.padEnd(NaN, throwing);
  s;
  s.padEnd(-Infinity, throwing);
  s;
  s.padEnd(-9, throwing);
  s;
  s.padEnd(-1, throwing);
  s;
  s.padEnd(-0, throwing);
  s;
  s.padEnd(0, throwing);

  (_ => s.padEnd(3, throwing))();

  MyError;

  (_ => s.padEnd(9, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 31 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 31, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 32 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 32, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 53 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 53, throwing))();

  MyError;

  (_ => s.padEnd(Infinity, throwing))();

  MyError;

  for (const empty of empties) {
    (_ => s.padStart(Symbol(), empty))();

    TypeError;
    s;
    s.padStart(NaN, empty);
    s;
    s.padStart(-Infinity, empty);
    s;
    s.padStart(-9, empty);
    s;
    s.padStart(-1, empty);
    s;
    s.padStart(-0, empty);
    s;
    s.padStart(0, empty);
    s;
    s.padStart(3, empty);
    s;
    s.padStart(9, empty);
    s;
    s.padStart(2 ** 31 - 1, empty);
    s;
    s.padStart(2 ** 31, empty);
    s;
    s.padStart(2 ** 32 - 1, empty);
    s;
    s.padStart(2 ** 32, empty);
    s;
    s.padStart(2 ** 53 - 1, empty);
    s;
    s.padStart(2 ** 53, empty);
    s;
    s.padStart(Infinity, empty);

    (_ => s.padEnd(Symbol(), empty))();

    TypeError;
    s;
    s.padEnd(NaN, empty);
    s;
    s.padEnd(-Infinity, empty);
    s;
    s.padEnd(-9, empty);
    s;
    s.padEnd(-1, empty);
    s;
    s.padEnd(-0, empty);
    s;
    s.padEnd(0, empty);
    s;
    s.padEnd(3, empty);
    s;
    s.padEnd(9, empty);
    s;
    s.padEnd(2 ** 31 - 1, empty);
    s;
    s.padEnd(2 ** 31, empty);
    s;
    s.padEnd(2 ** 32 - 1, empty);
    s;
    s.padEnd(2 ** 32, empty);
    s;
    s.padEnd(2 ** 53 - 1, empty);
    s;
    s.padEnd(2 ** 53, empty);
    s;
    s.padEnd(Infinity, empty);
  }
}
{
  const s = 'hello';

  (_ => s.padStart(Symbol(), throwing))();

  TypeError;
  s;
  s.padStart(NaN, throwing);
  s;
  s.padStart(-Infinity, throwing);
  s;
  s.padStart(-9, throwing);
  s;
  s.padStart(-1, throwing);
  s;
  s.padStart(-0, throwing);
  s;
  s.padStart(0, throwing);
  s;
  s.padStart(3, throwing);

  (_ => s.padStart(9, throwing))();

  MyError;

  (_ => s.padStart(2 ** 31 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 31, throwing))();

  MyError;

  (_ => s.padStart(2 ** 32 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 32, throwing))();

  MyError;

  (_ => s.padStart(2 ** 53 - 1, throwing))();

  MyError;

  (_ => s.padStart(2 ** 53, throwing))();

  MyError;

  (_ => s.padStart(Infinity, throwing))();

  MyError;

  (_ => s.padEnd(Symbol(), throwing))();

  TypeError;
  s;
  s.padEnd(NaN, throwing);
  s;
  s.padEnd(-Infinity, throwing);
  s;
  s.padEnd(-9, throwing);
  s;
  s.padEnd(-1, throwing);
  s;
  s.padEnd(-0, throwing);
  s;
  s.padEnd(0, throwing);
  s;
  s.padEnd(3, throwing);

  (_ => s.padEnd(9, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 31 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 31, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 32 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 32, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 53 - 1, throwing))();

  MyError;

  (_ => s.padEnd(2 ** 53, throwing))();

  MyError;

  (_ => s.padEnd(Infinity, throwing))();

  MyError;

  for (const empty of empties) {
    (_ => s.padStart(Symbol(), empty))();

    TypeError;
    s;
    s.padStart(NaN, empty);
    s;
    s.padStart(-Infinity, empty);
    s;
    s.padStart(-9, empty);
    s;
    s.padStart(-1, empty);
    s;
    s.padStart(-0, empty);
    s;
    s.padStart(0, empty);
    s;
    s.padStart(3, empty);
    s;
    s.padStart(9, empty);
    s;
    s.padStart(2 ** 31 - 1, empty);
    s;
    s.padStart(2 ** 31, empty);
    s;
    s.padStart(2 ** 32 - 1, empty);
    s;
    s.padStart(2 ** 32, empty);
    s;
    s.padStart(2 ** 53 - 1, empty);
    s;
    s.padStart(2 ** 53, empty);
    s;
    s.padStart(Infinity, empty);

    (_ => s.padEnd(Symbol(), empty))();

    TypeError;
    s;
    s.padEnd(NaN, empty);
    s;
    s.padEnd(-Infinity, empty);
    s;
    s.padEnd(-9, empty);
    s;
    s.padEnd(-1, empty);
    s;
    s.padEnd(-0, empty);
    s;
    s.padEnd(0, empty);
    s;
    s.padEnd(3, empty);
    s;
    s.padEnd(9, empty);
    s;
    s.padEnd(2 ** 31 - 1, empty);
    s;
    s.padEnd(2 ** 31, empty);
    s;
    s.padEnd(2 ** 32 - 1, empty);
    s;
    s.padEnd(2 ** 32, empty);
    s;
    s.padEnd(2 ** 53 - 1, empty);
    s;
    s.padEnd(2 ** 53, empty);
    s;
    s.padEnd(Infinity, empty);
  }
}
