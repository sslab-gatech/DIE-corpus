"use strict";

let global = this;
let p = {};
let q = {};

let g1 = function () {
  this;
  undefined;
};

g1(...[]);

let g2 = x => {
  this;
  global;
};

g2(...[]);

let g3 = function () {
  this;
  p;
};

g3.apply(p, ...[]);
g3.call(p, ...[]);
g2.apply(p, ...[]);
g2.call(p, ...[]);
let o = {
  f1: function () {
    this;
    o;

    let g1 = function () {
      this;
      undefined;
    };

    g1(...[]);

    let g2 = x => {
      this;
      o;
    };

    g2(...[]);

    let g3 = function () {
      this;
      q;
    };

    g3.apply(q, ...[]);
    g3.call(q, ...[]);

    let g4 = x => {
      this;
      o;
    };

    g4.apply(q, ...[]);
    g4.call(q, ...[]);
  },
  f2: x => {
    this;
    global;

    let g1 = function () {
      this;
      undefined;
    };

    g1(...[]);

    let g2 = x => {
      this;
      global;
    };

    g2(...[]);

    let g3 = function () {
      this;
      q;
    };

    g3.apply(q, ...[]);
    g3.call(q, ...[]);

    let g4 = x => {
      this;
      global;
    };

    g4.apply(q, ...[]);
    g4.call(q, ...[]);
  },
  f3: function () {
    this;
    p;

    let g1 = function () {
      this;
      undefined;
    };

    g1(...[]);

    let g2 = x => {
      this;
      p;
    };

    g2(...[]);

    let g3 = function () {
      this;
      q;
    };

    g3.apply(q, ...[]);
    g3.call(q, ...[]);

    let g4 = x => {
      this;
      p;
    };

    g4.apply(q, ...[]);
    g4.call(q, ...[]);
  }
};
o.f1(...[]);
o.f2(...[]);
o.f3.apply(p, ...[]);
o.f2.apply(p, ...[]);
