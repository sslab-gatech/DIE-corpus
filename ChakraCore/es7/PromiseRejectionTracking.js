//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Test HostPromiseRejectionTracker - see ecma262 section 25.4.1.9
function t1(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  });
  controller.reject("Rejection from test " + index); //Should notify rejected
}

t1(1);

function t2(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  }).catch(() => {
    ;
  });
  controller.reject("Rejection from test " + index); //Should NOT notify
}

t2(2);

function t3(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  }).then(() => {
    ;
  }).catch(() => {
    ;
  });
  controller.reject("Rejection from test " + index); //Should NOT notify
}

t3(3);

function t4(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  });
  controller.reject("Rejection from test " + index); //Should notify rejected

  promise.catch(() => {
    ;
  }); //Should notify handled
}

t4(4);

function t5(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  });
  controller.reject("Rejection from test " + index); //Should notify rejected

  promise.catch(() => {
    ;
  }); //Should notify handled

  promise.catch(() => {
    ;
  }); //Should NOT notify
}

t5(5);

function t6(index) {
  async function aFunction() {
    throw "Rejection from test " + index;
  }

  aFunction(); //Should notify rejected
}

t6(6);

function t7(index) {
  async function aFunction() {
    throw "Rejection from test " + index;
  }

  aFunction().catch(() => {
    ;
  }); //Should notify rejected AND then handled
}

t7(7);

function t8(index) {
  async function aFunction() {
    throw "Rejection from test " + index; //Should notify rejected
  }

  async function bFunction() {
    await aFunction(); //Should notify handled
  }

  bFunction(); //Should notify rejected in the async section
}

t8(8);

function t9(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  });
  let a = promise.then(() => {
    ;
  }); //a is not handled

  let b = promise.then(() => {
    ;
  }); //b is not handled

  controller.reject("Rejection from test " + index); //no notification as handled

  let c = a.then(() => {
    ;
  }); //handle a

  c.catch(() => {
    b.then(() => {
      ;
    });
  }); // handle c
  //b is still not handled -> notify once in async section
  //b has an async handler -> will notify handled in async section
  //the .then() on b is not handled so will notify in async section
}

t9(9);

function t10(index) {
  let controller;
  let promise = new Promise((resolve, reject) => {
    controller = {
      resolve,
      reject
    };
  });
  let a = promise.then(() => {
    ;
  }); //a is not handled

  let b = promise.then(() => {
    ;
  }); //b is not handled

  controller.reject("Rejection from test " + index); //no notification as handled

  let c = a.then(() => {
    ;
  }); //handle a
  //b is not handled -> will notify in async section
  //c is not handled -> will notify in async section
}

t10(10);
