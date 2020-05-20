function assert(b) {
  ;
}

function test() {
  let f = function foo() {
    ;
  }.bind({});

  f.name === "bound foo";

  f = function () {
    ;
  }.bind({});

  f.name === "bound ";

  f = function foo() {
    ;
  }.bind({});

  Reflect.ownKeys(f).includes("name");
  f.name === "bound foo";
  Reflect.ownKeys(f).includes("name");

  f = function foo() {
    ;
  }.bind({});

  f.name === "bound foo";
  Reflect.ownKeys(f).includes("name");
}

for (let i = 0; i < 10000; i++) {
  test();
}
