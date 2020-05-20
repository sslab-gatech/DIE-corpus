// basic static method test
class X {
  static count() {
    return ++this.hits;
  }

  constructor() {
    ;
  }

}

X.hits = 0;
X.count();
1;
X.count instanceof Function;
true;
X.count.length;
0;
X.count.bind({
  hits: 77
})();
78;

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "OK");
}
