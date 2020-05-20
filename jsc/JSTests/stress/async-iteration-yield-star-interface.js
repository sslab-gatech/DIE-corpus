var assert = function (result, expected, message = "") {
  ;
};

const getPromise = promiseHolder => {
  return new Promise((resolve, reject) => {
    promiseHolder.resolve = resolve;
    promiseHolder.reject = reject;
  });
};

const Logger = function () {
  var log = [];

  this.logEvent = (type, value, done) => {
    log.push({
      type,
      value,
      done
    });
  };

  this.logFulfilledEvent = (value, done) => {
    this.logEvent('fulfilled', value, done);
  };

  this.logRejectEvent = error => {
    this.logEvent('reject', error.toString(), true);
  };

  this.logCatchEvent = value => {
    this.logEvent('catch', value, true);
  };

  this.logCustomEvent = event => {
    this.logEvent('custom', event, false);
  };

  this.getLogger = () => log;

  this.clear = () => {
    log = [];
  };
};

const fulfillSpy = logger => result => logger.logFulfilledEvent(result.value, result.done);

const rejectSpy = logger => error => logger.logRejectEvent(error);

const catchSpy = logger => error => logger.logCatchEvent(error);

const customSpy = logger => event => logger.logCustomEvent(event);

const assertLogger = function (loggerObject) {
  const logger = loggerObject.getLogger();

  var _assertLogger = function () {
    let index = 0;

    const isNotOutOfLength = () => {
      index < logger.length;
      true;
      `Index is greater then log length`;
    };

    this.fullfilled = function (expectedValue, message = 'on fulfill') {
      isNotOutOfLength();
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'fulfilled';
      msg;
      step.value;
      expectedValue;
      msg;
      step.done;
      false;
      msg;
      index++;
      return this;
    };

    this.fullfilledDone = function (expectedValue, message = 'on fulfill with done true') {
      isNotOutOfLength();
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'fulfilled';
      msg;
      step.value;
      expectedValue;
      msg;
      step.done;
      true;
      msg;
      index++;
      return this;
    };

    this.rejected = function (error, message = 'on reject') {
      isNotOutOfLength();
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'reject';
      msg;
      step.value;
      error.toString();
      msg;
      step.done;
      true;
      msg;
      index++;
      return this;
    };

    this.catched = function (expectedError, message = 'on catch') {
      isNotOutOfLength();
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'catch';
      msg;
      step.value;
      expectedError;
      msg;
      step.done;
      true;
      msg;
      index++;
      return this;
    };

    this.custom = function (expectedValue, message = 'on custom event') {
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'custom';
      msg;
      step.value;
      expectedValue;
      msg;
      step.done;
      false;
      msg;
      index++;
      return this;
    };

    this.isFinal = function (message = '') {
      index;
      logger.length;
      `expected final step: ${message}`;
    };
  };

  return new _assertLogger();
};

var logger = new Logger();
const someValue = 'some-value';
const errorMessage = 'error-message';
let asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },

  next(value) {
    customSpy(logger)('next:' + value);
    return {
      value: value,
      done: 'iter:Finish' === value
    };
  },

  throw(error) {
    customSpy(logger)('throw:' + error);
    return error;
  },

  return(value) {
    customSpy(logger)('return:' + value);
    return {
      value: value,
      done: true
    };
  }

};

async function* foo() {
  yield '0';
  yield* asyncIter;
  yield '3';
}

let ff = foo('Init');
ff.next('A').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('B').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('C').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('D').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('E').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('next:C').fullfilled(undefined).custom('next:D').fullfilled("C").custom('next:E').fullfilled("D").custom('next:iter:Finish').fullfilled("E").fullfilled("3").fullfilledDone(undefined).isFinal();
logger.clear();
ff = foo('Init');
ff.next('A').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('B').then(fulfillSpy(logger), rejectSpy(logger));
ff.return('C').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('D').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('E').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('return:C').fullfilled(undefined).fullfilledDone("C").fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
logger.clear();
ff = foo('Init');
ff.next('A').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('B').then(fulfillSpy(logger), rejectSpy(logger));
ff.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
ff.next('D').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('E').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
ff.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('throw:' + new Error(errorMessage)).fullfilled(undefined).custom('next:D').fullfilled(undefined).custom('next:E').fullfilled('D').custom('next:iter:Finish').fullfilled('E').fullfilled('3').fullfilledDone(undefined).isFinal();
asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },

  next(value) {
    customSpy(logger)('next:' + value);
    return {
      value: value,
      done: 'iter:Finish' === value
    };
  }

};

