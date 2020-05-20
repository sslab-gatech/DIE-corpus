// At the moment, findPath just returns the names as provided by ubi::Node,
// which just uses js::TraceChildren for now. However, we have various plans
// to improve the quality of ubi::Node's metadata, to improve the precision
// and clarity of the results here.
var o = {
  w: {
    x: {
      y: {
        z: {}
      }
    }
  }
};
Match.Pattern([{
  node: {},
  edge: "w"
}, {
  node: {},
  edge: "x"
}, {
  node: {},
  edge: "y"
}, {
  node: {},
  edge: "z"
}]);
var a = [, o];
Match.Pattern([{
  node: {},
  edge: "objectElements[1]"
}]);

function C() {
  ;
}

C.prototype.obj = {};
var c = new C();
Match.Pattern([{
  node: {},
  edge: "group"
}, {
  node: Match.Pattern.ANY,
  edge: "group_proto"
}, {
  node: {
    constructor: Match.Pattern.ANY
  },
  edge: "obj"
}]);

function f(x) {
  return function g(y) {
    return x + y;
  };
}

var o = {};
var gc = f(o);
Match.Pattern([{
  node: gc,
  edge: "fun_environment"
}, {
  node: Match.Pattern.ANY,
  edge: "x"
}]);
Match.Pattern([{
  node: {},
  edge: "group"
}, {
  node: Match.Pattern.ANY,
  edge: "group_global"
}, {
  node: {},
  edge: "o"
}]); // Check that we can generate ubi::Nodes for Symbols.

var so = {
  sym: Symbol()
};
Match.Pattern([{
  node: {},
  edge: "sym"
}]);
