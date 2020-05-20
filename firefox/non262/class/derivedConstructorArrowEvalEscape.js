let arrow;

class foo extends class {} {
  constructor() {
    arrow = () => this;

    super();
  }

}

new foo();
arrow();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
