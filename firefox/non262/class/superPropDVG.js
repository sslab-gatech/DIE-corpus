// Super property accesses should play nice with the pretty printer.
class testNonExistent {
  constructor() {
    super["prop"]();
  }

} // Should fold to super.prop


(() => new testNonExistent())();

'super.prop';
var ol = {
  testNonExistent() {
    super.prop();
  }

};

(() => ol.testNonExistent())();

"super.prop";
var olElem = {
  testNonExistent() {
    var prop = "prop";
    super[prop]();
  }

};

(() => olElem.testNonExistent())();

"super[prop]";

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
