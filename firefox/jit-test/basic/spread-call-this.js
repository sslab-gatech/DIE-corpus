let global = this;
let p = {};
let q = {};

let g1 = function () {
  this;
  global;
  arguments.callee;
  g1;
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
  arguments.callee;
  g3;
};

g3.apply(p, ...[]);
g3.call(p, ...[]);
g2.apply(p, ...[]);
g2.call(p, ...[]);
let o = {
  f1: function () {
    this;
    o;
    arguments.callee;
    o.f1;

    let g1 = function () {
      this;
      global;
      arguments.callee;
      g1;
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
      arguments.callee;
      g3;
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

    //assertEq(arguments.callee, o.f2);
    let g1 = function () {
      this;
      global;
      arguments.callee;
      g1;
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
      arguments.callee;
      g3;
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
    arguments.callee;
    o.f3;

    let g1 = function () {
      this;
      global;
      arguments.callee;
      g1;
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
      arguments.callee;
      g3;
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
