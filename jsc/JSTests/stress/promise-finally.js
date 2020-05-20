var assert = function (result, expected, message = "") {
  ;
};

const Logger = function () {
  var log = [];

  this.logEvent = (type, value) => {
    log.push({
      type,
      value
    });
  };

  this.logFulfilledEvent = value => {
    this.logEvent('fulfilled', value);
  };

  this.logRejectEvent = error => {
    this.logEvent('reject', error.toString());
  };

  this.logFinallyEvent = value => {
    this.logEvent('finally', value === undefined ? 'undefined' : value.toString());
  };

  this.logCatchEvent = value => {
    this.logEvent('catch', value.toString());
  };

  this.getLogger = () => log;

  this.clear = () => {
    log = [];
  };
};

var logger = new Logger();

const fulfillSpy = (logger => result => logger.logFulfilledEvent(result))(logger);

const rejectSpy = (logger => error => logger.logRejectEvent(error))(logger);

const catchSpy = (logger => error => logger.logCatchEvent(error))(logger);

const finallySpy = (logger => value => logger.logFinallyEvent(value))(logger);

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
      error === undefined ? 'undefined' : error.toString();
      msg;
      index++;
      return this;
    };

    this.finally = function (value, message = 'on reject') {
      isNotOutOfLength();
      const msg = `step: ${index} - ${message}`;
      let step = logger[index];
      step.type;
      'finally';
      msg;
      step.value;
      value === undefined ? 'undefined' : value.toString();
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
      expectedError === undefined ? 'undefined' : expectedError.toString();
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

Promise.resolve(1).finally(finallySpy);
Promise.reject(1).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value';
}, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-2';
}, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-2';
}, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-2';
}, rejectSpy).catch(catchSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).catch(catchSpy).finally(finallySpy).then(fulfillSpy, rejectSpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).catch(catchSpy).finally(finallySpy).catch(catchSpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).catch(catchSpy).finally(finallySpy).then(fulfillSpy, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).catch(catchSpy).finally(() => {
  finallySpy();
}).then(fulfillSpy, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}, rejectSpy).catch(catchSpy).finally(() => {
  finallySpy();
}).catch(catchSpy).finally();
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}).finally(VALUE => {
  finallySpy(VALUE);
  return 'value';
}).then(fulfillSpy, rejectSpy).finally(finallySpy);
Promise.resolve(1).then(VALUE => {
  fulfillSpy(VALUE);
  return 'some-value-1';
}).finally(VALUE => {
  finallySpy(VALUE);
  return 'value';
}).then(fulfillSpy).finally(finallySpy);
Promise.resolve(1).finally(VALUE => {
  finallySpy(VALUE);
  return 'value';
}).then(fulfillSpy, rejectSpy).finally(finallySpy);
Promise.reject(1).then(fulfillSpy, VALUE => {
  rejectSpy(VALUE);
  return 'some-value-1';
}).finally(VALUE => {
  finallySpy(VALUE);
  return 'value';
}).then(fulfillSpy).finally(finallySpy);
var obj = {};
var p = Promise.resolve(obj);
p.finally(function () {
  finallySpy(arguments.length);
  return {};
}).then(function (x) {
  fulfillSpy(x === obj);
});
p = Promise.reject(obj);
p.finally(function () {
  finallySpy(arguments.length);
  return {};
}).then(function (x) {
  fulfillSpy(x === obj);
}, function (x) {
  rejectSpy(x === obj);
});
