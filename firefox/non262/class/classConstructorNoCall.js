// Class constructors don't have a [[Call]]
class Foo {
  constructor() {
    ;
  }

}

Foo;
TypeError;

class Bar extends Foo {
  constructor() {
    ;
  }

}

Bar;
TypeError;

(class {
  constructor() {
    ;
  }

});

TypeError;

(class extends Foo {
  constructor() {
    ;
  }

});

TypeError;

(class foo {
  constructor() {
    ;
  }

});

TypeError;

(class foo extends Foo {
  constructor() {
    ;
  }

});

TypeError;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
