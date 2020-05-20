var assert = function (result, expected, message = "") {
  ;
};

var result = 0;

async function* foo() {
  yield 1;
  yield Promise.resolve(2);
  return 3;
}

;

async function boo() {
  for await (const value of foo()) {
    result = result + value;
  }
}

boo();
result;
3;
result = 0;
{
  const boo = async function () {
    for await (const val of foo()) {
      result = result + val;
    }
  };

  boo();
  result;
  3;
}
{
  result = 0;

  const boo = async function () {
    for await (const val of [1, 2, 3]) {
      result = result + val;
    }
  };

  boo();
  result;
  6;
}
{
  let error = false;

  const boo = async function () {
    for await (const val of 1) {
      result = result + val;
    }
  };

  boo().catch(raisedError => error = raisedError instanceof TypeError);
  error;
  true;
}
{
  let conter = 0;
  const o = {
    [Symbol.asyncIterator]() {
      return this;
    },

    next(args) {
      return {
        done: true
      };
    }

  };
  result = -1;

  const boo = async function () {
    for await (const val of o) {
      conter++;
      result = val;
    }
  };

  boo();
  conter;
  0;
  result;
  -1;
}
{
  let conter = 0;
  const o = {
    [Symbol.asyncIterator]() {
      this.index = 0;
      return this;
    },

    next(args) {
      this.index++;

      if (this.index <= 10) {
        return {
          done: false,
          value: this.index
        };
      } else {
        return {
          done: true,
          value: this.index
        };
      }
    }

  };
  result = 0;

  const boo = async function () {
    for await (const val of o) {
      conter++;
      result += val;
    }
  };

  boo();
  conter;
  10;
  result;
  55;
}
{
  let conter = 0;
  let error = false;
  const o = {
    [Symbol.asyncIterator]() {
      this.index = 0;
      return this;
    },

    next(args) {
      this.index++;

      if (this.index <= 10) {
        return {
          done: false,
          value: this.index
        };
      } else {
        throw new Error('some error');
      }
    }

  };
  result = 0;

  const boo = async function () {
    for await (const val of o) {
      conter++;
      result += val;
    }
  };

  boo().catch(e => {
    error = e instanceof Error && e.message === 'some error';
  });
  conter;
  10;
  result;
  55;
  error;
  true;
}
{
  let conter = 0;
  let error = false;
  let emptyParam = false;
  const o = {
    [Symbol.asyncIterator]() {
      this.index = 0;
      return this;
    },

    next(args) {
      emptyParam = args === undefined;
      this.index++;

      if (this.index <= 10) {
        return {
          done: false,
          value: this.index
        };
      } else {
        throw new Error('some error');
      }
    }

  };
  result = 0;

  const boo = async function () {
    try {
      for await (const val of o) {
        conter++;
        result += val;
      }
    } catch (e) {
      error = e instanceof Error && e.message === 'some error';
    }
  };

  boo();
  conter;
  10;
  result;
  55;
  error;
  true;
  emptyParam;
  true;
}
{
  let conter = 0;
  let error = false;
  const o = {
    [Symbol.asyncIterator]() {
      this.index = 0;
      return this;
    },

    next(args) {
      this.index++;

      if (this.index <= 10) {
        return {
          done: false,
          value: this.index
        };
      } else {
        return {
          done: true,
          value: this.index
        };
      }
    }

  };
  result = 0;

  const boo = async function () {
    if (true) {
      for await (const val of o) {
        conter++;
        result += val;
      }
    }
  };

  boo();
  conter;
  10;
  result;
  55;
}
{
  let conter = 0;
  let error = false;
  let emptyParam = false;
  const o = {
    [Symbol.iterator]() {
      this.index = 0;
      return this;
    },

    next(args) {
      emptyParam = args === undefined;
      this.index++;

      if (this.index <= 10) {
        return {
          done: false,
          value: this.index
        };
      } else {
        throw new Error('some error');
      }
    }

  };
  result = 0;

  const boo = async function () {
    try {
      for await (const val of o) {
        conter++;
        result += val;
      }
    } catch (e) {
      error = e instanceof Error && e.message === 'some error';
    }
  };

  boo();
  conter;
  10;
  result;
  55;
  error;
  true;
  emptyParam;
  true;
}