async function* boo() {
  yield '0';
  yield* asyncIter;
  yield '3';
}

let b = boo('Init');
logger.clear();
b.next('A').then(fulfillSpy(logger), rejectSpy(logger));
b.next('B').then(fulfillSpy(logger), rejectSpy(logger));
b.next('C').then(fulfillSpy(logger), rejectSpy(logger));
b.next('D').then(fulfillSpy(logger), rejectSpy(logger));
b.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
b.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('next:C').fullfilled(undefined).custom('next:D').fullfilled("C").custom("next:iter:Finish").fullfilled("D").fullfilled("3").fullfilledDone(undefined).isFinal();
logger.clear();
b = boo('Init');
b.next('A').then(fulfillSpy(logger), rejectSpy(logger));
b.next('B').then(fulfillSpy(logger), rejectSpy(logger));
b.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
b.next('D').then(fulfillSpy(logger), rejectSpy(logger));
b.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
b.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').fullfilled(undefined).rejected('TypeError: Delegated generator does not have a \'throw\' method.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },

  next(value) {
    customSpy(logger)('next:' + value);
    return {
      value: value,
      done: 'iter:Finish' === value
    };
  },

  return(value) {
    customSpy(logger)('return:' + value);
    return {
      value: value,
      done: true
    };
  }

};

async function* bar() {
  yield '0';
  yield* asyncIter;
  yield '3';
}

b = bar('Init');
logger.clear();
b.next('A').then(fulfillSpy(logger), rejectSpy(logger));
b.next('B').then(fulfillSpy(logger), rejectSpy(logger));
b.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
b.next('D').then(fulfillSpy(logger), rejectSpy(logger));
b.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
b.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).rejected('TypeError: Delegated generator does not have a \'throw\' method.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
let ph = {};
asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },

  next(value) {
    customSpy(logger)('next:' + value);
    return {
      value: value,
      done: 'iter:Finish' === value
    };
  },

  return(value) {
    customSpy(logger)('return:' + value);
    return {
      value: getPromise(ph),
      done: true
    };
  }

};

async function* baz() {
  yield '0';
  yield* asyncIter;
  yield '3';
}

b = baz('Init');
logger.clear();
b.next('A').then(fulfillSpy(logger), rejectSpy(logger));
b.next('B').then(fulfillSpy(logger), rejectSpy(logger));
b.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
b.next('D').then(fulfillSpy(logger), rejectSpy(logger));
b.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
b.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).rejected('TypeError: Delegated generator does not have a \'throw\' method.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
ph.resolve('accept');
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).rejected('TypeError: Delegated generator does not have a \'throw\' method.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
ph = {};
asyncIter = {
  [Symbol.asyncIterator]() {
    return this;
  },

  next(value) {
    customSpy(logger)('next:' + value);
    return {
      value: value,
      done: 'iter:Finish' === value
    };
  },

  return(value) {
    customSpy(logger)('return:' + value);
    return getPromise(ph);
  }

};

async function* foobar() {
  yield '0';
  yield* asyncIter;
  yield '3';
}

fb = foobar('Init');
logger.clear();
fb.next('A').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('B').then(fulfillSpy(logger), rejectSpy(logger));
fb.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
fb.next('D').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).isFinal();
ph.resolve({
  value: 'value',
  done: true
});
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).rejected('TypeError: Delegated generator does not have a \'throw\' method.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
fb = foobar('Init');
logger.clear();
fb.next('A').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('B').then(fulfillSpy(logger), rejectSpy(logger));
fb.throw(new Error(errorMessage)).then(fulfillSpy(logger), rejectSpy(logger));
fb.next('D').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('iter:Finish').then(fulfillSpy(logger), rejectSpy(logger));
fb.next('Finish').then(fulfillSpy(logger), rejectSpy(logger));
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).isFinal();
ph.resolve('X');
logger.custom('next:undefined').fullfilled('0').custom('return:undefined').fullfilled(undefined).rejected('TypeError: Iterator result interface is not an object.').fullfilledDone(undefined).fullfilledDone(undefined).fullfilledDone(undefined).isFinal();
