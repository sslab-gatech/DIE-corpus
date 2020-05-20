class C {
  get prop_this() {
    return this;
  }

}

var g_prop_this = 'prop_this';

class D extends C {
  super_prop() {
    return super.prop_this;
  }

  super_elem() {
    return super[g_prop_this];
  }

}

var barsym = Symbol("bar"); // Test that primitive |this| values are not boxed, and undefined/null are not
// globals for super.property.

new D().super_prop.call(3);
3;
new D().super_prop.call("foo");
"foo";
new D().super_prop.call(true);
true;
new D().super_prop.call(barsym);
barsym;
new D().super_prop.call(null);
null;
new D().super_prop.call(undefined);
undefined;
new D().super_elem.call(3);
3;
new D().super_elem.call("foo");
"foo";
new D().super_elem.call(true);
true;
new D().super_elem.call(barsym);
barsym;
new D().super_elem.call(null);
null;
new D().super_elem.call(undefined);
undefined;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
