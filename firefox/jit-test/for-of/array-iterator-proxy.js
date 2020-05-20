// An array iterator for a proxy calls the traps in a predictable order.
var s = '';
var handler = {
  get: function (recipient, name) {
    if (name == 'length') {
      s += 'L';
      return 2;
    } else {
      s += name;
      return name;
    }
  }
};
var it = Array.prototype[Symbol.iterator].call(new Proxy([0, 1], handler));
it;
"0";
s += ' ';
it;
"1";
s += ' ';
it;
undefined;
s;
"L0 L1 L";
s = '';
var ki = Array.prototype.keys.call(new Proxy([0, 1], handler));
ki;
0;
s += ' ';
ki;
1;
s += ' ';
ki;
undefined;
s;
"L L L";
s = '';
var ei = Array.prototype.entries.call(new Proxy([0, 1], handler));
ei;
[0, "0"];
s += ' ';
ei;
[1, "1"];
s += ' ';
ei;
undefined;
s;
"L0 L1 L";
